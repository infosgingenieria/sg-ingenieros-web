import { NextResponse } from "next/server";
import { projects, normalizeSlug } from "@/content/projects";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json({
    count: projects.length,
    slugs: projects.map((p) => ({
      slug: p.slug,
      normalized: normalizeSlug(p.slug),
    })),
  });
}