import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/content/projects";

export const dynamic = "force-dynamic";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolved =
    typeof (params as any).then === "function"
      ? await params
      : params;

  const slug = resolved?.slug;

  if (!slug) {
    return (
      <pre style={{ padding: 24 }}>
        ERROR: slug vacío
      </pre>
    );
  }

  const p = getProjectBySlug(slug);

  if (!p) {
    return (
      <pre style={{ padding: 24 }}>
        NO MATCH for slug: {slug}
      </pre>
    );
  }

  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: "32px 16px" }}>
      <h1 style={{ fontSize: 34, fontWeight: 900 }}>
        {p.title.es}
      </h1>
      <p style={{ marginTop: 12 }}>
        {p.summary?.es ?? ""}
      </p>
    </main>
  );
}