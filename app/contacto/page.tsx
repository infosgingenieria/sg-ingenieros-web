import Link from "next/link";
import { metadataBase } from "@/lib/seo"; // si no tienes esto, borra esta línea
import { tES } from "@/content/es"; // si tu import es distinto, ajusta a tu proyecto

export const metadata = {
  title: "Contacto | S&G Ingenieros",
  description:
    "Contacta con S&G Ingenieros. Cuéntanos tu proyecto y te respondemos lo antes posible. WhatsApp, teléfono y email.",
  alternates: {
    canonical: "/contacto",
  },
};

export default function ContactoPage() {
  // Ajusta aquí tus datos
  const email = "info.sgingenieria@gmail.com";
  const phoneDisplay = "+34 665 983 184";
  const phoneE164 = "+34665983184";
  const whatsappUrl = "https://wa.me/34665983184";
  const hours = "L–V 9:00–19:00 (CET)";
  const location = "Salamanca y San Clemente (Cuenca), España.";

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">Contacto</h1>
          <p className="mt-2 text-black/70">
            Cuéntanos tu proyecto y te respondemos lo antes posible.
          </p>
        </div>

        <nav className="flex gap-4 text-sm font-semibold">
          <Link className="underline underline-offset-4" href="/">
            Inicio
          </Link>
          <Link className="underline underline-offset-4" href="/servicios">
            Servicios
          </Link>
          <Link className="underline underline-offset-4" href="/proyectos">
            Proyectos
          </Link>
        </nav>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {/* Columna izquierda: tarjetas */}
        <div className="grid gap-4">
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wider text-black/60">
              Email
            </div>
            <a
              className="mt-2 inline-block text-lg font-extrabold underline underline-offset-4"
              href={`mailto:${email}`}
            >
              {email}
            </a>
            <p className="mt-2 text-sm text-black/60">
              Respuesta rápida en días laborables.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wider text-black/60">
              Teléfono / WhatsApp
            </div>
            <a
              className="mt-2 inline-block text-lg font-extrabold underline underline-offset-4"
              href={`tel:${phoneE164}`}
            >
              {phoneDisplay}
            </a>

            <div className="mt-4">
              <a
                href={whatsappUrl}
                className="inline-flex items-center justify-center rounded-xl bg-black px-4 py-3 text-sm font-extrabold text-white shadow-sm hover:opacity-90"
                target="_blank"
                rel="noreferrer"
              >
                Escribir por WhatsApp
              </a>
            </div>

            <p className="mt-3 text-sm text-black/60">
              Si nos escribes por WhatsApp, indícanos ubicación y tipo de
              instalación.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wider text-black/60">
              Horario
            </div>
            <div className="mt-2 text-base font-bold">{hours}</div>

            <div className="mt-4 text-xs font-bold uppercase tracking-wider text-black/60">
              Ubicación
            </div>
            <div className="mt-2 text-base font-bold">{location}</div>
          </div>
        </div>

        {/* Columna derecha: formulario */}
        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-extrabold">Pedir presupuesto</h2>
          <p className="mt-2 text-sm text-black/60">
            Cuanta más info nos des, más rápido te presupuestamos.
          </p>

          <form
            className="mt-6 grid gap-4"
            action={`mailto:${email}`}
            method="post"
            encType="text/plain"
          >
            <div className="grid gap-2">
              <label className="text-sm font-bold">Nombre</label>
              <input
                name="Nombre"
                required
                className="rounded-xl border border-black/15 px-4 py-3 outline-none focus:border-black"
                placeholder="Tu nombre"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-bold">Empresa (opcional)</label>
              <input
                name="Empresa"
                className="rounded-xl border border-black/15 px-4 py-3 outline-none focus:border-black"
                placeholder="Nombre de la empresa"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-bold">Email</label>
              <input
                type="email"
                name="Email"
                required
                className="rounded-xl border border-black/15 px-4 py-3 outline-none focus:border-black"
                placeholder="tu@email.com"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-bold">Teléfono</label>
              <input
                name="Teléfono"
                className="rounded-xl border border-black/15 px-4 py-3 outline-none focus:border-black"
                placeholder="+34 ..."
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-bold">Mensaje</label>
              <textarea
                name="Mensaje"
                required
                rows={6}
                className="rounded-xl border border-black/15 px-4 py-3 outline-none focus:border-black"
                placeholder="Cuéntanos qué necesitas (RFID, pesaje, automatización, etc.)"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-black px-4 py-3 text-sm font-extrabold text-white shadow-sm hover:opacity-90"
            >
              Enviar solicitud
            </button>

            <p className="text-xs text-black/50">
              Nota: este formulario envía un email desde tu dispositivo. Si
              quieres un envío “real” (sin abrir el correo), te lo conecto a un
              endpoint (Resend / SMTP / Formspree) en el siguiente paso.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}