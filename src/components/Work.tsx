import { ArrowUpRight } from "lucide-react";
import { flagshipProjects, type Project } from "../data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function StackChips({ stack }: { stack: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {stack.map((tech) => (
        <span
          key={tech}
          className="border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

function FlagshipCard({ project, wide = false }: { project: Project; wide?: boolean }) {
  const featured = project.featured || wide;

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className={`group relative grid overflow-hidden rounded-lg border border-line bg-ink-2/50 transition-colors duration-300 hover:border-accent/40 ${
        featured ? "lg:grid-cols-[1.1fr_0.9fr]" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          featured ? "aspect-[16/10] lg:aspect-auto lg:min-h-[460px]" : "aspect-[16/10]"
        }`}
      >
        <img
          src={project.image}
          alt={`${project.name} website`}
          loading={project.featured ? "eager" : "lazy"}
          className="absolute inset-0 size-full object-cover object-top transition-transform duration-[900ms] ease-out-expo group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 border border-paper/15 bg-ink/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-paper/85 backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className={`flex flex-col justify-between gap-8 p-6 md:p-8 ${featured ? "lg:p-10" : ""}`}>
        <div>
          <div className="flex items-center justify-between">
            <span className="mono-label">{project.index}</span>
            <span className="mono-label flex items-center gap-2 text-paper/60">
              <span
                className={`size-1.5 rounded-full ${project.internal ? "bg-accent/80" : "bg-emerald-400/80"}`}
                aria-hidden
              />
              {project.internal ? "Staff only" : "Live"}
            </span>
          </div>
          <h3
            className={`mt-6 font-medium tracking-[-0.03em] ${
              featured ? "text-3xl md:text-4xl" : "text-2xl"
            }`}
          >
            {project.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{project.tagline}</p>
          {featured && (
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">{project.description}</p>
          )}
        </div>

        <div>
          <StackChips stack={project.stack} />
          <div className="mt-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-paper/80 transition-colors duration-200 group-hover:text-accent">
            {project.internal ? "View staff portal" : "Visit site"}
            <ArrowUpRight className="size-3.5 transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </a>
  );
}

const gridProjects = flagshipProjects.slice(1);

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 py-20 md:py-28">
      <div className="shell">
        <Reveal>
          <SectionHeading
            index="01 — Selected work"
            title="Products, not prototypes."
            description="Fintech platforms for payments, remittances and lending — designed, built and shipped end to end."
          />
        </Reveal>

        <div className="mt-12 space-y-5">
          <Reveal>
            <FlagshipCard project={flagshipProjects[0]} />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {gridProjects.map((project, index) => {
              const orphan = gridProjects.length % 2 === 1 && index === gridProjects.length - 1;
              return (
                <Reveal key={project.name} delay={index * 0.08} className={orphan ? "md:col-span-2" : undefined}>
                  <FlagshipCard project={project} wide={orphan} />
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
