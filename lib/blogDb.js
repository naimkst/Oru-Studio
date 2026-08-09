import fs from "fs";
import path from "path";
import Database from "better-sqlite3";

let db;

const DEFAULT_THUMBNAIL = "/images/hero-video-area-shopify-01.webp";
const FALLBACK_THUMBNAILS = [
  "/images/hero-video-area-shopify-01.webp",
  "/images/hero-video-area-shopify-02.webp",
  "/images/hero-video-area-shopify-03.webp",
  "/images/hero-video-area-shopify-04.webp",
  "/images/hero-video-area-shopify-05.webp",
  "/images/hero-video-area-shopify-06.webp",
  "/images/hero-video-area-shopify-07.webp",
  "/images/hero-video-area-shopify-08.webp",
  "/images/hero-video-area-shopify-09.webp",
  "/images/hero-video-area-shopify-10.webp",
];

function getDatabasePath() {
  return process.env.BLOG_DB_PATH || path.join(process.cwd(), "data", "blog.sqlite");
}

function nowIso() {
  return new Date().toISOString();
}

function safeJsonParse(value, fallback) {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function publicFilePath(src) {
  if (!src || !String(src).startsWith("/")) {
    return null;
  }

  const cleanPath = String(src).split("?")[0].split("#")[0].replace(/^\/+/, "");

  if (!cleanPath || cleanPath.includes("..")) {
    return null;
  }

  return path.join(process.cwd(), "public", cleanPath);
}

function hashString(value) {
  return String(value || "")
    .split("")
    .reduce((hash, character) => (hash * 31 + character.charCodeAt(0)) >>> 0, 0);
}

function fallbackThumbnailFor(key, offset = 0) {
  const index = (hashString(key) + offset) % FALLBACK_THUMBNAILS.length;

  return FALLBACK_THUMBNAILS[index];
}

function localPublicImageExists(src) {
  const filePath = publicFilePath(src);

  return !filePath || fs.existsSync(filePath);
}

function normalizeImageSrc(src, fallbackKey, offset = 0) {
  if (!src) {
    return fallbackThumbnailFor(fallbackKey, offset);
  }

  return localPublicImageExists(src) ? src : fallbackThumbnailFor(fallbackKey || src, offset);
}

function normalizeThumbnailSrc(src, fallbackKey) {
  if (!src || src === DEFAULT_THUMBNAIL) {
    return fallbackThumbnailFor(fallbackKey);
  }

  return normalizeImageSrc(src, fallbackKey);
}

function normalizeBodyImages(body, fallbackKey) {
  return body.map((block, index) => {
    if (block.type !== "image") {
      return block;
    }

    const originalSrc = block.src || "";
    const src = normalizeImageSrc(originalSrc, `${fallbackKey}-body-${index}`, index + 1);

    return {
      ...block,
      src,
      originalSrc,
      imageMissing: Boolean(originalSrc && !localPublicImageExists(originalSrc)),
    };
  });
}

export function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
}

function normalizeStatus(status, scheduledAt) {
  if (status === "published" || status === "draft") {
    return status;
  }

  return scheduledAt ? "scheduled" : "draft";
}

