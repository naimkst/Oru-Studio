import { permanentRedirect } from "next/navigation";

export default async function CasesSingleRedirectPage({ params }) {
  const { slug } = await params;
  permanentRedirect(`/portfolio/${slug}`);
}
