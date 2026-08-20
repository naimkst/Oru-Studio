"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import FallbackImage from "./FallbackImage";

function toDatetimeLocal(value) {
  if (!value) {
    return "";
  }

  const date = new Date(value);
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);

  return local.toISOString().slice(0, 16);
}

function toIsoOrNull(value) {
  return value ? new Date(value).toISOString() : null;
}

function filenameToAltText(filename) {
  return String(filename || "Blog image")
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeTags(value) {
  return String(value || "")
    .split(/[,#\n]/)
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function readBodyJson(value) {
  const body = JSON.parse(value || "[]");

  if (!Array.isArray(body)) {
    throw new Error("Article body must be a JSON array.");
  }

  return body;
}

function applyUploadedImagesToBody(body, uploadedImages, replaceExisting) {
  const updatedBody = [...body];
  let replacedCount = 0;
  let appendedCount = 0;
  let searchStart = 0;

  uploadedImages.forEach(({ file, src }) => {
    const imageIndex = updatedBody.findIndex((block, index) => {
      if (index < searchStart || block.type !== "image") {
        return false;
      }

      return replaceExisting || !String(block.src || "").trim();
    });

    if (imageIndex >= 0) {
      updatedBody[imageIndex] = {
        ...updatedBody[imageIndex],
        src,
        alt: updatedBody[imageIndex].alt || filenameToAltText(file.name),
      };
      replacedCount += 1;
      searchStart = imageIndex + 1;
      return;
    }

    updatedBody.push({
      type: "image",
      src,
      alt: filenameToAltText(file.name),
      caption: "",
    });
    appendedCount += 1;
  });

  return { body: updatedBody, replacedCount, appendedCount };
}

function blockToPreviewText(block) {
  if (!block) {
    return "";
  }

  if (block.type === "heading") {
    return block.text || "";
  }

  if (block.type === "list") {
    const items = (block.items || []).map((item) => `- ${item}`).join("\n");
    return [block.text, items].filter(Boolean).join("\n");
  }

  if (block.type === "image") {
    const label = block.caption || block.alt || block.src || "Content image";
    return `[Image] ${label}`;
  }

  if (block.type === "callout") {
    return `Note: ${block.text || ""}`;
  }

  return block.text || "";
}

function blockPreviewLabel(block) {
  if (!block) {
    return "Empty block";
  }

  if (block.type === "heading") {
    return block.text || "Heading";
  }

  if (block.type === "image") {
    return block.caption || block.alt || block.src || "Image";
  }

  return block.text || block.type || "Article block";
}

async function readErrorMessage(response, fallback) {
  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    const data = await response.json().catch(() => ({}));
    return data.message || fallback;
  }

  return `${fallback} HTTP ${response.status}.`;
}

function createInitialForm(post) {
  return {
    title: post.title || "",
    slug: post.slug || "",
    description: post.description || "",
    category: post.category || "",
    tags: (post.tags || []).join(", "),
    thumbnail: post.thumbnail || "",
    readTime: post.readTime || "",
    status: post.status || "draft",
    scheduledAt: toDatetimeLocal(post.scheduledAt),
    bodyJson: JSON.stringify(post.body || [], null, 2),
    replaceExistingImages: true,
  };
}

export default function DashboardPostEditClient({ post }) {
  const router = useRouter();
  const [form, setForm] = useState(() => createInitialForm(post));
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("info");

  const bodyBlocks = useMemo(() => {
    try {
      return readBodyJson(form.bodyJson);
    } catch {
      return [];
    }
  }, [form.bodyJson]);
  const articlePreview = useMemo(() => {
    try {
      return readBodyJson(form.bodyJson).map(blockToPreviewText).filter(Boolean).join("\n\n");
    } catch {
      return "";
    }
  }, [form.bodyJson]);
  const imageBlocks = useMemo(
    () =>
      bodyBlocks
        .map((block, index) => ({ ...block, blockIndex: index }))
        .filter((block) => block.type === "image"),
    [bodyBlocks]
  );

  function updateField(name, value) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  function updateBody(nextBody) {
    updateField("bodyJson", JSON.stringify(nextBody, null, 2));
  }

  function updateImageBlock(blockIndex, updates) {
    const body = readBodyJson(form.bodyJson);
    const currentBlock = body[blockIndex] || { type: "image" };

    body[blockIndex] = {
      ...currentBlock,
      type: "image",
      ...updates,
    };

    updateBody(body);
  }

  function addImageBlock() {
    const body = readBodyJson(form.bodyJson);

    updateBody([
      ...body,
      {
        type: "image",
        src: "",
        alt: "",
        caption: "",
      },
    ]);
  }

  function removeImageBlock(blockIndex) {
    if (!window.confirm("Remove this image block from the article?")) {
      return;
    }

    const body = readBodyJson(form.bodyJson);
    body.splice(blockIndex, 1);
    updateBody(body);
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
    setMessage("");

    try {
      const data = await uploadBlogImage(file);
      updateField("thumbnail", data.src);
      setMessage(`Uploaded thumbnail: ${data.src}`);
      setMessageType("info");
    } catch (error) {
      setMessage(error.message || "Thumbnail upload failed.");
      setMessageType("error");
    } finally {
      setUploadingImage("");
      event.target.value = "";
    }
  }

  async function uploadContentImages(event) {
    const files = Array.from(event.target.files || []);

    if (!files.length) {
      return;
    }

    setUploadingImage("body");
    setMessage("");

    try {
      const uploadedImages = await Promise.all(
        files.map(async (file) => {
          const data = await uploadBlogImage(file);

          return { file, src: data.src };
        })
      );
      const body = readBodyJson(form.bodyJson);
      const result = applyUploadedImagesToBody(body, uploadedImages, form.replaceExistingImages);

      updateField("bodyJson", JSON.stringify(result.body, null, 2));
      setMessage(
        `Uploaded ${uploadedImages.length} content image(s). Replaced ${result.replacedCount} image block(s), appended ${result.appendedCount}.`
      );
      setMessageType("info");
    } catch (error) {
      setMessage(error.message || "Content image upload failed.");
      setMessageType("error");
    } finally {
      setUploadingImage("");
      event.target.value = "";
    }
  }

  async function uploadImageBlock(event, blockIndex) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setUploadingImage(`image-${blockIndex}`);
    setMessage("");

    try {
      const data = await uploadBlogImage(file);
      const body = readBodyJson(form.bodyJson);
      const currentBlock = body[blockIndex] || { type: "image" };

      body[blockIndex] = {
        ...currentBlock,
        type: "image",
        src: data.src,
        alt: currentBlock.alt || filenameToAltText(file.name),
      };

      updateBody(body);
      setMessage(`Updated image block: ${data.src}`);
      setMessageType("info");
    } catch (error) {
      setMessage(error.message || "Image block upload failed.");
      setMessageType("error");
    } finally {
      setUploadingImage("");
      event.target.value = "";
    }
  }

  async function savePost(event) {
    event?.preventDefault();
    setSaving(true);
    setMessage("");

    let body;

    try {
      body = readBodyJson(form.bodyJson);
    } catch (error) {
      setSaving(false);
      setMessage(error.message || "Article body JSON is invalid.");
      setMessageType("error");
      return;
    }

    try {
      const response = await fetch(`/api/admin/posts/${post.dbId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: form.title,
          slug: form.slug,
          description: form.description,
          category: form.category,
          tags: normalizeTags(form.tags),
          thumbnail: form.thumbnail,
          readTime: form.readTime,
          status: form.status,
          scheduledAt: form.status === "scheduled" ? toIsoOrNull(form.scheduledAt) : null,
          body,
        }),
      });

      if (!response.ok) {
        setMessage(await readErrorMessage(response, "Post update failed."));
        setMessageType("error");
        return;
      }

      const data = await response.json().catch(() => ({}));
      setMessage(`Saved: ${data.post?.title || form.title}`);
      setMessageType("info");
      router.refresh();
    } catch (error) {
      setMessage(error.message || "Post update request failed before reaching the server.");
      setMessageType("error");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="admin-page">
      <header className="admin-topbar">
        <div>
          <span>Edit Post</span>
          <h1>{post.title}</h1>
        </div>
        <div className="admin-topbar-actions">
          <Link href="/dashboard">Back to dashboard</Link>
          <Link href={`/dashboard/posts/${post.dbId}`}>Details</Link>
          <Link href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer">
            Blog preview
          </Link>
        </div>
      </header>

      <main className="admin-edit-layout">
        <section className="admin-edit-main">
          <section className="admin-panel">
          <div className="admin-section-heading">
            <h2>Post Details</h2>
            <p>Update title, summary, taxonomy, publishing status, and thumbnail.</p>
          </div>
          <form className="admin-form-grid" onSubmit={savePost}>
            <label>
              Title
              <input value={form.title} onChange={(event) => updateField("title", event.target.value)} required />
            </label>
            <label>
              Slug
              <input value={form.slug} onChange={(event) => updateField("slug", event.target.value)} required />
            </label>
            <label>
              Meta description
              <textarea
                value={form.description}
                onChange={(event) => updateField("description", event.target.value)}
                rows={3}
                required
              />
            </label>
            <label>
              Category
              <input value={form.category} onChange={(event) => updateField("category", event.target.value)} required />
            </label>
            <label>
              Tags
              <input value={form.tags} onChange={(event) => updateField("tags", event.target.value)} />
            </label>
            <label>
              Read time
              <input value={form.readTime} onChange={(event) => updateField("readTime", event.target.value)} />
            </label>
            <label>
              Thumbnail path or URL
              <input value={form.thumbnail} onChange={(event) => updateField("thumbnail", event.target.value)} />
            </label>
            {form.thumbnail && (
              <div className="admin-edit-thumbnail-preview">
                <FallbackImage src={form.thumbnail} alt={form.title} />
              </div>
            )}
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
              Status
              <select value={form.status} onChange={(event) => updateField("status", event.target.value)}>
                <option value="draft">Draft</option>
                <option value="scheduled">Schedule</option>
                <option value="published">Publish now</option>
              </select>
            </label>
            {form.status === "scheduled" && (
              <label>
                Publish date
                <input
                  type="datetime-local"
                  value={form.scheduledAt}
                  onChange={(event) => updateField("scheduledAt", event.target.value)}
                  required
                />
              </label>
            )}
            {message && (
              <p className={`admin-message ${messageType === "error" ? "error" : ""}`}>{message}</p>
            )}
            <div className="admin-button-row">
              <button type="submit" className={saving ? "is-loading" : ""} disabled={saving || Boolean(uploadingImage)}>
                {saving ? "Saving..." : "Save changes"}
              </button>
              <Link href="/dashboard">Cancel</Link>
            </div>
          </form>
        </section>

          <section className="admin-panel">
            <div className="admin-section-heading admin-section-heading-row">
              <div>
                <h2>Article Images</h2>
                <p>Preview, replace, edit, add, or remove images used inside the article body.</p>
              </div>
              <button type="button" className="admin-inline-action" onClick={addImageBlock}>
                Add image
              </button>
            </div>

            <div className="admin-bulk-upload">
              <label className="admin-checkbox-field">
                <input
                  type="checkbox"
                  checked={form.replaceExistingImages}
                  onChange={(event) => updateField("replaceExistingImages", event.target.checked)}
                />
                Replace existing image blocks during bulk upload
              </label>
              <label>
                Bulk upload content images
                <input
                  type="file"
                  accept="image/avif,image/gif,image/jpeg,image/png,image/webp"
                  multiple
                  onChange={uploadContentImages}
                  disabled={Boolean(uploadingImage)}
                />
                <span className="admin-field-hint">
                  Select multiple files. They are applied to article image blocks in order.
                </span>
              </label>
            </div>
            {message && (
              <p className={`admin-message ${messageType === "error" ? "error" : ""}`}>{message}</p>
            )}

            {imageBlocks.length === 0 ? (
              <p className="admin-muted">No image blocks in this article yet.</p>
            ) : (
              <div className="admin-image-editor-list">
                {imageBlocks.map((imageBlock, imageIndex) => (
                  <article className="admin-image-editor-item" key={`${imageBlock.blockIndex}-${imageIndex}`}>
                    <div className="admin-image-editor-preview">
                      {imageBlock.src ? (
                        <FallbackImage src={imageBlock.src} alt={imageBlock.alt || ""} />
                      ) : (
                        <span>No image selected</span>
                      )}
                    </div>
                    <div className="admin-image-editor-fields">
                      <div className="admin-image-editor-heading">
                        <strong>Image {imageIndex + 1}</strong>
                        <button type="button" className="danger subtle" onClick={() => removeImageBlock(imageBlock.blockIndex)}>
                          Remove
                        </button>
                      </div>
                      <label>
                        Image path or URL
                        <input
                          value={imageBlock.src || ""}
                          onChange={(event) => updateImageBlock(imageBlock.blockIndex, { src: event.target.value })}
                        />
                      </label>
                      <label>
                        Alt text
                        <input
                          value={imageBlock.alt || ""}
                          onChange={(event) => updateImageBlock(imageBlock.blockIndex, { alt: event.target.value })}
                        />
                      </label>
                      <label>
                        Caption
                        <input
                          value={imageBlock.caption || ""}
                          onChange={(event) => updateImageBlock(imageBlock.blockIndex, { caption: event.target.value })}
                        />
                      </label>
                      <label>
                        Replace image
                        <input
                          type="file"
                          accept="image/avif,image/gif,image/jpeg,image/png,image/webp"
                          onChange={(event) => uploadImageBlock(event, imageBlock.blockIndex)}
                          disabled={Boolean(uploadingImage)}
                        />
                      </label>
                    </div>
                  </article>
                ))}
              </div>
            )}
            <div className="admin-button-row admin-section-actions">
              <button type="button" className={saving ? "is-loading" : ""} disabled={saving || Boolean(uploadingImage)} onClick={savePost}>
                {saving ? "Saving..." : "Save image changes"}
              </button>
            </div>
          </section>

          <section className="admin-panel">
            <div className="admin-section-heading">
              <h2>Advanced Body JSON</h2>
              <p>Edit raw article blocks when you need to change paragraphs, headings, lists, or callouts directly.</p>
            </div>
            <form className="admin-form-grid" onSubmit={savePost}>
              <label>
                Article body JSON
                <textarea
                  className="admin-code-textarea"
                  value={form.bodyJson}
                  onChange={(event) => updateField("bodyJson", event.target.value)}
                  rows={18}
                  spellCheck={false}
                  required
                />
              </label>
              <div className="admin-button-row">
                <button type="submit" className={saving ? "is-loading" : ""} disabled={saving || Boolean(uploadingImage)}>
                  {saving ? "Saving..." : "Save body JSON"}
                </button>
              </div>
            </form>
          </section>
        </section>

        <aside className="admin-panel admin-edit-preview-panel">
          <div className="admin-section-heading">
            <h2>Article Preview</h2>
            <p>Quick text preview of the JSON body.</p>
          </div>
          <div className="admin-article-preview-box">
            {bodyBlocks.slice(0, 14).map((block, index) => (
              <div className={`admin-preview-block type-${block.type || "paragraph"}`} key={`${block.type}-${index}`}>
                {block.type === "image" && block.src ? (
                  <FallbackImage src={block.src} alt={block.alt || ""} />
                ) : (
                  <p>{blockPreviewLabel(block)}</p>
                )}
              </div>
            ))}
            {bodyBlocks.length > 14 && (
              <p className="admin-field-hint">Showing first 14 of {bodyBlocks.length} blocks.</p>
            )}
            {!articlePreview && <p className="admin-muted">No preview available. Check the body JSON.</p>}
          </div>
        </aside>
      </main>
    </div>
  );
}
