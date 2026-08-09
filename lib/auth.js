import crypto from "crypto";

export const ADMIN_COOKIE = "oru_admin_session";

const encoder = new TextEncoder();

function getSessionSecret() {
  return (
    process.env.BLOG_SESSION_SECRET ||
    process.env.NEXTAUTH_SECRET ||
    "oru-studio-local-dashboard-secret"
  );
}

export function getAdminCredentials() {
  return {
    username: process.env.BLOG_ADMIN_USERNAME || "admin",
    password: process.env.BLOG_ADMIN_PASSWORD || "admin12345",
  };
}

function sign(value) {
  return crypto
    .createHmac("sha256", getSessionSecret())
    .update(value)
    .digest("base64url");
}

function safeEqual(left, right) {
  const leftBytes = encoder.encode(left);
  const rightBytes = encoder.encode(right);

  if (leftBytes.length !== rightBytes.length) {
    return false;
  }

  return crypto.timingSafeEqual(leftBytes, rightBytes);
}

export function verifyAdminCredentials(username, password) {
  const credentials = getAdminCredentials();

  return (
    safeEqual(String(username || ""), credentials.username) &&
    safeEqual(String(password || ""), credentials.password)
  );
}

export function createSessionCookieValue(username) {
  const expires = Date.now() + 1000 * 60 * 60 * 12;
  const payload = `${username}.${expires}`;

  return `${payload}.${sign(payload)}`;
}

export function readSessionCookieValue(value) {
  if (!value) {
    return null;
  }

  const [username, expires, signature] = String(value).split(".");
  const payload = `${username}.${expires}`;

  if (!username || !expires || !signature) {
    return null;
  }

  if (Number(expires) < Date.now()) {
    return null;
  }

  if (!safeEqual(signature, sign(payload))) {
    return null;
  }

  return { username, expires: Number(expires) };
}

export function requireAdminFromRequest(request) {
  const session = readSessionCookieValue(request.cookies.get(ADMIN_COOKIE)?.value);

  if (!session) {
    return null;
  }

  return session;
}

export function isProductionPasswordConfigured() {
  return Boolean(process.env.BLOG_ADMIN_PASSWORD);
}
