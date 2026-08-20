import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";
import DashboardPostEditClient from "../../../../../components/DashboardPostEditClient";
import { ADMIN_COOKIE, readSessionCookieValue } from "../../../../../lib/auth";
import { getGeneratedPostById } from "../../../../../lib/blogDb";

export const metadata = {
  title: "Edit Post | Oru Studio Dashboard",
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamic = "force-dynamic";

export default async function DashboardPostEditPage({ params }) {
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

  return <DashboardPostEditClient post={post} />;
}
