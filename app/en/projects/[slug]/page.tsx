import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, normalizeSlug, getProjectBySlug } from "@/content/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: normalizeSlug(p.slug) }));
}

export default function ProjectEnPage({ params }: { params: { slug: string } }) {
  const p = getProjectBySlug(params.slug);
  if (!p) return notFound();

  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: "32px 16px" }}>
      <nav style={{ marginBottom: 18 }}>
        <Link href="/en/projects" style={{ textDecoration: "underline" }}>
          ← Back to Projects
        </Link>
      </nav>

      <h1 style={{ fontSize: 34, fontWeight: 900, lineHeight: 1.15 }}>
        {p.title.en}
      </h1>

      <p style={{ marginTop: 10, opacity: 0.8, lineHeight: 1.6 }}>
        {p.summary?.en ?? p.description?.en ?? ""}
      </p>

      {p.coverImage ? (
        <img
          src={p.coverImage}
          alt={p.title.en}
          style={{
            marginTop: 18,
            width: "100%",
            height: "auto",
            borderRadius: 18,
            border: "1px solid rgba(0,0,0,0.08)",
          }}
        />
      ) : null}
    </main>
  );
}