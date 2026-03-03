import Link from "next/link";
import { projects, normalizeSlug } from "@/content/projects";

export default function ProjectsPageEn() {
  return (
    <main style={{ maxWidth: 1000, margin: "0 auto", padding: "32px 16px" }}>
      <h1 style={{ marginTop: 0 }}>Projects</h1>

      <div style={{ display: "grid", gap: 16, marginTop: 18 }}>
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/en/projects/${normalizeSlug(p.slug)}`}
            style={{
              border: "1px solid #eee",
              borderRadius: 16,
              padding: 16,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div style={{ fontWeight: 800 }}>{p.title.en}</div>
            <div style={{ marginTop: 8, opacity: 0.85 }}>{p.summary?.en ?? ""}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
