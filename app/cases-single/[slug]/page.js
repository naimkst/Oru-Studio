import { redirect } from "next/navigation";

export default async function CasesSingleRedirectPage({ params }) {
  const { slug } = await params;
  redirect(`/portfolio/${slug}`);
}
