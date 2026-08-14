import { permanentRedirect } from "next/navigation";

export default async function ServiceSingleRedirectPage({ params }) {
  const { slug } = await params;
  permanentRedirect(`/services/${slug}`);
}
