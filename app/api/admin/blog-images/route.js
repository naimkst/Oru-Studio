import crypto from "crypto";
import fs from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { requireAdminFromRequest } from "../../../../lib/auth";
import { slugify } from "../../../../lib/blogDb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const IMAGE_DIR = path.join(process.cwd(), "public", "images", "manual-blog");
const PUBLIC_PREFIX = "/images/manual-blog";
const MAX_IMAGE_BYTES = 8 * 1024 * 1024;
const IMAGE_TYPES = new Map([
  ["image/avif", ".avif"],
  ["image/gif", ".gif"],
  ["image/jpeg", ".jpg"],
  ["image/png", ".png"],
  ["image/webp", ".webp"],
]);
const EXTENSION_TYPES = new Map(
  Array.from(IMAGE_TYPES.entries()).map(([contentType, extension]) => [extension, contentType])
);

function unauthorized() {
  return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
}

function getUploadContentType(file) {
  const extension = path.extname(file.name || "").toLowerCase();

  return file.type || EXTENSION_TYPES.get(extension) || "";
}

export async function POST(request) {
  if (!requireAdminFromRequest(request)) {
    return unauthorized();
  }

  const formData = await request.formData().catch(() => null);
  const image = formData?.get("image");

  if (!image || typeof image.arrayBuffer !== "function") {
    return NextResponse.json({ message: "Image file is required." }, { status: 400 });
  }

  if (image.size > MAX_IMAGE_BYTES) {
    return NextResponse.json({ message: "Image must be 8 MB or smaller." }, { status: 400 });
  }

  const contentType = getUploadContentType(image);
  const extension = IMAGE_TYPES.get(contentType);

  if (!extension) {
    return NextResponse.json(
      { message: "Upload an AVIF, GIF, JPG, PNG, or WebP image." },
      { status: 400 }
    );
  }

  const buffer = Buffer.from(await image.arrayBuffer());

  if (buffer.length > MAX_IMAGE_BYTES) {
    return NextResponse.json({ message: "Image must be 8 MB or smaller." }, { status: 400 });
  }

  const originalName = path.parse(image.name || "blog-image").name;
  const baseName = slugify(originalName) || "blog-image";
  const filename = `${baseName.slice(0, 60)}-${Date.now()}-${crypto
    .randomBytes(4)
    .toString("hex")}${extension}`;

  await fs.mkdir(IMAGE_DIR, { recursive: true });
  await fs.writeFile(path.join(IMAGE_DIR, filename), buffer, { flag: "wx" });

  return NextResponse.json(
    {
      src: `${PUBLIC_PREFIX}/${filename}`,
      contentType,
      size: buffer.length,
    },
    { status: 201 }
  );
}
