import Link from "next/link";
import { es } from "@/content/es";
import { en } from "@/content/en";
import { projects } from "@/content/projects";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang?.toLowerCase() === "en" ? "en" : "es";
  const t = locale === "es" ? es : en;

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl border bg-white p-8 md:p-12">
        <div className="absolute inset-0 opacity-[0.03] [background:radial-gradient(circle_at_20%_20%,#000_0,transparent_45%),radial-gradient(circle_at_80%_10%,#000_0,transparent_45%),radial-gradient(circle_at_50%_90%,#000_0,transparent_50%)]" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold opacity-80">
            <span className="h-2 w-2 rounded-full bg-black/70" />
            {locale === "es"
              ? "Soluciones industriales para ganadería"
              : "Industrial solutions for livestock"}
          </div>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight md:text-5xl">
            {t.hero.title}
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-black/70 md:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={`/${locale}/contacto`}
              className="rounded-xl border bg-black px-5 py-3 text-sm font-bold text-white"
            >
              {t.hero.cta}
            </Link>

            <Link
              href={`/${locale}/proyectos`}
              className="rounded-xl border px-5 py-3 text-sm font-bold"
            >
              {locale === "es" ? "Ver proyectos" : "See projects"}
            </Link>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            <Stat
              title={locale === "es" ? "RFID + PLC + HMI" : "RFID + PLC + HMI"}
              desc={
                locale === "es"
                  ? "Integración completa de automatización."
                  : "Full automation integration."
              }
            />
            <Stat
              title={locale === "es" ? "Pesaje y clasificación" : "Weighing & sorting"}
              desc={
                locale === "es"
                  ? "Control y registro de datos."
                  : "Control and data logging."
              }
            />
            <Stat
              title={locale === "es" ? "Hecho a medida" : "Custom-built"}
              desc={
                locale === "es"
                  ? "Diseño y fabricación para tu explotación."
                  : "Designed for your farm."
              }
            />
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="mt-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-extrabold md:text-2xl">
            {t.sections.servicesTitle}
          </h2>
          <Link
            href={`/${locale}/servicios`}
            className="text-sm font-semibold text-black/70 hover:text-black"
          >
            {locale === "es" ? "Ver todo" : "View all"} →
          </Link>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {(t.services || []).map((s) => (
            <div
              key={s.id}
              className="rounded-2xl border bg-white p-5 transition hover:shadow-md"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 h-10 w-10 rounded-xl border bg-black/5" />
                <div>
                  <h3 className="text-base font-extrabold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/70">
                    {s.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROYECTOS */}
      <section className="mt-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-extrabold md:text-2xl">
            {t.sections.projectsTitle}
          </h2>
          <Link
            href={`/${locale}/proyectos`}
            className="text-sm font-semibold text-black/70 hover:text-black"
          >
            {locale === "es" ? "Ver todos" : "View all"} →
          </Link>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <Link
              key={p.slug}
              href={`/${locale}/proyectos/${p.slug}`}
              className="group rounded-2xl border bg-white p-5 transition hover:shadow-md"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-xl border bg-black/5">
                {/* Imagen opcional si existe */}
                {p.coverImage ? (
                  <img
                    src={p.coverImage}
                    alt={p.title[locale]}
                    className="h-full w-full object-cover transition group-hover:scale-[1.02]"
                  />
                ) : null}
              </div>

              <h3 className="mt-4 text-base font-extrabold">
                {p.title[locale]}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-black/70">
                {p.summary[locale]}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border px-2 py-1 text-[11px] font-semibold text-black/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mt-12 rounded-3xl border bg-black p-8 text-white md:p-10">
        <h2 className="text-2xl font-extrabold md:text-3xl">
          {locale === "es"
            ? "¿Quieres automatizar tu granja?"
            : "Want to automate your farm?"}
        </h2>
        <p className="mt-3 max-w-2xl text-white/80">
          {locale === "es"
            ? "Cuéntanos tu caso y te preparamos una solución a medida (pesaje, clasificación, alimentación, integración)."
            : "Tell us your case and we’ll propose a custom solution (weighing, sorting, feeding, integration)."}
        </p>

        <div className="mt-6">
          <Link
            href={`/${locale}/contacto`}
            className="inline-block rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-black"
          >
            {locale === "es" ? "Contactar" : "Contact"}
          </Link>
        </div>
      </section>
    </main>
  );
}

function Stat({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border bg-white/60 p-4">
      <div className="text-sm font-extrabold">{title}</div>
      <div className="mt-1 text-xs text-black/70">{desc}</div>
    </div>
  );
}
