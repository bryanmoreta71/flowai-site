import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";

const stats = [
  { value: "100%", label: "Código a medida" },
  { value: "<24h", label: "Tiempo de respuesta" },
  { value: "React/Next.js", label: "Stack moderno" },
];

const services = [
  {
    title: "Landing Pages",
    desc: "Páginas de alto impacto diseñadas para convertir visitantes en clientes, listas en días no semanas.",
    icon: "M13 2 3 14h7l-1 8 11-14h-7l1-6Z",
  },
  {
    title: "Sitios Corporativos",
    desc: "Sitios completos multi-sección para negocios que necesitan presencia profesional y escalable.",
    icon: "M3 21h18M5 21V7l8-4 8 4v14M9 9h1m-1 4h1m4-4h1m-1 4h1M9 21v-4h6v4",
  },
  {
    title: "Automatización Web",
    desc: "Formularios, integraciones de WhatsApp y flujos conectados a tus herramientas de negocio.",
    icon: "M12 2v4m0 12v4m10-10h-4M6 12H2m15.07-7.07-2.83 2.83M9.76 14.24l-2.83 2.83m0-10.14 2.83 2.83m7.48 7.48 2.83 2.83",
  },
];

const demos = [
  {
    name: "FitZone Studio",
    category: "Landing Page — Fitness",
    desc: "Gimnasio moderno con planes de membresía, testimonios, FAQ y reserva de clase gratuita.",
    url: "https://flowaiinfo.lat/gymfitzone",
    tags: ["React", "Next.js", "Tailwind"],
    accent: "from-lime-400 to-emerald-500",
  },
  {
    name: "El Cacao de Luis",
    category: "Landing Page — B2B / Exportación",
    desc: "Sitio corporativo para proveedor de cacao enfocado en atraer compradores industriales a gran escala.",
    url: "https://cacao.flowaiinfo.lat",
    tags: ["React", "Next.js", "B2B"],
    accent: "from-amber-500 to-orange-600",
  },
];

const process = [
  { step: "01", title: "Descubrimiento", desc: "Entendemos tu negocio, objetivos y a quién le quieres vender." },
  { step: "02", title: "Diseño", desc: "Creamos una propuesta visual alineada a tu marca y a tu público." },
  { step: "03", title: "Desarrollo", desc: "Construimos el sitio con React/Next.js: rápido, responsivo y limpio." },
  { step: "04", title: "Lanzamiento", desc: "Lo publicamos en tu dominio y te damos soporte post-entrega." },
];

export default function Home() {
  return (
    <div className="bg-zinc-950">
      <Navbar />
      <WhatsAppButton />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.18),_transparent_60%)]"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-indigo-300">
              Desarrollo web con React &amp; Next.js
            </span>
            <h1 className="mt-6 text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl">
              Sitios web rápidos,<br />modernos y a medida
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              Construyo landing pages y sitios corporativos con tecnología moderna —
              pensados para convertir visitantes en clientes, no solo para verse bien.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://wa.me/593986112811"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-8 py-3.5 text-sm font-bold text-white transition-transform hover:scale-105 sm:w-auto"
              >
                Hablemos por WhatsApp
              </a>
              <a
                href="#demos"
                className="w-full rounded-full border border-white/15 px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/5 sm:w-auto"
              >
                Ver Demos
              </a>
            </div>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-black text-white sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-xs text-zinc-500 sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="border-t border-white/10 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-sm font-bold uppercase tracking-wide text-indigo-400">
              Qué hago
            </h2>
            <p className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Desarrollo web enfocado en resultados
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-indigo-400/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-400/10 text-indigo-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d={service.icon} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demos */}
      <section id="demos" className="border-t border-white/10 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-sm font-bold uppercase tracking-wide text-indigo-400">
              Portafolio
            </h2>
            <p className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Demos en vivo
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
              Proyectos de muestra construidos para mostrar distintos estilos de diseño,
              desde marcas de consumo hasta sitios corporativos B2B.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {demos.map((demo) => (
              <a
                key={demo.name}
                href={demo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:border-indigo-400/40"
              >
                <div className={`h-2 w-full bg-gradient-to-r ${demo.accent}`} />
                <div className="p-6 sm:p-8">
                  <span className="text-xs font-semibold uppercase tracking-wide text-indigo-300">
                    {demo.category}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-white">{demo.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{demo.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {demo.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-1.5 text-sm font-bold text-indigo-300 transition-transform group-hover:translate-x-1">
                    Ver demo en vivo
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section id="proceso" className="border-t border-white/10 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-sm font-bold uppercase tracking-wide text-indigo-400">
              Cómo trabajo
            </h2>
            <p className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Proceso simple y directo
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step}>
                <div className="text-4xl font-black text-indigo-500/60">{item.step}</div>
                <h3 className="mt-3 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="border-t border-white/10 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-sm font-bold uppercase tracking-wide text-indigo-400">
            Empecemos
          </h2>
          <p className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
            ¿Tienes un proyecto en mente?
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            Escríbeme por WhatsApp y conversemos sobre tu idea — respuesta en menos de 24 horas.
          </p>
          <a
            href="https://wa.me/593986112811"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-8 py-3.5 text-sm font-bold text-white transition-transform hover:scale-105"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.86.5 3.6 1.38 5.1L2 22l5.1-1.34c1.44.8 3.1 1.24 4.94 1.24 5.52 0 10-4.48 10-10s-4.48-10-10-10Z" />
            </svg>
            Hablemos por WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row lg:px-8">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-indigo-400 to-violet-500 text-xs font-black text-zinc-950">
              F
            </span>
            <span className="text-sm font-bold text-white">
              Flow<span className="text-indigo-400">AI</span>
            </span>
          </div>
          <p className="text-xs text-zinc-500">
            © 2026 FlowAI. Desarrollo web con React &amp; Next.js.
          </p>
        </div>
      </footer>
    </div>
  );
}
