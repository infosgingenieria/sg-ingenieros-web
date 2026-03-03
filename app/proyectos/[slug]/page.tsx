// app/proyectos/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects, normalizeSlug } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: normalizeSlug(p.slug) }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = getProjectBySlug(params.slug);
  if (!p) return notFound();

  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: "32px 16px" }}>
      <nav style={{ marginBottom: 18, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Link href="/proyectos" style={{ textDecoration: "underline" }}>
          ← Volver a Proyectos
        </Link>
      </nav>

      <header>
        <h1 style={{ fontSize: 34, fontWeight: 900, lineHeight: 1.15 }}>{p.title.es}</h1>

        {p.description?.es ? (
          <p style={{ marginTop: 10, fontSize: 16, opacity: 0.8, lineHeight: 1.6 }}>
            {p.description.es}
          </p>
        ) : null}

        <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap", fontSize: 13, opacity: 0.75 }}>
          {p.year ? <span><strong>Año:</strong> {p.year}</span> : null}
          {p.location ? <span><strong>Ubicación:</strong> {p.location}</span> : null}
        </div>
      </header>

      {p.coverImage ? (
        <div style={{ marginTop: 18 }}>
          {/* si usas next/image, cámbialo por <Image /> */}
          <img
            src={p.coverImage}
            alt={p.title.es}
            style={{ width: "100%", height: "auto", borderRadius: 18, border: "1px solid rgba(0,0,0,0.08)" }}
          />
        </div>
      ) : null}

      {p.content?.es?.length ? (
        <section style={{ marginTop: 22, lineHeight: 1.75 }}>
          {p.content.es.map((block, idx) => (
            <p key={idx} style={{ marginTop: 12 }}>
              {block}
            </p>
          ))}
        </section>
      ) : (
        <section style={{ marginTop: 22, opacity: 0.7 }}>
          <p>Estamos preparando los detalles de este proyecto.</p>
        </section>
      )}
    </main>
  );
}