import { skillGroups } from "../data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-line py-20 md:py-28">
      <div className="shell">
        <Reveal>
          <SectionHeading
            index="03 — Toolkit"
            title="The stack I reach for."
            description="Typed front ends, pragmatic APIs and relational data — everything it takes to ship the whole product."
          />
        </Reveal>

        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.label} delay={index * 0.05}>
              <div>
                <div className="flex items-center justify-between border-b border-line pb-3">
                  <p className="mono-label text-paper/70">{group.label}</p>
                  <span className="mono-label text-paper/55">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <ul className="mt-2">
                  {group.items.map((item) => (
                    <li key={item} className="border-b border-line/60 py-2 text-sm text-paper/85">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
