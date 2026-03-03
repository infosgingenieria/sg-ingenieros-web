import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/content/projects";

export const dynamic = "force-dynamic";

type Params = { slug: string };

export default async function ProjectPage({
  params,
}: {
  params: Params | Promise<Params>;
}) {
  const resolved: Params =
    typeof (params as any)?.then === "function"
      ? await (params as Promise<Params>)
      : (params as Params);

  const slug = resolved.slug;

  if (!slug) return notFound();

  const p = getProjectBySlug(slug);
  if (!p) return notFound();

  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: "32px 16px" }}>
      <h1 style={{ fontSize: 34, fontWeight: 900 }}>{p.title.es}</h1>
      <p style={{ marginTop: 12 }}>{p.summary?.es ?? p.description?.es ?? ""}</p>
    </main>
  );
}