import { notFound } from "next/navigation";
import { projects } from "@/content/projects";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale = lang?.toLowerCase() === "en" ? "en" : "es";

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "32px 16px" }}>
      <h1 style={{ marginTop: 0 }}>{project.title[locale]}</h1>
      <p style={{ marginTop: 12, opacity: 0.85 }}>{project.summary[locale]}</p>

      <div style={{ marginTop: 12, fontSize: 13, opacity: 0.7 }}>
        {project.tags.join(" · ")}
      </div>

      <div style={{ marginTop: 20 }}>
        <img
          src={project.coverImage}
          alt={project.title[locale]}
          style={{
            width: "100%",
            maxWidth: 800,
            borderRadius: 16,
            border: "1px solid #eee",
          }}
        />
      </div>
    </main>
  );
}
