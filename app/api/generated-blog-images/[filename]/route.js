import fs from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import {
  generatedImageFilePath,
  safeGeneratedImageFilename,
} from "../../../../lib/generatedBlogImageStorage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CONTENT_TYPES = {
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
};

export async function GET(_request, { params }) {
  const { filename } = await params;
  const safeFilename = safeGeneratedImageFilename(filename);

  if (!safeFilename) {
    return NextResponse.json({ message: "Invalid image filename." }, { status: 400 });
  }

  const filePath = generatedImageFilePath(safeFilename);

  try {
    const image = await fs.readFile(filePath);
    const contentType =
      CONTENT_TYPES[path.extname(safeFilename).toLowerCase()] || "application/octet-stream";

    return new Response(new Uint8Array(image), {
      headers: {
        "Cache-Control": "no-store, max-age=0",
        "Content-Length": String(image.length),
        "Content-Type": contentType,
      },
    });
  } catch (error) {
    if (error.code === "ENOENT") {
      return NextResponse.json({ message: "Generated image not found." }, { status: 404 });
    }

    console.error("Generated image read failed", error);

    return NextResponse.json({ message: "Generated image read failed." }, { status: 500 });
  }
}
