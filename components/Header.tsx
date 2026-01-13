"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LangSwitch from "./LangSwitch";

export default function Header({ lang }: { lang: "es" | "en" }) {
  const pathname = (usePathname() || "").toLowerCase();

  const isActive = (href: string) => {
    const h = href.toLowerCase();
    return pathname === h || pathname.startsWith(h + "/");
  };

  const NavLink = ({
    href,
    label,
  }: {
    href: string;
    label: string;
  }) => {
    const active = isActive(href);
    return (
      <Link
        href={href}
        style={{
          textDecoration: "none",
          fontWeight: 800,
          opacity: active ? 1 : 0.75,
          borderBottom: active ? "2px solid rgba(0,0,0,0.75)" : "2px solid transparent",
          paddingBottom: 4,
        }}
      >
        {label}
      </Link>
    );
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        background: "rgba(255,255,255,0.85)",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        {/* Marca */}
        <Link
          href={`/${lang}`}
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 10,
            minWidth: 260,
          }}
        >
          <img
            src="/logo.png"
            alt="S&G"
            width={40}
            height={40}
            style={{
              display: "block",
              borderRadius: 10,
              border: "1px solid rgba(0,0,0,0.08)",
              background: "white",
              padding: 6,
            }}
          />

          <span style={{ lineHeight: 1.05 }}>
            <span style={{ fontWeight: 900, letterSpacing: 0.2 }}>
              S&amp;G INGENIEROS
            </span>
            <br />
            <span style={{ fontWeight: 600, fontSize: 13, opacity: 0.75 }}>
              TECNOLOGÍA Y AUTOMATIZACIÓN
            </span>
          </span>
        </Link>

        {/* Menú */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            flexWrap: "wrap",
          }}
        >
          <NavLink
            href={`/${lang}/servicios`}
            label={lang === "es" ? "Servicios" : "Services"}
          />
          <NavLink
            href={`/${lang}/proyectos`}
            label={lang === "es" ? "Proyectos" : "Projects"}
          />
          <NavLink
            href={`/${lang}/contacto`}
            label={lang === "es" ? "Contacto" : "Contact"}
          />

          {/* CTA */}
          <Link
            href={`/${lang}/contacto`}
            style={{
              textDecoration: "none",
              padding: "8px 12px",
              borderRadius: 12,
              border: "1px solid rgba(0,0,0,0.15)",
              background: "rgba(0,0,0,0.92)",
              color: "white",
              fontWeight: 900,
              marginLeft: 6,
            }}
          >
            {lang === "es" ? "Pedir presupuesto" : "Request a quote"}
          </Link>

          {/* Idioma */}
          <LangSwitch />
        </nav>
      </div>
    </header>
  );
}
