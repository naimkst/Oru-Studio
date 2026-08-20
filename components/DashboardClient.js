"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import FallbackImage from "./FallbackImage";

const ADMIN_POST_PAGE_SIZE = 10;
const DEFAULT_MANUAL_BODY_JSON = "[]";
const DAILY_BLOG_PROMPT = `Create one complete daily SEO blog post for Oru Studio's Shopify and ecommerce audience.

Return valid JSON only. Do not wrap it in markdown.

Schema:
{
  "title": "Clear SEO title under 70 characters",
  "slug": "optional-url-slug",
  "description": "Meta description under 160 characters",
  "category": "Shopify Development",
  "tags": ["Shopify", "Ecommerce", "Conversion"],
  "thumbnail": {
    "src": "",
    "alt": "Thumbnail alt text",
    "prompt": "Image prompt for a clean blog thumbnail"
  },
  "readTime": "10 min read",
  "body": [
    { "type": "paragraph", "text": "Strong opening paragraph." },
    { "type": "heading", "text": "Main section heading" },
    { "type": "paragraph", "text": "Detailed explanation." },
    { "type": "image", "src": "", "alt": "Image alt text", "caption": "Short caption", "prompt": "Image prompt for this in-content visual" },
    { "type": "list", "text": "Key points:", "items": ["Point one", "Point two", "Point three"] },
    { "type": "callout", "text": "Important practical takeaway." }
  ]
}

Requirements:
- Write 1,800 to 2,500 words for founders, ecommerce operators, and Shopify teams.
- Include one thumbnail prompt and 2 to 3 in-content image blocks.
- Leave every image "src" blank unless you already have a real uploaded image URL.
- Use practical steps, examples, common mistakes, and implementation details.
- Include 5 to 8 tags.
- Keep the article accurate, specific, and ready to publish.`;

function toDatetimeLocal(date) {
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 16);
}

function toIsoOrNull(value) {
  return value ? new Date(value).toISOString() : null;
}

function createManualForm() {
  return {
    title: "",
    slug: "",
    description: "",
    category: "Shopify Development",
    tags: "",
    thumbnail: "",
    readTime: "",
    status: "draft",
    scheduledAt: toDatetimeLocal(new Date(Date.now() + 24 * 60 * 60 * 1000)),
    bodyJson: DEFAULT_MANUAL_BODY_JSON,
  };
}

