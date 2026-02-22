"use client";

import { motion } from "framer-motion";
import { site } from "../lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, delay: d } }),
};

export default function Page() {
  return (
    <main className="text-white">
      {/* NAV */}
      <div className="sticky top-0 z-50 border-b border-white/5 bg-black/30 backdrop-blur">
        <div className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-wide">{site.name}</a>
          <div className="flex items-center gap-4 text-sm text-white/75">
            <a className="hover:text-white" href="#servicios">Servicios</a>
            <a className="hover:text-white" href="#quien">Quién soy</a>
            <a className="hover:text-white" href="#contacto">Contacto</a>
            <a
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 shadow-glow transition text-white"
              href={site.whatsapp}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 pt-20 pb-14 md:pt-28 md:pb-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="text-4xl md:text-6xl font-bold leading-tight"
              >
                {site.name}
                <span className="block text-white/90">Coaching & Consultoría</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={0.06}
                className="mt-5 text-lg text-white/70 max-w-xl"
              >
                {site.tagline}. Siempre es posible lograr un cambio personal, laboral y profesional
                trabajando desde la actitud, el compromiso y el desarrollo consciente.
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={0.12}
                className="mt-8 flex flex-wrap gap-3"
              >
                <a
                  href="#contacto"
                  className="px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 shadow-glow transition font-medium"
                >
                  Entrevista inicial gratis
                </a>
                <a
                  href="#servicios"
                  className="px-5 py-3 rounded-2xl border border-white/15 hover:bg-white/5 transition font-medium"
                >
                  Ver servicios
                </a>
              </motion.div>

              <div className="mt-6 text-sm text-white/60">
                ✓ +25 años de experiencia • ✓ Procesos y equipos • ✓ Resultados concretos
              </div>
            </div>

            {/* HERO CARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl card p-6"
            >
              <div className="absolute -inset-24 opacity-25 blur-3xl bg-gradient-to-tr from-blue-500 via-fuchsia-500 to-emerald-400" />
              <div className="relative">
                <div className="text-sm text-white/60">Lo que trabajamos</div>
                <ul className="mt-4 space-y-3 text-white/85">
                  <li>• Liderazgo y autoconocimiento</li>
                  <li>• Procesos, productividad y foco</li>
                  <li>• Cultura, comunicación y equipos</li>
                  <li>• Transformación sostenible</li>
                </ul>
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm text-white/60">Primera entrevista</div>
                  <div className="mt-2 font-semibold">
                    Gratuita, sin compromiso — definimos próximos pasos.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IDENTIDAD */}
      <section className="mx-auto max-w-6xl px-5 py-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="rounded-3xl card p-8 md:p-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold">Identidad y propósito</h2>
          <p className="mt-3 text-white/70 max-w-4xl">
            Mirando Lejos nace con la convicción de que siempre es posible lograr un cambio —en lo personal,
            laboral y profesional— trabajando desde la actitud, el compromiso y el desarrollo consciente.
          </p>
        </motion.div>
      </section>

      {/* QUIEN */}
      <section id="quien" className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid md:grid-cols-5 gap-6 rounded-3xl card p-8">
          <div className="md:col-span-2">
            <div className="text-sm text-white/60">¿Quién soy?</div>
            <h2 className="mt-2 text-3xl font-bold">Hernán Pauletti</h2>
            <div className="mt-3 text-white/70">
              Lic. en Administración · Coach Ontológico · Ejecutivo · Laboral · Consultor en Procesos
            </div>
          </div>
          <div className="md:col-span-3 text-white/70">
            <p>
              Acompaño a personas y organizaciones a potenciar su liderazgo y lograr resultados concretos.
            </p>
            <p className="mt-3">
              +25 años en empresas nacionales y multinacionales, integrando consultoría estratégica con coaching
              para procesos de cambio sostenibles.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-3xl md:text-4xl font-bold">Servicios</h2>
        <p className="mt-3 text-white/70 max-w-3xl">
          Coaching y consultoría para cambio personal, laboral y profesional.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-5">
          {[
            ["Coaching Ontológico, Laboral, Vocacional y Ejecutivo", "Procesos personalizados para habilidades y desafíos personales/profesionales."],
            ["Capacitaciones empresariales", "Talleres de liderazgo, motivación, procesos y equipos."],
            ["Consultoría en procesos y operaciones", "Optimización, eficiencia y mejora organizacional."],
            ["Auditorías internas de calidad", "Evaluación de sistemas de gestión y mejora continua."],
            ["Entrenamientos para equipos", "Programas específicos para desempeño y coordinación."],
            ["Entrevista inicial sin cargo", "Primera conversación gratuita para definir próximos pasos."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-3xl card p-6 hover:bg-white/5 transition">
              <div className="text-xl font-semibold">{t}</div>
              <div className="mt-2 text-white/70">{d}</div>
              {t === "Entrevista inicial sin cargo" && (
                <a href="#contacto" className="inline-flex mt-4 text-blue-300 hover:text-blue-200">
                  Pedir entrevista →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/20 via-fuchsia-600/10 to-emerald-500/10 p-10 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold">¿Listo para avanzar?</h2>
          <p className="mt-3 text-white/70 max-w-2xl">
            Agendemos tu entrevista inicial sin cargo. Clarificamos objetivos y definimos un plan.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={site.whatsapp}
              className="px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 shadow-glow transition font-medium"
            >
              Hablar por WhatsApp
            </a>
            <a
              href="#contacto"
              className="px-5 py-3 rounded-2xl border border-white/15 hover:bg-white/5 transition font-medium"
            >
              Enviar consulta
            </a>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid md:grid-cols-2 gap-6 rounded-3xl card p-8">
          <div>
            <h2 className="text-3xl font-bold">Contacto</h2>
            <p className="mt-3 text-white/70">
              Estoy para acompañarte en tu proceso de transformación.
            </p>
            <div className="mt-6 space-y-3 text-white/75">
              <div>
                <div className="text-sm text-white/60">WhatsApp</div>
                <a className="text-blue-300 hover:text-blue-200" href={site.whatsapp}>
                  {site.whatsappLabel}
                </a>
              </div>
              <div>
                <div className="text-sm text-white/60">Email</div>
                <a className="text-blue-300 hover:text-blue-200" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </div>
            </div>
          </div>

          <form
            className="rounded-3xl border border-white/10 bg-black/20 p-6"
            action={`mailto:${site.email}`}
            method="post"
            encType="text/plain"
          >
            <label className="block text-sm text-white/70">Nombre completo</label>
            <input
              name="Nombre"
              className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-white/30"
              required
            />
            <label className="block mt-4 text-sm text-white/70">Email</label>
            <input
              name="Email"
              type="email"
              className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-white/30"
              required
            />
            <label className="block mt-4 text-sm text-white/70">Mensaje</label>
            <textarea
              name="Mensaje"
              rows={5}
              className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-white/30"
              required
            />
            <button
              type="submit"
              className="mt-5 w-full px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 shadow-glow transition font-medium"
            >
              Enviar
            </button>
            <div className="mt-3 text-xs text-white/60">
              (Si preferís, escribime por WhatsApp y listo.)
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black/30">
        <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-white/60 flex flex-col md:flex-row gap-3 justify-between">
          <div>© {new Date().getFullYear()} {site.name}. Todos los derechos reservados.</div>
          <div className="flex gap-4">
            <a className="hover:text-white" href="#servicios">Servicios</a>
            <a className="hover:text-white" href={site.whatsapp}>WhatsApp</a>
          </div>
        </div>
      </footer>
    </main>
  );
      }
