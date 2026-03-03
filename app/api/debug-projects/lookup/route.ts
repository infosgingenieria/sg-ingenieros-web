import { NextResponse } from "next/server";
import { projects, normalizeSlug, getProjectBySlug } from "@/content/projects";

export const dynamic = "force-dynamic";

export function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug") || "";

  const found = getProjectBySlug(slug);

  return NextResponse.json({
    input: slug,
    decoded: decodeURIComponent(slug || ""),
    normalizedInput: normalizeSlug(decodeURIComponent(slug || "")),
    count: projects.length,
    all: projects.map((p) => ({
      slug: p.slug,
      normalized: normalizeSlug(p.slug),
    })),
    found: found
      ? { slug: found.slug, titleEs: found.title?.es, titleEn: found.title?.en }
      : null,
  });
}