function normalizeTagList(value) {
  if (Array.isArray(value)) {
    return value.map((tag) => String(tag || "").trim()).filter(Boolean);
  }

  return String(value || "")
    .split(/[,#\n]/)
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function normalizeManualBlock(block) {
  if (typeof block === "string") {
    const text = block.trim();
    return text ? { type: "paragraph", text } : null;
  }

  if (!block || typeof block !== "object") {
    return null;
  }

  const type = String(block.type || "paragraph").toLowerCase();

  if (type === "heading" || type === "h2") {
    const text = String(block.text || block.heading || block.title || "").trim();
    return text ? { type: "heading", text } : null;
  }

  if (type === "list" || type === "ul") {
    const items = Array.isArray(block.items)
      ? block.items.map((item) => String(item || "").trim()).filter(Boolean)
      : [];
    const text = String(block.text || block.heading || "").trim();

    return text || items.length ? { type: "list", text, items } : null;
  }

  if (type === "image" || type === "figure") {
    const src = String(block.src || block.url || block.image || block.imageUrl || "").trim();
    const alt = String(block.alt || block.altText || "").trim();
    const caption = String(block.caption || "").trim();
    const prompt = String(block.prompt || block.imagePrompt || "").trim();

    return src || alt || caption || prompt
      ? { type: "image", src, alt, caption, prompt }
      : null;
  }

  if (type === "callout" || type === "quote") {
    const text = String(block.text || block.quote || block.content || "").trim();
    return text ? { type: "callout", text } : null;
  }

  const text = String(block.text || block.paragraph || block.content || "").trim();
  return text ? { type: "paragraph", text } : null;
}

function normalizeManualBlocks(value) {
  const blocks = Array.isArray(value)
    ? value
    : typeof value === "string"
      ? [{ type: "paragraph", text: value }]
      : [];

  return blocks.map(normalizeManualBlock).filter(Boolean);
}

function readImportedThumbnail(post) {
  if (typeof post.thumbnail === "string") {
    return post.thumbnail;
  }

  return (
    post.thumbnail?.src ||
    post.thumbnail?.url ||
    post.thumbnailUrl ||
    post.featuredImage ||
    ""
  );
}

function extractPostJson(value) {
  const parsed = JSON.parse(value);
  const post = Array.isArray(parsed) ? { body: parsed } : parsed || {};
  const bodySource =
    Array.isArray(parsed)
      ? parsed
      : post.body || post.blocks || post.articleBody || post.contentBlocks || post.content;
  const body = normalizeManualBlocks(bodySource);

  if (!body.length) {
    throw new Error("Paste a JSON object with a body array, or paste the body array itself.");
  }

  return { post, body };
}

function readManualBodyForAppend(value) {
  const parsed = JSON.parse(value || DEFAULT_MANUAL_BODY_JSON);
  const bodySource = Array.isArray(parsed)
    ? parsed
    : parsed?.body || parsed?.blocks || parsed?.articleBody || parsed?.contentBlocks || parsed?.content;

  return normalizeManualBlocks(bodySource);
}

function buildManualPostPayload(form) {
  const imported = extractPostJson(form.bodyJson);
  const { post, body } = imported;
  const title = (form.title || post.title || "").trim();
  const description = (form.description || post.description || post.metaDescription || "").trim();
  const category = (form.category || post.category || "Shopify Development").trim();
  const tags = normalizeTagList(form.tags || post.tags || post.keywords);
  const thumbnail = (form.thumbnail || readImportedThumbnail(post)).trim();
  const readTime = (form.readTime || post.readTime || "").trim();

  if (!title || !description || !category) {
    throw new Error("Title, description, category, and article JSON are required.");
  }

  return {
    title,
    slug: (form.slug || post.slug || "").trim(),
    description,
    category,
    tags,
    thumbnail,
    readTime,
    body,
    status: form.status,
    scheduledAt: form.status === "scheduled" ? toIsoOrNull(form.scheduledAt) : null,
    source: "manual",
  };
}

function filenameToAltText(filename) {
  return String(filename || "Blog image")
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function formatDate(value) {
  if (!value) {
    return "Not scheduled";
  }

  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

async function readErrorMessage(response, fallback) {
  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    const data = await response.json().catch(() => ({}));
    return data.message || fallback;
  }

  const text = await response.text().catch(() => "");
  const shortText = text.replace(/\s+/g, " ").trim().slice(0, 180);

  if (response.status === 502 || response.status === 504) {
    return `Generation timed out or the server gateway returned HTTP ${response.status}. Increase nginx proxy timeouts and check PM2 logs.`;
  }

  return shortText ? `${fallback} HTTP ${response.status}: ${shortText}` : `${fallback} HTTP ${response.status}.`;
}

export default function DashboardClient() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [session, setSession] = useState(null);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [manualSaving, setManualSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState("");
  const [activePostAction, setActivePostAction] = useState(null);
  const [visiblePostCount, setVisiblePostCount] = useState(ADMIN_POST_PAGE_SIZE);
  const [message, setMessage] = useState("");
  const [manualMessage, setManualMessage] = useState("");
  const [manualMessageType, setManualMessageType] = useState("info");
  const [form, setForm] = useState({
    topic: "",
    category: "Shopify Development",
    status: "scheduled",
    scheduledAt: toDatetimeLocal(new Date(Date.now() + 24 * 60 * 60 * 1000)),
  });
  const [manualForm, setManualForm] = useState(createManualForm);

  const counts = useMemo(
    () => ({
      total: posts.length,
      published: posts.filter((post) => post.status === "published").length,
      scheduled: posts.filter((post) => post.status === "scheduled").length,
      draft: posts.filter((post) => post.status === "draft").length,
    }),
    [posts]
  );
  const visiblePosts = useMemo(
    () => posts.slice(0, visiblePostCount),
    [posts, visiblePostCount]
  );
  const manualBodyBlockCount = useMemo(() => {
    try {
      return readManualBodyForAppend(manualForm.bodyJson).length;
    } catch {
      return 0;
    }
  }, [manualForm.bodyJson]);
  const hasMorePosts = visiblePostCount < posts.length;

  useEffect(() => {
    setVisiblePostCount((current) =>
      Math.min(Math.max(ADMIN_POST_PAGE_SIZE, current), Math.max(posts.length, ADMIN_POST_PAGE_SIZE))
    );
  }, [posts.length]);

  function getPostActionType(post) {
    return activePostAction?.id === post.dbId ? activePostAction.type : null;
  }

  function getPostActionMessage(actionType) {
    if (actionType === "article") {
      return "Regenerating the full article and fresh images. This can take a few minutes.";
    }

    if (actionType === "media") {
      return "Regenerating thumbnail and in-content images.";
    }

    if (actionType === "publish") {
      return "Publishing this article.";
    }

    if (actionType === "draft") {
      return "Moving this article back to draft.";
    }

    if (actionType === "delete") {
      return "Deleting this article.";
    }

    return "";
  }

  function replacePost(updatedPost) {
    if (!updatedPost?.dbId) {
      return;
    }

    setPosts((currentPosts) =>
      currentPosts.map((post) => (post.dbId === updatedPost.dbId ? updatedPost : post))
    );
  }

  async function loadDashboard() {
    setLoadingPosts(true);
    const [sessionResponse, postsResponse] = await Promise.all([
      fetch("/api/admin/session", { cache: "no-store" }),
      fetch("/api/admin/posts", { cache: "no-store" }),
    ]);

    if (sessionResponse.ok) {
      setSession(await sessionResponse.json());
    }

    if (postsResponse.ok) {
      const data = await postsResponse.json();
      setPosts(data.posts || []);
    }

    setLoadingPosts(false);
  }

  useEffect(() => {
    loadDashboard();
  }, []);

  async function generatePost(event) {
    event.preventDefault();
    setGenerating(true);
    setMessage("");

    let response;

    try {
      response = await fetch("/api/admin/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: form.topic,
          category: form.category,
          status: form.status,
          scheduledAt: form.status === "scheduled" ? toIsoOrNull(form.scheduledAt) : null,
        }),
      });
    } catch (error) {
      setGenerating(false);
      setMessage(error.message || "Article generation request failed before reaching the server.");
      return;
    }

    setGenerating(false);

    if (!response.ok) {
      setMessage(
        await readErrorMessage(
          response,
          "Article generation failed. Check OPENAI_API_KEY and server logs."
        )
      );
      return;
    }

    const data = await response.json().catch(() => ({}));
    setMessage(`Generated: ${data.post.title}`);
    setForm((current) => ({ ...current, topic: "" }));
    await loadDashboard();
    router.refresh();
  }

  async function uploadBlogImage(file) {
    const uploadFormData = new FormData();
    uploadFormData.append("image", file);

    const response = await fetch("/api/admin/blog-images", {
      method: "POST",
      body: uploadFormData,
    });

    if (!response.ok) {
      throw new Error(await readErrorMessage(response, "Image upload failed."));
    }

    return response.json();
  }

  async function uploadThumbnail(event) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setUploadingImage("thumbnail");
    setManualMessage("");

    try {
      const data = await uploadBlogImage(file);
      setManualForm((current) => ({ ...current, thumbnail: data.src }));
      setManualMessage(`Uploaded thumbnail: ${data.src}`);
      setManualMessageType("info");
    } catch (error) {
      setManualMessage(error.message || "Thumbnail upload failed.");
      setManualMessageType("error");
    } finally {
      setUploadingImage("");
      event.target.value = "";
    }
  }

  async function appendBodyImage(event) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setUploadingImage("body");
    setManualMessage("");

    try {
      const data = await uploadBlogImage(file);
      const body = readManualBodyForAppend(manualForm.bodyJson);
      const updatedBody = [
        ...body,
        {
          type: "image",
          src: data.src,
          alt: filenameToAltText(file.name),
          caption: "",
        },
      ];

      setManualForm((current) => ({
        ...current,
        bodyJson: JSON.stringify(updatedBody, null, 2),
      }));
      setManualMessage(`Added content image: ${data.src}`);
      setManualMessageType("info");
    } catch (error) {
      setManualMessage(error.message || "Content image upload failed.");
      setManualMessageType("error");
    } finally {
      setUploadingImage("");
      event.target.value = "";
    }
  }

  async function copyDailyPrompt() {
    if (!navigator.clipboard?.writeText) {
      setManualMessage("Select and copy the prompt from the text area.");
      setManualMessageType("error");
      return;
    }

    try {
      await navigator.clipboard.writeText(DAILY_BLOG_PROMPT);
      setManualMessage("Daily ChatGPT prompt copied.");
      setManualMessageType("info");
    } catch (error) {
      setManualMessage(error.message || "Prompt copy failed.");
      setManualMessageType("error");
    }
  }

  function importManualJson() {
    setManualMessage("");

    try {
      const { post, body } = extractPostJson(manualForm.bodyJson);

      setManualForm((current) => ({
        ...current,
        title: post.title || current.title,
        slug: post.slug || current.slug,
        description: post.description || post.metaDescription || current.description,
        category: post.category || current.category,
        tags: normalizeTagList(post.tags || post.keywords).join(", ") || current.tags,
        thumbnail: readImportedThumbnail(post) || current.thumbnail,
        readTime: post.readTime || current.readTime,
        bodyJson: JSON.stringify(body, null, 2),
      }));
      setManualMessage(`Imported ChatGPT JSON with ${body.length} article block(s).`);
      setManualMessageType("info");
    } catch (error) {
      setManualMessage(error.message || "Could not import the JSON.");
      setManualMessageType("error");
    }
  }

  async function saveManualPost(event) {
    event.preventDefault();
    setManualSaving(true);
    setManualMessage("");

    let payload;

    try {
      payload = buildManualPostPayload(manualForm);
    } catch (error) {
      setManualSaving(false);
      setManualMessage(error.message || "Manual post details are incomplete.");
      setManualMessageType("error");
      return;
    }

    try {
      const response = await fetch("/api/admin/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setManualMessage(await readErrorMessage(response, "Manual post save failed."));
        setManualMessageType("error");
        return;
      }

      const data = await response.json().catch(() => ({}));
      setManualMessage(`Saved blog post: ${data.post?.title || payload.title}`);
      setManualMessageType("info");
      setManualForm(createManualForm());
      await loadDashboard();
      router.refresh();
    } catch (error) {
      setManualMessage(error.message || "Manual post request failed before reaching the server.");
      setManualMessageType("error");
    } finally {
      setManualSaving(false);
    }
  }

  async function updateStatus(post, status) {
    setActivePostAction({ id: post.dbId, type: status === "published" ? "publish" : "draft" });
    setMessage("");

    try {
      const response = await fetch(`/api/admin/posts/${post.dbId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        await loadDashboard();
        router.refresh();
      } else {
        setMessage(await readErrorMessage(response, "Status update failed."));
      }
    } catch (error) {
      setMessage(error.message || "Status update request failed before reaching the server.");
    } finally {
      setActivePostAction(null);
    }
  }

  async function regenerateMedia(post) {
    setActivePostAction({ id: post.dbId, type: "media" });
    setMessage(`Regenerating media for: ${post.title}`);

    try {
      const response = await fetch(`/api/admin/posts/${post.dbId}/regenerate-media`, {
        method: "POST",
      });

      if (!response.ok) {
        setMessage(
          await readErrorMessage(
            response,
            "Media regeneration failed. Check OPENAI_API_KEY and server logs."
          )
        );
        return;
      }

      const data = await response.json().catch(() => ({}));
      replacePost(data.post);
      setMessage(`Regenerated media for: ${data.post?.title || post.title}`);
      await loadDashboard();
      router.refresh();
    } catch (error) {
      setMessage(error.message || "Media regeneration request failed before reaching the server.");
    } finally {
      setActivePostAction(null);
    }
  }

  async function regenerateArticle(post) {
    if (!window.confirm(`Regenerate and replace the article content for "${post.title}"?`)) {
      return;
    }

    setActivePostAction({ id: post.dbId, type: "article" });
    setMessage(`Regenerating article for: ${post.title}`);

    try {
      const response = await fetch(`/api/admin/posts/${post.dbId}/regenerate-article`, {
        method: "POST",
      });

      if (!response.ok) {
        setMessage(
          await readErrorMessage(
            response,
            "Article regeneration failed. Check OPENAI_API_KEY and server logs."
          )
        );
        return;
      }

      const data = await response.json().catch(() => ({}));
      replacePost(data.post);
      setMessage(`Regenerated article: ${data.post?.title || post.title}`);
      await loadDashboard();
      router.refresh();
    } catch (error) {
      setMessage(error.message || "Article regeneration request failed before reaching the server.");
    } finally {
      setActivePostAction(null);
    }
  }

  async function deletePost(post) {
    if (!window.confirm(`Delete "${post.title}"?`)) {
      return;
    }

    setActivePostAction({ id: post.dbId, type: "delete" });
    setMessage("");

    try {
      const response = await fetch(`/api/admin/posts/${post.dbId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        await loadDashboard();
        router.refresh();
      } else {
        setMessage(await readErrorMessage(response, "Delete failed."));
      }
    } catch (error) {
      setMessage(error.message || "Delete request failed before reaching the server.");
    } finally {
      setActivePostAction(null);
    }
  }

  async function publishDue() {
    const response = await fetch("/api/admin/publish-due", { method: "POST" });
    const data = await response.json().catch(() => ({}));

    if (response.ok) {
      setMessage(`Published ${data.publishedCount || 0} due post(s).`);
      await loadDashboard();
      router.refresh();
    }
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  return (
    <div className="admin-page">
      <header className="admin-topbar">
        <div>
          <span>Oru Studio Blog</span>
          <h1>Publishing Dashboard</h1>
        </div>
        <div className="admin-topbar-actions">
          <Link href="/blog">View blog</Link>
          <button type="button" onClick={logout}>Logout</button>
        </div>
      </header>

      {session?.insecureDefaultPassword && (
        <div className="admin-warning">
          Default dashboard password is active. Set BLOG_ADMIN_USERNAME, BLOG_ADMIN_PASSWORD, and BLOG_SESSION_SECRET before production use.
        </div>
      )}

      <section className="admin-metrics">
        <div>
          <strong>{counts.total}</strong>
          <span>Blog posts</span>
        </div>
        <div>
          <strong>{counts.published}</strong>
          <span>Published</span>
        </div>
        <div>
          <strong>{counts.scheduled}</strong>
          <span>Scheduled</span>
        </div>
        <div>
          <strong>{counts.draft}</strong>
          <span>Drafts</span>
        </div>
      </section>

      <main className="admin-layout">
        <div className="admin-sidebar-stack">
          <section className="admin-panel admin-generator-panel">
            <div className="admin-section-heading">
              <h2>Generate Article</h2>
              <p>Create a large Shopify-focused article with category, tags, generated thumbnail, in-content image, and scheduled publish time.</p>
            </div>
            <form className="admin-form-grid" onSubmit={generatePost}>
              <label>
                Topic or instruction
                <textarea
                  value={form.topic}
                  onChange={(event) => setForm((current) => ({ ...current, topic: event.target.value }))}
                  placeholder="Example: How to fix Shopify app proxy signature missing errors"
                  rows={5}
                />
              </label>
              <label>
                Category
                <input
                  value={form.category}
                  onChange={(event) => setForm((current) => ({ ...current, category: event.target.value }))}
                  required
                />
              </label>
              <label>
                Status
                <select
                  value={form.status}
                  onChange={(event) => setForm((current) => ({ ...current, status: event.target.value }))}
                >
                  <option value="scheduled">Schedule</option>
                  <option value="draft">Draft</option>
                  <option value="published">Publish now</option>
                </select>
              </label>
              {form.status === "scheduled" && (
                <label>
                  Publish date
                  <input
                    type="datetime-local"
                    value={form.scheduledAt}
                    onChange={(event) => setForm((current) => ({ ...current, scheduledAt: event.target.value }))}
                    required
                  />
                </label>
              )}
              {message && <p className="admin-message">{message}</p>}
              <div className="admin-button-row">
                <button type="submit" className={generating ? "is-loading" : ""} disabled={generating}>
                  {generating ? "Generating article..." : "Generate article"}
                </button>
                <button type="button" className="secondary" onClick={publishDue}>
                  Publish due posts
                </button>
              </div>
            </form>
          </section>

          <section className="admin-panel admin-manual-panel">
            <div className="admin-section-heading">
              <h2>Add Blog Post</h2>
              <p>Paste the daily ChatGPT JSON, upload images, and save the article into the blog database.</p>
            </div>

            <div className="admin-prompt-box">
              <div className="admin-prompt-header">
                <span>Daily ChatGPT prompt</span>
                <button type="button" className="secondary" onClick={copyDailyPrompt}>
                  Copy prompt
                </button>
              </div>
              <textarea value={DAILY_BLOG_PROMPT} readOnly rows={10} />
            </div>

            <form className="admin-form-grid" onSubmit={saveManualPost}>
              <label>
                ChatGPT JSON or body blocks
                <textarea
                  value={manualForm.bodyJson}
                  onChange={(event) =>
                    setManualForm((current) => ({ ...current, bodyJson: event.target.value }))
                  }
                  placeholder='Paste the full JSON response here, or paste only the "body" array.'
                  rows={8}
                  spellCheck={false}
                  required
                />
                <span className="admin-field-hint">
                  {manualBodyBlockCount > 0
                    ? `${manualBodyBlockCount} article block(s) ready for the inner blog content.`
                    : "Paste the full JSON here, then click Import JSON."}
                </span>
              </label>
              <div className="admin-button-row">
                <button type="button" className="secondary" onClick={importManualJson}>
                  Import JSON
                </button>
              </div>
              <label>
                Title
                <input
                  value={manualForm.title}
                  onChange={(event) =>
                    setManualForm((current) => ({ ...current, title: event.target.value }))
                  }
                />
              </label>
              <label>
                Slug
                <input
                  value={manualForm.slug}
                  onChange={(event) =>
                    setManualForm((current) => ({ ...current, slug: event.target.value }))
                  }
                  placeholder="Auto-generated when empty"
                />
              </label>
              <label>
                Meta description
                <textarea
                  value={manualForm.description}
                  onChange={(event) =>
                    setManualForm((current) => ({ ...current, description: event.target.value }))
                  }
                  rows={3}
                  spellCheck={false}
                />
                <span className="admin-field-hint">
                  This is the short blog card and SEO summary. The full article is saved from the JSON body blocks above.
                </span>
              </label>
              <label>
                Category
                <input
                  value={manualForm.category}
                  onChange={(event) =>
                    setManualForm((current) => ({ ...current, category: event.target.value }))
                  }
                />
              </label>
              <label>
                Tags
                <input
                  value={manualForm.tags}
                  onChange={(event) =>
                    setManualForm((current) => ({ ...current, tags: event.target.value }))
                  }
                  placeholder="Shopify, Ecommerce, Conversion"
                />
              </label>
              <label>
                Read time
                <input
                  value={manualForm.readTime}
                  onChange={(event) =>
                    setManualForm((current) => ({ ...current, readTime: event.target.value }))
                  }
                  placeholder="Auto-estimated when empty"
                />
              </label>
              <label>
                Thumbnail path or URL
                <input
                  value={manualForm.thumbnail}
                  onChange={(event) =>
                    setManualForm((current) => ({ ...current, thumbnail: event.target.value }))
                  }
                  placeholder="/images/manual-blog/example.webp"
                />
              </label>
              <label>
                Upload thumbnail
                <input
                  type="file"
                  accept="image/avif,image/gif,image/jpeg,image/png,image/webp"
                  onChange={uploadThumbnail}
                  disabled={Boolean(uploadingImage)}
                />
              </label>
              <label>
                Append content image
                <input
                  type="file"
                  accept="image/avif,image/gif,image/jpeg,image/png,image/webp"
                  onChange={appendBodyImage}
                  disabled={Boolean(uploadingImage)}
                />
              </label>
              <label>
                Status
                <select
                  value={manualForm.status}
                  onChange={(event) =>
                    setManualForm((current) => ({ ...current, status: event.target.value }))
                  }
                >
                  <option value="draft">Draft</option>
                  <option value="scheduled">Schedule</option>
                  <option value="published">Publish now</option>
                </select>
              </label>
              {manualForm.status === "scheduled" && (
                <label>
                  Publish date
                  <input
                    type="datetime-local"
                    value={manualForm.scheduledAt}
                    onChange={(event) =>
                      setManualForm((current) => ({ ...current, scheduledAt: event.target.value }))
                    }
                    required
                  />
                </label>
              )}
              {manualMessage && (
                <p className={`admin-message ${manualMessageType === "error" ? "error" : ""}`}>
                  {manualMessage}
                </p>
              )}
              <div className="admin-button-row">
                <button
                  type="submit"
                  className={manualSaving ? "is-loading" : ""}
                  disabled={manualSaving || Boolean(uploadingImage)}
                >
                  {manualSaving ? "Saving post..." : "Save blog post"}
                </button>
                <button
                  type="button"
                  className="secondary"
                  onClick={() => setManualForm(createManualForm())}
                  disabled={manualSaving || Boolean(uploadingImage)}
                >
                  Clear
                </button>
              </div>
            </form>
          </section>
        </div>

        <section className="admin-panel admin-posts-panel">
          <div className="admin-section-heading admin-section-heading-row">
            <div>
              <h2>Scheduled Posts</h2>
              <p>Blog posts are stored in SQLite and become public when published or due.</p>
            </div>
            <span className="admin-section-count">{posts.length} posts</span>
          </div>
          {loadingPosts ? (
            <p className="admin-muted">Loading posts...</p>
          ) : posts.length === 0 ? (
            <p className="admin-muted">No generated posts yet.</p>
          ) : (
            <div className="admin-post-list">
              {visiblePosts.map((post) => (
                (() => {
                  const postActionType = getPostActionType(post);
                  const postIsBusy = Boolean(postActionType);
                  const actionDisabled = Boolean(activePostAction);

                  return (
                    <article className={`admin-post-item status-${post.status} ${postIsBusy ? "is-working" : ""}`} key={post.dbId}>
                      <Link href={`/dashboard/posts/${post.dbId}`} className="admin-post-thumbnail">
                        <FallbackImage src={post.thumbnail} alt="" />
                      </Link>
                      <div className="admin-post-body">
                        <div className="admin-post-meta">
                          <span className={`admin-status-pill status-${post.status}`}>{post.status}</span>
                          <span>{post.category}</span>
                          <span>{formatDate(post.scheduledAt || post.publishedAt || post.createdAt)}</span>
                        </div>
                        <h3>
                          <Link href={`/dashboard/posts/${post.dbId}`}>{post.title}</Link>
                        </h3>
                        <p className="admin-post-description">{post.description}</p>
                        {(post.thumbnailMissing || post.thumbnailWasDuplicate) && (
                          <p className="admin-media-note">
                            {post.thumbnailMissing
                              ? "Generated thumbnail file is missing. Regenerate media to create a new unique image."
                              : "This thumbnail was reused by another post. Regenerate media to create a new unique image."}
                          </p>
                        )}
                        <div className="admin-tag-row">
                          {(post.tags || []).map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                        {postIsBusy && (
                          <div className="admin-inline-progress" role="status" aria-live="polite">
                            <span aria-hidden="true" />
                            <p>{getPostActionMessage(postActionType)}</p>
                          </div>
                        )}
                        <div className="admin-button-row compact">
                          <Link href={`/dashboard/posts/${post.dbId}`}>Details</Link>
                          <Link href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer">
                            Blog preview
                          </Link>
                          {post.status !== "published" && (
                            <button
                              type="button"
                              className={`secondary ${postActionType === "article" ? "is-loading" : ""}`}
                              disabled={actionDisabled}
                              onClick={() => regenerateArticle(post)}
                            >
                              {postActionType === "article" ? "Regenerating article..." : "Regenerate article"}
                            </button>
                          )}
                          <button
                            type="button"
                            className={`secondary ${postActionType === "media" ? "is-loading" : ""}`}
                            disabled={actionDisabled}
                            onClick={() => regenerateMedia(post)}
                          >
                            {postActionType === "media" ? "Regenerating media..." : "Regenerate media"}
                          </button>
                          {post.status !== "published" && (
                            <button type="button" disabled={actionDisabled} onClick={() => updateStatus(post, "published")}>Publish</button>
                          )}
                          {post.status !== "draft" && (
                            <button type="button" className="secondary" disabled={actionDisabled} onClick={() => updateStatus(post, "draft")}>Draft</button>
                          )}
                          <button type="button" className="danger" disabled={actionDisabled} onClick={() => deletePost(post)}>Delete</button>
                        </div>
                      </div>
                    </article>
                  );
                })()
              ))}
              {hasMorePosts && (
                <div className="admin-load-more">
                  <button
                    type="button"
                    onClick={() =>
                      setVisiblePostCount((current) => current + ADMIN_POST_PAGE_SIZE)
                    }
                  >
                    Load more posts
                  </button>
                  <p>
                    Showing {visiblePosts.length} of {posts.length} posts
                  </p>
                </div>
              )}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
