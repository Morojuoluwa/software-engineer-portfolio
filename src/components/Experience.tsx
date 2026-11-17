import { experience } from "../data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-line py-20 md:py-28">
      <div className="shell">
        <Reveal>
          <SectionHeading
            index="02 — Experience"
            title="Four years, three teams."
            description="From front-end systems to the APIs and databases behind them, across exchanges, remittances, lending and payments."
          />
        </Reveal>

        <div className="mt-12 border-b border-line">
          {experience.map((job, index) => (
            <Reveal key={job.company} delay={index * 0.06}>
              <article className="grid gap-4 border-t border-line py-8 md:grid-cols-[200px_1fr] md:gap-10 md:py-10">
                <p className="mono-label pt-1.5 text-paper/60">{job.period}</p>

                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className="text-xl font-medium tracking-tight">
                      {job.role} <span className="text-muted">at</span> {job.company}
                    </h3>
                    <span className="mono-label">{job.location}</span>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span className="mt-[9px] size-1 shrink-0 rounded-full bg-accent/70" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <span
                        key={tech}
                        className="border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
