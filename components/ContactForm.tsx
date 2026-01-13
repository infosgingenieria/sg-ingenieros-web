"use client";

export default function ContactForm({ lang }: { lang: "es" | "en" }) {
  const FORM_ENDPOINT = "https://formspree.io/f/xdaaojok";

  return (
    <form
      action={FORM_ENDPOINT}
      method="POST"
      style={{ display: "grid", gap: 12 }}
    >
      <input type="hidden" name="_subject" value="Nuevo mensaje desde la web S&G Ingenieros" />

      <div>
        <label style={{ display: "block", fontSize: 14, fontWeight: 600 }}>
          {lang === "es" ? "Nombre" : "Name"}
        </label>
        <input
          name="name"
          type="text"
          required
          style={{
            width: "100%",
            padding: 10,
            border: "1px solid #ddd",
            borderRadius: 10,
          }}
        />
      </div>

      <div>
        <label style={{ display: "block", fontSize: 14, fontWeight: 600 }}>
          {lang === "es" ? "Email" : "Email"}
        </label>
        <input
          name="email"
          type="email"
          required
          style={{
            width: "100%",
            padding: 10,
            border: "1px solid #ddd",
            borderRadius: 10,
          }}
        />
      </div>

      <div>
        <label style={{ display: "block", fontSize: 14, fontWeight: 600 }}>
          {lang === "es" ? "Mensaje" : "Message"}
        </label>
        <textarea
          name="message"
          rows={5}
          required
          style={{
            width: "100%",
            padding: 10,
            border: "1px solid #ddd",
            borderRadius: 10,
          }}
        />
      </div>

      <button
        type="submit"
        style={{
          padding: "10px 14px",
          border: "1px solid #ddd",
          borderRadius: 12,
          background: "black",
          color: "white",
          cursor: "pointer",
          fontWeight: 800,
        }}
      >
        {lang === "es" ? "Enviar mensaje" : "Send message"}
      </button>
    </form>
  );
}
