import Link from "next/link";
import { es } from "@/content/es";

export default function ContactoPage() {
  const t = es;

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "32px 16px" }}>
      <header style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center" }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, margin: 0 }}>{t.contact.title}</h1>
        <nav style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="/" style={{ textDecoration: "underline" }}>Inicio</Link>
          <Link href="/servicios" style={{ textDecoration: "underline" }}>Servicios</Link>
          <Link href="/proyectos" style={{ textDecoration: "underline" }}>Proyectos</Link>
        </nav>
      </header>

      <p style={{ marginTop: 10, opacity: 0.85 }}>{t.contact.subtitle}</p>

      <div style={{ display: "grid", gap: 16, marginTop: 18 }}>
        <div style={{ border: "1px solid #eee", borderRadius: 16, padding: 16 }}>
          <div style={{ fontWeight: 800 }}>{t.contact.emailLabel}</div>
          <div style={{ marginTop: 8 }}>
            <a href={`mailto:${t.contact.email}`} style={{ textDecoration: "underline" }}>
              {t.contact.email}
            </a>
          </div>
        </div>

        <div style={{ border: "1px solid #eee", borderRadius: 16, padding: 16 }}>
          <div style={{ fontWeight: 800 }}>{t.contact.phoneLabel}</div>
          <div style={{ marginTop: 8 }}>
            <a href={`tel:${t.contact.phone}`} style={{ textDecoration: "underline" }}>
              {t.contact.phone}
            </a>
          </div>
        </div>

        <div style={{ border: "1px solid #eee", borderRadius: 16, padding: 16 }}>
          <div style={{ fontWeight: 800 }}>{t.contact.whatsappLabel}</div>
          <div style={{ marginTop: 8 }}>
            <a href={t.contact.whatsappUrl} style={{ textDecoration: "underline" }}>
              {t.contact.whatsappText}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
