import { redirect } from "next/navigation";

export default async function ServiceSingleRedirectPage({ params }) {
  const { slug } = await params;
  redirect(`/services/${slug}`);
}
