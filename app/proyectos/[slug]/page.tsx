import { getProjectBySlug } from "@/content/projects";

export const dynamic = "force-dynamic";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = getProjectBySlug(params.slug);

  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: "32px 16px" }}>
      <h1 style={{ fontSize: 22, fontWeight: 900 }}>DEBUG PROYECTO</h1>
      <pre style={{ marginTop: 12, padding: 12, background: "#f5f5f5", borderRadius: 12, overflowX: "auto" }}>
        slug: {params.slug}
        {"\n"}
        found: {p ? "YES" : "NO"}
        {"\n"}
        title.es: {p?.title?.es ?? ""}
      </pre>
    </main>
  );
}