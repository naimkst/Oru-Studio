import { redirect } from "next/navigation";

export default async function ProjectSingleRedirectPage({ params }) {
  const { slug } = await params;
  redirect(`/portfolio/${slug}`);
}
