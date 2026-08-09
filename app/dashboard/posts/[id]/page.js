import Link from "next/link";
import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";
import ArticleBlocks from "../../../../components/ArticleBlocks";
import FallbackImage from "../../../../components/FallbackImage";
import { ADMIN_COOKIE, readSessionCookieValue } from "../../../../lib/auth";
import { getGeneratedPostById } from "../../../../lib/blogDb";

export const metadata = {
  title: "Post Details | Oru Studio Dashboard",
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamic = "force-dynamic";

function formatDate(value) {
  if (!value) {
    return "Not set";
  }

  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export default async function DashboardPostDetailsPage({ params }) {
  const cookieStore = await cookies();
  const session = readSessionCookieValue(cookieStore.get(ADMIN_COOKIE)?.value);

  if (!session) {
    redirect("/login");
  }

  const { id } = await params;
  const post = getGeneratedPostById(Number(id));

  if (!post) {
    notFound();
  }

  const articleBlocks = post.body ?? post.content.map((paragraph) => ({
    type: "paragraph",
    text: paragraph,
  }));

  return (
    <div className="admin-page">
      <header className="admin-topbar">
        <div>
          <span>Post Details</span>
          <h1>{post.title}</h1>
        </div>
        <div className="admin-topbar-actions">
          <Link href="/dashboard">Back to dashboard</Link>
          <Link href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer">
            Blog preview
          </Link>
        </div>
      </header>

      <main className="admin-detail-layout">
        <article className="admin-detail-main">
          <section className="admin-detail-hero">
            <div>
              <div className="admin-post-meta">
                <span>{post.status}</span>
                <span>{post.category}</span>
                <span>{post.readTime}</span>
                <span>{formatDate(post.scheduledAt || post.publishedAt || post.createdAt)}</span>
              </div>
              <p>{post.description}</p>
            </div>
            <div className="admin-detail-media">
              <FallbackImage src={post.thumbnail} alt={post.title} />
            </div>
            {post.thumbnailMissing && (
              <p className="admin-image-missing">
                Missing generated thumbnail file: {post.originalThumbnail}
              </p>
            )}
          </section>

          <section className="article-content admin-preview-content">
            <ArticleBlocks blocks={articleBlocks} showMissingImageNotice />
          </section>
        </article>

        <aside className="admin-detail-sidebar">
          <div className="admin-panel">
            <div className="admin-section-heading">
              <h2>Publishing Info</h2>
            </div>
            <dl className="admin-detail-list">
              <div>
                <dt>Slug</dt>
                <dd>{post.slug}</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>{post.status}</dd>
              </div>
              <div>
                <dt>Scheduled</dt>
                <dd>{formatDate(post.scheduledAt)}</dd>
              </div>
              <div>
                <dt>Published</dt>
                <dd>{formatDate(post.publishedAt)}</dd>
              </div>
              <div>
                <dt>Model</dt>
                <dd>{post.model || "Not recorded"}</dd>
              </div>
            </dl>
          </div>

          {post.tags?.length > 0 && (
            <div className="admin-panel">
              <div className="admin-section-heading">
                <h2>Tags</h2>
              </div>
              <div className="admin-tag-row">
                {post.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          )}
        </aside>
      </main>
    </div>
  );
}
