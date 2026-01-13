import { es } from "@/content/es";
import { en } from "@/content/en";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang?.toLowerCase() === "en" ? "en" : "es";
  const t = locale === "es" ? es : en;

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "32px 16px" }}>
      <h1 style={{ marginTop: 0 }}>
        {locale === "es" ? "Servicios" : "Services"}
      </h1>

      <div style={{ display: "grid", gap: 16, marginTop: 18 }}>
        {(t.services || []).map((s) => (
          <div
            key={s.id}
            style={{ border: "1px solid #eee", borderRadius: 16, padding: 16 }}
          >
            <div style={{ fontWeight: 800 }}>{s.title}</div>
            <div style={{ marginTop: 8, opacity: 0.85 }}>{s.description}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
