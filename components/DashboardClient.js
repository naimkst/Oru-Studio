"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import FallbackImage from "./FallbackImage";

function toDatetimeLocal(date) {
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 16);
}

function toIsoOrNull(value) {
  return value ? new Date(value).toISOString() : null;
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
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    topic: "",
    category: "Shopify Development",
    status: "scheduled",
    scheduledAt: toDatetimeLocal(new Date(Date.now() + 24 * 60 * 60 * 1000)),
  });

  const counts = useMemo(
    () => ({
      total: posts.length,
      published: posts.filter((post) => post.status === "published").length,
      scheduled: posts.filter((post) => post.status === "scheduled").length,
      draft: posts.filter((post) => post.status === "draft").length,
    }),
    [posts]
  );

  async function loadDashboard() {
    setLoadingPosts(true);
    const [sessionResponse, postsResponse] = await Promise.all([
      fetch("/api/admin/session"),
      fetch("/api/admin/posts"),
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

  async function updateStatus(post, status) {
    const response = await fetch(`/api/admin/posts/${post.dbId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    if (response.ok) {
      await loadDashboard();
      router.refresh();
    }
  }

  async function regenerateMedia(post) {
    setMessage(`Regenerating media for: ${post.title}`);

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

    setMessage(`Regenerated media for: ${post.title}`);
    await loadDashboard();
    router.refresh();
  }

  async function deletePost(post) {
    if (!window.confirm(`Delete "${post.title}"?`)) {
      return;
    }

    const response = await fetch(`/api/admin/posts/${post.dbId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      await loadDashboard();
      router.refresh();
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
          <span>Generated posts</span>
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
              <button type="submit" disabled={generating}>
                {generating ? "Generating article and images..." : "Generate article"}
              </button>
              <button type="button" className="secondary" onClick={publishDue}>
                Publish due posts
              </button>
            </div>
          </form>
        </section>

        <section className="admin-panel admin-posts-panel">
          <div className="admin-section-heading admin-section-heading-row">
            <div>
              <h2>Scheduled Posts</h2>
              <p>Generated posts are stored in SQLite and become public when published or due.</p>
            </div>
            <span className="admin-section-count">{posts.length} posts</span>
          </div>
          {loadingPosts ? (
            <p className="admin-muted">Loading posts...</p>
          ) : posts.length === 0 ? (
            <p className="admin-muted">No generated posts yet.</p>
          ) : (
            <div className="admin-post-list">
              {posts.map((post) => (
                <article className={`admin-post-item status-${post.status}`} key={post.dbId}>
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
                    <div className="admin-tag-row">
                      {(post.tags || []).map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <div className="admin-button-row compact">
                      <Link href={`/dashboard/posts/${post.dbId}`}>Details</Link>
                      <Link href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer">
                        Blog preview
                      </Link>
                      <button type="button" className="secondary" onClick={() => regenerateMedia(post)}>
                        Regenerate media
                      </button>
                      {post.status !== "published" && (
                        <button type="button" onClick={() => updateStatus(post, "published")}>Publish</button>
                      )}
                      {post.status !== "draft" && (
                        <button type="button" className="secondary" onClick={() => updateStatus(post, "draft")}>Draft</button>
                      )}
                      <button type="button" className="danger" onClick={() => deletePost(post)}>Delete</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
