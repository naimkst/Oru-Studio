import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LoginForm from "../../components/LoginForm";
import { ADMIN_COOKIE, readSessionCookieValue } from "../../lib/auth";

export const metadata = {
  title: "Login | Oru Studio",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function LoginPage() {
  const cookieStore = await cookies();
  const session = readSessionCookieValue(cookieStore.get(ADMIN_COOKIE)?.value);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <main className="admin-login-page">
      <section className="admin-login-panel">
        <span>Oru Studio</span>
        <h1>Blog Dashboard Login</h1>
        <p>Sign in to generate, schedule, and manage blog articles.</p>
        <LoginForm />
      </section>
    </main>
  );
}
