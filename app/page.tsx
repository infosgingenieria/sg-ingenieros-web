import Link from "next/link";
import { es } from "@/content/es";
import { projects } from "@/content/projects";

export default function Home() {
  const locale: "es" = "es";
  const t = es;

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* HERO */}
      <section className="relative mt-6 overflow-hidden rounded-3xl border bg-white p-8 md:p-12">
        <div className="absolute inset-0 opacity-[0.06] [background:radial-gradient(circle_at_20%_20%,#000_0,transparent_45%),radial-gradient(circle_at_80%_10%,#000_0,transparent_45%),radial-gradient(circle_at_50%_90%,#000_0,transparent_50%)]" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold opacity-80">
            <span className="h-2 w-2 rounded-full bg-black/70" />
            Soluciones industriales para ganadería
          </div>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight md:text-5xl">{t.hero.title}</h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-black/70 md:text-lg">{t.hero.subtitle}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={`/contacto`}
              className="rounded-xl border bg-black px-5 py-3 text-sm font-bold text-white"
            >
              {t.hero.cta}
            </Link>

            <Link href={`/proyectos`} className="rounded-xl border px-5 py-3 text-sm font-bold">
              Ver proyectos
            </Link>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            <Stat title="RFID + PLC + HMI" desc="Integración completa de automatización." />
            <Stat title="Pesaje y clasificación" desc="Control y registro de datos." />
            <Stat title="Hecho a medida" desc="Diseño y fabricación para tu explotación." />
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="mt-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-extrabold md:text-2xl">{t.sections.servicesTitle}</h2>
          <Link href={`/servicios`} className="text-sm font-semibold text-black/70 hover:text-black">
            Ver todo →
          </Link>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {(t.services || []).map((s) => (
            <div key={s.id} className="rounded-2xl border bg-white p-5 transition hover:shadow-md">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-10 w-10 rounded-xl border bg-black/5" />
                <div>
                  <h3 className="text-base font-extrabold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/70">{s.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROYECTOS */}
      <section className="mt-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-extrabold md:text-2xl">{t.sections.projectsTitle}</h2>
          <Link href={`/proyectos`} className="text-sm font-semibold text-black/70 hover:text-black">
            Ver todos →
          </Link>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <Link
              key={p.slug}
              href={`/proyectos/${p.slug}`}
              className="group rounded-2xl border bg-white p-5 transition hover:shadow-md"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-xl border bg-black/5">
                {p.coverImage ? (
                  <img
                    src={p.coverImage}
                    alt={p.title[locale]}
                    className="h-full w-full object-cover transition group-hover:scale-[1.02]"
                  />
                ) : null}
              </div>

              <h3 className="mt-4 text-base font-extrabold">{p.title[locale]}</h3>

              <p className="mt-2 text-sm leading-relaxed text-black/70">{p.summary?.[locale] ?? ""}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {(p.tags ?? []).slice(0, 3).map((tag) => (
                  <span key={tag} className="rounded-full border px-2 py-1 text-[11px] font-semibold text-black/70">
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
        <h2 className="text-2xl font-extrabold md:text-3xl">¿Quieres automatizar tu granja?</h2>
        <p className="mt-3 max-w-2xl text-white/80">
          Cuéntanos tu caso y te preparamos una solución a medida (pesaje, clasificación, alimentación, integración).
        </p>

        <div className="mt-6">
          <Link href={`/contacto`} className="inline-block rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-black">
            Contactar
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
