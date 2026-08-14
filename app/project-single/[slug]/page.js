import { permanentRedirect } from "next/navigation";

export default async function ProjectSingleRedirectPage({ params }) {
  const { slug } = await params;
  permanentRedirect(`/portfolio/${slug}`);
}
