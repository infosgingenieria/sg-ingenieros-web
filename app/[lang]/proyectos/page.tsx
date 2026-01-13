import Link from "next/link";
import { projects } from "@/content/projects";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang?.toLowerCase() === "en" ? "en" : "es";

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 16px" }}>
      <h1 style={{ marginTop: 0 }}>
        {locale === "es" ? "Proyectos" : "Projects"}
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 16,
          marginTop: 18,
        }}
      >
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/${locale}/proyectos/${p.slug}`}
            style={{
              border: "1px solid #eee",
              borderRadius: 16,
              padding: 16,
              textDecoration: "none",
            }}
          >
            <div style={{ fontWeight: 800 }}>{p.title[locale]}</div>
            <div style={{ marginTop: 8, opacity: 0.85 }}>
              {p.summary[locale]}
            </div>
            <div style={{ marginTop: 12, fontSize: 12, opacity: 0.7 }}>
              {p.tags.join(" · ")}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