function normalizePostRow(row) {
  if (!row) {
    return null;
  }

  const tags = safeJsonParse(row.tags, []);
  const fallbackKey = `${row.id}-${row.slug}-${row.title}`;
  const body = normalizeBodyImages(safeJsonParse(row.body_json, []), fallbackKey);
  const content = safeJsonParse(row.content_json, []);
  const dateSource = row.published_at || row.scheduled_at || row.created_at;
  const originalThumbnail = row.thumbnail || DEFAULT_THUMBNAIL;
  const thumbnail = normalizeThumbnailSrc(originalThumbnail, `${fallbackKey}-thumbnail`);
  const thumbnailMissing = Boolean(
    originalThumbnail !== DEFAULT_THUMBNAIL && !localPublicImageExists(originalThumbnail)
  );

  return {
    id: `generated-${row.id}`,
    dbId: row.id,
    title: row.title,
    slug: row.slug,
    category: row.category,
    thumbnail,
    originalThumbnail,
    thumbnailMissing,
    date: dateSource ? dateSource.slice(0, 10) : nowIso().slice(0, 10),
    readTime: row.read_time,
    description: row.description,
    content,
    body,
    tags,
    status: row.status,
    scheduledAt: row.scheduled_at,
    publishedAt: row.published_at,
    source: row.source,
    model: row.model,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function uniqueFallbackThumbnailFor(post, usedThumbnails, index) {
  for (let offset = 0; offset < FALLBACK_THUMBNAILS.length; offset += 1) {
    const candidate = fallbackThumbnailFor(
      `${post.dbId}-${post.slug}-${post.title}-duplicate-${index}`,
      offset
    );

    if (!usedThumbnails.has(candidate)) {
      return candidate;
    }
  }

  return fallbackThumbnailFor(`${post.dbId}-${post.slug}-${post.title}-duplicate-${index}`);
}

function ensureUniqueThumbnails(posts) {
  const usedThumbnails = new Set();

  return posts.map((post, index) => {
    if (!post.thumbnail || usedThumbnails.has(post.thumbnail)) {
      const thumbnail = uniqueFallbackThumbnailFor(post, usedThumbnails, index);
      usedThumbnails.add(thumbnail);

      return {
        ...post,
        thumbnail,
        thumbnailWasDuplicate: true,
      };
    }

    usedThumbnails.add(post.thumbnail);
    return post;
  });
}

export function getDb() {
  if (db) {
    return db;
  }

  const databasePath = getDatabasePath();
  fs.mkdirSync(path.dirname(databasePath), { recursive: true });
  db = new Database(databasePath);
  db.pragma("journal_mode = WAL");
  db.exec(`
    CREATE TABLE IF NOT EXISTS blog_posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      slug TEXT NOT NULL UNIQUE,
      description TEXT NOT NULL,
      category TEXT NOT NULL,
      tags TEXT NOT NULL DEFAULT '[]',
      thumbnail TEXT NOT NULL,
      read_time TEXT NOT NULL,
      body_json TEXT NOT NULL,
      content_json TEXT NOT NULL DEFAULT '[]',
      status TEXT NOT NULL DEFAULT 'draft',
      scheduled_at TEXT,
      published_at TEXT,
      source TEXT NOT NULL DEFAULT 'manual',
      generation_prompt TEXT,
      model TEXT,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );

    CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
    CREATE INDEX IF NOT EXISTS idx_blog_posts_status_schedule ON blog_posts(status, scheduled_at);
  `);

  return db;
}

export function getPublicGeneratedPosts() {
  const current = nowIso();

  const posts = getDb()
    .prepare(
      `
      SELECT * FROM blog_posts
      WHERE status = 'published'
        OR (status = 'scheduled' AND scheduled_at IS NOT NULL AND scheduled_at <= ?)
      ORDER BY COALESCE(published_at, scheduled_at, created_at) DESC
      `
    )
    .all(current)
    .map(normalizePostRow);

  return ensureUniqueThumbnails(posts);
}

export function getGeneratedPostBySlug(slug, { includeUnpublished = false } = {}) {
  const row = getDb().prepare("SELECT * FROM blog_posts WHERE slug = ?").get(slug);
  const post = normalizePostRow(row);

  if (!post || includeUnpublished) {
    return post;
  }

  if (post.status === "published") {
    return post;
  }

  if (post.status === "scheduled" && post.scheduledAt && post.scheduledAt <= nowIso()) {
    return post;
  }

  return null;
}

export function listAdminPosts() {
  const posts = getDb()
    .prepare("SELECT * FROM blog_posts ORDER BY COALESCE(scheduled_at, published_at, created_at) DESC")
    .all()
    .map(normalizePostRow);

  return ensureUniqueThumbnails(posts);
}

export function createGeneratedPost(input) {
  const timestamp = nowIso();
  const scheduledAt = input.scheduledAt || null;
  const status = normalizeStatus(input.status, scheduledAt);
  const publishedAt = status === "published" ? input.publishedAt || timestamp : null;
  const slug = ensureUniqueSlug(input.slug || slugify(input.title));
  const body = Array.isArray(input.body) ? input.body : [];
  const content = body
    .filter((block) => block.type === "paragraph")
    .slice(0, 3)
    .map((block) => block.text);

  const result = getDb()
    .prepare(
      `
      INSERT INTO blog_posts (
        title, slug, description, category, tags, thumbnail, read_time,
        body_json, content_json, status, scheduled_at, published_at,
        source, generation_prompt, model, created_at, updated_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `
    )
    .run(
      input.title,
      slug,
      input.description,
      input.category,
      JSON.stringify(input.tags || []),
      input.thumbnail || DEFAULT_THUMBNAIL,
      input.readTime || estimateReadTime(body),
      JSON.stringify(body),
      JSON.stringify(content),
      status,
      scheduledAt,
      publishedAt,
      input.source || "manual",
      input.generationPrompt || null,
      input.model || null,
      timestamp,
      timestamp
    );

  return getGeneratedPostById(result.lastInsertRowid);
}

export function updateGeneratedPost(id, input) {
  const existing = getGeneratedPostById(id);

  if (!existing) {
    return null;
  }

  const scheduledAt = input.scheduledAt === undefined ? existing.scheduledAt : input.scheduledAt || null;
  const status = normalizeStatus(input.status || existing.status, scheduledAt);
  const publishedAt =
    status === "published"
      ? input.publishedAt || existing.publishedAt || nowIso()
      : input.publishedAt === undefined
        ? existing.publishedAt
        : input.publishedAt;
  const body = input.body || existing.body || [];
  const content = body
    .filter((block) => block.type === "paragraph")
    .slice(0, 3)
    .map((block) => block.text);

  getDb()
    .prepare(
      `
      UPDATE blog_posts
      SET title = ?, slug = ?, description = ?, category = ?, tags = ?,
        thumbnail = ?, read_time = ?, body_json = ?, content_json = ?,
        status = ?, scheduled_at = ?, published_at = ?,
        generation_prompt = COALESCE(?, generation_prompt),
        model = COALESCE(?, model),
        updated_at = ?
      WHERE id = ?
      `
    )
    .run(
      input.title || existing.title,
      input.slug ? ensureUniqueSlug(input.slug, id) : existing.slug,
      input.description || existing.description,
      input.category || existing.category,
      JSON.stringify(input.tags || existing.tags || []),
      input.thumbnail || existing.thumbnail || DEFAULT_THUMBNAIL,
      input.readTime || existing.readTime || estimateReadTime(body),
      JSON.stringify(body),
      JSON.stringify(content),
      status,
      scheduledAt,
      publishedAt,
      input.generationPrompt || null,
      input.model || null,
      nowIso(),
      id
    );

  return getGeneratedPostById(id);
}

export function deleteGeneratedPost(id) {
  return getDb().prepare("DELETE FROM blog_posts WHERE id = ?").run(id).changes > 0;
}

export function publishDuePosts() {
  const timestamp = nowIso();

  return getDb()
    .prepare(
      `
      UPDATE blog_posts
      SET status = 'published', published_at = COALESCE(published_at, scheduled_at, ?), updated_at = ?
      WHERE status = 'scheduled' AND scheduled_at IS NOT NULL AND scheduled_at <= ?
      `
    )
    .run(timestamp, timestamp, timestamp).changes;
}

export function hasGeneratedPostForDate(datePrefix) {
  const row = getDb()
    .prepare(
      `
      SELECT id FROM blog_posts
      WHERE status IN ('published', 'scheduled')
        AND substr(COALESCE(published_at, scheduled_at, created_at), 1, 10) = ?
      LIMIT 1
      `
    )
    .get(datePrefix);

  return Boolean(row);
}

export function getRecentGeneratedTitles(limit = 30) {
  return getDb()
    .prepare(
      "SELECT title FROM blog_posts ORDER BY COALESCE(published_at, scheduled_at, created_at) DESC LIMIT ?"
    )
    .all(limit)
    .map((row) => row.title);
}

export function getGeneratedPostById(id) {
  return normalizePostRow(getDb().prepare("SELECT * FROM blog_posts WHERE id = ?").get(id));
}

export function ensureUniqueSlug(baseSlug, currentId = null) {
  const base = slugify(baseSlug) || `article-${Date.now()}`;
  let slug = base;
  let index = 2;

  while (true) {
    const row = getDb().prepare("SELECT id FROM blog_posts WHERE slug = ?").get(slug);

    if (!row || row.id === currentId) {
      return slug;
    }

    slug = `${base}-${index}`;
    index += 1;
  }
}

export function estimateReadTime(body) {
  const words = (body || [])
    .map((block) => [block.text, ...(block.items || [])].filter(Boolean).join(" "))
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  const minutes = Math.max(8, Math.ceil(words / 180));

  return `${minutes} min read`;
}
