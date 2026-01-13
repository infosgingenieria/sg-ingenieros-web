import Link from "next/link";

export default function Footer({ lang }: { lang: "es" | "en" }) {
  const phoneHuman = "+34 665 983 184";
  const phoneWa = "34665983184";
  const email = "info.sgingenieria@gmail.com";

  return (
    <footer
      style={{
        marginTop: 48,
        borderTop: "1px solid rgba(0,0,0,0.08)",
        background: "rgba(0,0,0,0.02)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "28px 16px",
          display: "grid",
          gap: 18,
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        }}
      >
        {/* Marca */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img
              src="/logo.png"
              alt="S&G"
              width={38}
              height={38}
              style={{
                display: "block",
                borderRadius: 10,
                border: "1px solid rgba(0,0,0,0.08)",
                background: "white",
                padding: 6,
              }}
            />
            <div style={{ lineHeight: 1.1 }}>
              <div style={{ fontWeight: 900 }}>S&amp;G INGENIEROS</div>
              <div style={{ fontWeight: 600, fontSize: 13, opacity: 0.75 }}>
                {lang === "es"
                  ? "TECNOLOGÍA Y AUTOMATIZACIÓN"
                  : "TECHNOLOGY & AUTOMATION"}
              </div>
            </div>
          </div>

          <p style={{ marginTop: 10, fontSize: 13, opacity: 0.75, maxWidth: 420 }}>
            {lang === "es"
              ? "Diseño, fabricación e integración de maquinaria y automatización para ganadería."
              : "Design, manufacturing and integration of livestock machinery and automation."}
          </p>

          <p style={{ marginTop: 10, fontSize: 13 }}>
            <strong>{lang === "es" ? "Ubicación:" : "Location:"}</strong>{" "}
            {lang === "es"
              ? "Salamanca y San Clemente (Cuenca), España."
              : "Salamanca and San Clemente (Cuenca), Spain."}
          </p>
        </div>

        {/* Enlaces */}
        <div>
          <div style={{ fontWeight: 900, marginBottom: 8 }}>
            {lang === "es" ? "Secciones" : "Sections"}
          </div>
          <div style={{ display: "grid", gap: 8, fontSize: 14 }}>
            <Link href={`/${lang}`} style={{ textDecoration: "none" }}>
              {lang === "es" ? "Inicio" : "Home"}
            </Link>
            <Link href={`/${lang}/servicios`} style={{ textDecoration: "none" }}>
              {lang === "es" ? "Servicios" : "Services"}
            </Link>
            <Link href={`/${lang}/proyectos`} style={{ textDecoration: "none" }}>
              {lang === "es" ? "Proyectos" : "Projects"}
            </Link>
            <Link href={`/${lang}/contacto`} style={{ textDecoration: "none" }}>
              {lang === "es" ? "Contacto" : "Contact"}
            </Link>
          </div>
        </div>

        {/* Contacto */}
        <div>
          <div style={{ fontWeight: 900, marginBottom: 8 }}>
            {lang === "es" ? "Contacto" : "Contact"}
          </div>

          <div style={{ display: "grid", gap: 10, fontSize: 14 }}>
            <div>
              <div style={{ fontSize: 12, opacity: 0.7 }}>Email</div>
              <a href={`mailto:${email}`} style={{ textDecoration: "none" }}>
                {email}
              </a>
            </div>

            <div>
              <div style={{ fontSize: 12, opacity: 0.7 }}>WhatsApp</div>
              <a
                href={`https://wa.me/${phoneWa}`}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                {phoneHuman}
              </a>
            </div>

            <div>
              <div style={{ fontSize: 12, opacity: 0.7 }}>
                {lang === "es" ? "Horario" : "Hours"}
              </div>
              <div style={{ opacity: 0.85 }}>
                {lang === "es"
                  ? "L–V 9:00–19:00 (CET)"
                  : "Mon–Fri 9:00–19:00 (CET)"}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(0,0,0,0.08)",
          padding: "14px 16px",
          fontSize: 12,
          opacity: 0.7,
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()} S&amp;G Ingenieros —{" "}
        {lang === "es" ? "Salamanca / San Clemente (Cuenca)" : "Salamanca / San Clemente (Cuenca)"}
      </div>
    </footer>
  );
}
