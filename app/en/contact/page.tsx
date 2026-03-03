import Link from "next/link";

export const metadata = {
  title: "Contact | S&G Ingenieros",
  description:
    "Contact S&G Ingenieros. Tell us about your project and we will respond as soon as possible.",
  alternates: {
    canonical: "/en/contact",
  },
};

export default function ContactPage() {
  const email = "info.sgingenieria@gmail.com";
  const phoneDisplay = "+34 665 983 184";
  const phoneE164 = "+34665983184";
  const whatsappUrl = "https://wa.me/34665983184";
  const hours = "Mon–Fri 9:00–19:00 (CET)";
  const location = "Salamanca and San Clemente (Cuenca), Spain";

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">Contact</h1>
          <p className="mt-2 text-black/70">
            Tell us about your project and we will get back to you as soon as
            possible.
          </p>
        </div>

        <nav className="flex gap-4 text-sm font-semibold">
          <Link className="underline underline-offset-4" href="/en">
            Home
          </Link>
          <Link className="underline underline-offset-4" href="/en/services">
            Services
          </Link>
          <Link className="underline underline-offset-4" href="/en/projects">
            Projects
          </Link>
        </nav>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
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
              Fast response on working days.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wider text-black/60">
              Phone / WhatsApp
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
                Message on WhatsApp
              </a>
            </div>

            <p className="mt-3 text-sm text-black/60">
              When contacting us, please indicate location and type of
              installation.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wider text-black/60">
              Working hours
            </div>
            <div className="mt-2 text-base font-bold">{hours}</div>

            <div className="mt-4 text-xs font-bold uppercase tracking-wider text-black/60">
              Location
            </div>
            <div className="mt-2 text-base font-bold">{location}</div>
          </div>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-extrabold">Request a quote</h2>
          <p className="mt-2 text-sm text-black/60">
            The more information you provide, the faster we can prepare your
            quote.
          </p>

          <form
            className="mt-6 grid gap-4"
            action={`mailto:${email}`}
            method="post"
            encType="text/plain"
          >
            <div className="grid gap-2">
              <label className="text-sm font-bold">Name</label>
              <input
                name="Name"
                required
                className="rounded-xl border border-black/15 px-4 py-3 outline-none focus:border-black"
                placeholder="Your name"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-bold">Company (optional)</label>
              <input
                name="Company"
                className="rounded-xl border border-black/15 px-4 py-3 outline-none focus:border-black"
                placeholder="Company name"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-bold">Email</label>
              <input
                type="email"
                name="Email"
                required
                className="rounded-xl border border-black/15 px-4 py-3 outline-none focus:border-black"
                placeholder="your@email.com"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-bold">Phone</label>
              <input
                name="Phone"
                className="rounded-xl border border-black/15 px-4 py-3 outline-none focus:border-black"
                placeholder="+34 ..."
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-bold">Message</label>
              <textarea
                name="Message"
                required
                rows={6}
                className="rounded-xl border border-black/15 px-4 py-3 outline-none focus:border-black"
                placeholder="Tell us what you need (RFID, weighing, automation, etc.)"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-black px-4 py-3 text-sm font-extrabold text-white shadow-sm hover:opacity-90"
            >
              Send request
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}