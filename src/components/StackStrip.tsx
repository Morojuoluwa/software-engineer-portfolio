import { stackStrip } from "../data/content";

export function StackStrip() {
  return (
    <section aria-label="Core technologies" className="border-y border-line bg-ink-2/40">
      <div className="marquee relative overflow-hidden py-5">
        <div className="marquee-track flex w-max items-center">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className="flex items-center gap-10 pr-10"
            >
              {stackStrip.map((tech) => (
                <span key={tech} className="flex items-center gap-10">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">{tech}</span>
                  <span className="size-1 rounded-full bg-accent/60" aria-hidden />
                </span>
              ))}
            </div>
          ))}
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-ink to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-ink to-transparent" />
      </div>
    </section>
  );
}
