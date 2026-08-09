import fs from "fs";
import path from "path";

export const GENERATED_IMAGE_PUBLIC_PREFIX = "/images/generated-blog";
export const GENERATED_IMAGE_API_PREFIX = "/api/generated-blog-images";

export function getGeneratedImageDir() {
  return (
    process.env.BLOG_GENERATED_IMAGE_DIR ||
    path.join(process.cwd(), "public", "images", "generated-blog")
  );
}

export function safeGeneratedImageFilename(value) {
  const filename = path.basename(String(value || ""));

  if (!filename || filename !== String(value || "") || filename.includes("..")) {
    return null;
  }

  if (!/\.(avif|gif|jpe?g|png|webp)$/i.test(filename)) {
    return null;
  }

  return filename;
}

export function getGeneratedImageFilename(src) {
  if (!src) {
    return null;
  }

  let cleanPath = String(src).split("?")[0].split("#")[0];

  try {
    if (/^https?:\/\//i.test(cleanPath)) {
      cleanPath = new URL(cleanPath).pathname;
    }
  } catch {
    return null;
  }

  const prefixes = [
    `${GENERATED_IMAGE_PUBLIC_PREFIX}/`,
    `${GENERATED_IMAGE_API_PREFIX}/`,
  ];
  const prefix = prefixes.find((item) => cleanPath.startsWith(item));

  if (!prefix) {
    return null;
  }

  try {
    return safeGeneratedImageFilename(decodeURIComponent(cleanPath.slice(prefix.length)));
  } catch {
    return null;
  }
}

export function generatedImageFilePath(filename) {
  const safeFilename = safeGeneratedImageFilename(filename);

  if (!safeFilename) {
    return null;
  }

  return path.join(getGeneratedImageDir(), safeFilename);
}

export function generatedImageExists(srcOrFilename) {
  const filename =
    safeGeneratedImageFilename(srcOrFilename) || getGeneratedImageFilename(srcOrFilename);
  const filePath = generatedImageFilePath(filename);

  return Boolean(filePath && fs.existsSync(filePath));
}

export function ensureGeneratedImageDir() {
  fs.mkdirSync(getGeneratedImageDir(), { recursive: true });
}

export function generatedImageApiSrc(filename, version = "") {
  const safeFilename = safeGeneratedImageFilename(filename);

  if (!safeFilename) {
    return "";
  }

  const query = version ? `?v=${encodeURIComponent(version)}` : "";

  return `${GENERATED_IMAGE_API_PREFIX}/${encodeURIComponent(safeFilename)}${query}`;
}
