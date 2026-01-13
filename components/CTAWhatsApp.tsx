"use client";

export default function CTAWhatsApp({ lang }: { lang: "es" | "en" }) {
  const phone = "34665983184";
  const msg =
    lang === "es"
      ? "Hola, soy ___ y quiero información y presupuesto."
      : "Hi, I'm ___ and I'd like information and a quote.";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      style={{
        position: "fixed",
        right: 16,
        bottom: 16,
        padding: "10px 12px",
        borderRadius: 999,
        border: "1px solid #ddd",
        background: "white",
        textDecoration: "none",
        fontWeight: 800,
        boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
      }}
    >
      WhatsApp
    </a>
  );
}
