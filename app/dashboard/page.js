import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import DashboardClient from "../../components/DashboardClient";
import { ADMIN_COOKIE, readSessionCookieValue } from "../../lib/auth";

export const metadata = {
  title: "Dashboard | Oru Studio",
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const session = readSessionCookieValue(cookieStore.get(ADMIN_COOKIE)?.value);

  if (!session) {
    redirect("/login");
  }

  return <DashboardClient />;
}
