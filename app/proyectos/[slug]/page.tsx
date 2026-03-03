import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/content/projects";

export const dynamic = "force-dynamic";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  // Compatibilidad total con Next 16
  const resolvedParams =
    typeof (params as any).then === "function" ? await params : params;

  const slug = resolvedParams?.slug;

  if (!slug) return notFound();

  const p = getProjectBySlug(slug);

  if (!p) return notFound();

  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: "32px 16px" }}>
      <nav style={{ marginBottom: 18 }}>
        <Link href="/proyectos" style={{ textDecoration: "underline" }}>
          ← Volver a Proyectos
        </Link>
      </nav>

      <h1 style={{ fontSize: 34, fontWeight: 900, lineHeight: 1.15 }}>
        {p.title?.es}
      </h1>

      <p style={{ marginTop: 10, opacity: 0.8, lineHeight: 1.6 }}>
        {p.summary?.es ?? p.description?.es ?? ""}
      </p>

      {p.coverImage ? (
        <img
          src={p.coverImage}
          alt={p.title?.es ?? ""}
          style={{
            marginTop: 18,
            width: "100%",
            height: "auto",
            borderRadius: 18,
            border: "1px solid rgba(0,0,0,0.08)",
          }}
        />
      ) : null}

      {p.tags?.length ? (
        <div
          style={{
            marginTop: 14,
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          {p.tags.map((tag) => (
            <span
              key={tag}
              style={{
                border: "1px solid rgba(0,0,0,0.15)",
                borderRadius: 999,
                padding: "4px 10px",
                fontSize: 12,
                fontWeight: 700,
                opacity: 0.8,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </main>
  );
}