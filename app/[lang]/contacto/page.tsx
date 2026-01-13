import ContactForm from "@/components/ContactForm";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang?.toLowerCase() === "en" ? "en" : "es";

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "32px 16px" }}>
      <h1 style={{ marginTop: 0 }}>
        {locale === "es" ? "Contacto" : "Contact"}
      </h1>

      <p style={{ opacity: 0.85 }}>
        {locale === "es"
          ? "Rellena el formulario o escríbenos por WhatsApp."
          : "Fill out the form or message us on WhatsApp."}
      </p>

      <div style={{ marginTop: 18 }}>
        <ContactForm lang={locale} />
      </div>

      <div style={{ marginTop: 22, opacity: 0.9 }}>
        <div>
          <strong>WhatsApp:</strong>{" "}
          <a href="https://wa.me/34TU_NUMERO">+34 665 983 184</a>
        </div>
        <div style={{ marginTop: 6 }}>
          <strong>Email:</strong>{" "}
          <a href="mailto:info.sgingenieria@gmail.com">info.sgingenieria@gmail.com</a>
        </div>
      </div>
    </main>
  );
}
