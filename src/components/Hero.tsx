import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowDown, ArrowRight, Download, Mail } from "lucide-react";
import { profile } from "../data/content";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 18, mass: 0.7 } },
};

const stats = [
  { value: "3+", label: "Years shipping" },
  { value: "3", label: "Live products" },
  { value: "15+", label: "Projects built" },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(ellipse_at_72%_-10%,rgba(232,163,61,0.14),transparent_62%)]"
      />
      <div className="shell relative grid items-end gap-14 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
        <motion.div variants={container} initial={reduce ? false : "hidden"} animate="show" className="min-w-0">
          <motion.div variants={item} className="flex items-center gap-3">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper/80 whitespace-nowrap">
              Available for new roles
            </span>
            <span className="hidden h-px w-8 bg-line sm:block" aria-hidden />
            <span className="mono-label hidden sm:inline">Lagos, NG</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-8 text-[clamp(2.5rem,8.4vw,5.5rem)] font-medium leading-[0.93] tracking-[-0.045em]"
          >
            I build
            <span className="block text-accent">web products</span>
            <span className="block">end to end.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-7 max-w-xl text-[15px] leading-relaxed text-muted md:text-base">
            Three years shipping production software — interfaces, APIs and the data behind them, from
            cross-border payments and remittances to lending and trading platforms. React and TypeScript up front;
            Node, Go and PostgreSQL behind it.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 bg-accent px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink transition-colors duration-200 hover:bg-accent-2"
            >
              View selected work
              <ArrowRight className="size-3.5 transition-transform duration-300 ease-out-expo group-hover:translate-x-1" />
            </a>
            <a
              href={profile.cv}
              download
              className="group inline-flex items-center gap-2 border border-line px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.14em] text-paper transition-colors duration-200 hover:border-paper/40"
            >
              <Download className="size-3.5 text-muted transition-colors group-hover:text-paper" />
              Download CV
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email Patrick"
              className="grid size-[46px] place-items-center border border-line text-muted transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              <Mail className="size-4" />
            </a>
          </motion.div>

          <motion.dl variants={item} className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-medium tracking-tight">{stat.value}</dd>
                <dd className="mono-label mt-1 block text-[10px]">{stat.label}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.figure
          variants={item}
          initial={reduce ? false : "hidden"}
          animate="show"
          className="relative mx-auto w-full min-w-0 max-w-[340px] lg:max-w-none"
        >
          <div className="relative overflow-hidden rounded-md border border-line bg-ink-2">
            <img
              src="/me.webp"
              alt="Portrait of Patrick Olamide"
              width={960}
              height={1200}
              className="aspect-[4/5] w-full object-cover object-center saturate-[0.92] contrast-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/5 to-transparent" />
            <span aria-hidden className="absolute left-3 top-3 size-3 border-l border-t border-accent/70" />
            <span aria-hidden className="absolute right-3 top-3 size-3 border-r border-t border-accent/70" />
            <span aria-hidden className="absolute bottom-3 left-3 size-3 border-b border-l border-accent/70" />
            <span aria-hidden className="absolute bottom-3 right-3 size-3 border-b border-r border-accent/70" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-end p-4">
              <span className="mono-label text-paper/50">Portrait / 2026</span>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-4 hidden border border-line bg-ink px-4 py-3 sm:block">
            <p className="mono-label text-[10px]">Most recently</p>
            <p className="mt-1 text-sm">
              Flota Tech <span className="text-muted">· Full-stack</span>
            </p>
          </div>

          <span className="absolute -right-8 top-0 hidden font-mono text-[10px] uppercase tracking-[0.3em] text-muted [writing-mode:vertical-rl] xl:block">
            Interfaces / Systems
          </span>
        </motion.figure>
      </div>

      <div className="shell relative mt-16 hidden items-center gap-2 md:flex">
        <ArrowDown className="size-3.5 text-muted" aria-hidden />
        <span className="mono-label">Scroll for selected work</span>
      </div>
    </section>
  );
}
