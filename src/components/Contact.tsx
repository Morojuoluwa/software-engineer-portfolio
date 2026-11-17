import { ArrowUpRight, Download, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "../data/content";
import { CopyEmail } from "./CopyEmail";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function XLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

function GithubLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12Z" />
    </svg>
  );
}

function LinkedinLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

const socials = [
  { label: "GitHub", handle: "Morojuoluwa", href: profile.links.github, Icon: GithubLogo },
  { label: "LinkedIn", handle: "patrick-morojuoluwa", href: profile.links.linkedin, Icon: LinkedinLogo },
  { label: "X", handle: "@Amorojuoluwa", href: profile.links.x, Icon: XLogo },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-line py-20 md:py-28">
      <div className="shell">
        <Reveal>
          <SectionHeading
            index="04 — Contact"
            title="Have something to ship?"
            description="Open to full-stack, frontend and backend roles — remote, or on-site in Lagos."
          />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal>
            <div>
              <p className="max-w-xl text-lg leading-relaxed text-paper/85 md:text-xl">
                Tell me what you&apos;re building. If it needs an interface, an API, or both, I&apos;d like to
                hear about it.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2 bg-accent px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink transition-colors duration-200 hover:bg-accent-2"
                >
                  <Mail className="size-3.5" />
                  Email me
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href={profile.cv}
                  download
                  className="inline-flex items-center gap-2 border border-line px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.14em] text-paper transition-colors duration-200 hover:border-paper/40"
                >
                  <Download className="size-3.5 text-muted" />
                  Download CV
                </a>
              </div>

              <div className="mt-12 border-t border-line">
                {socials.map(({ label, handle, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-4 border-b border-line py-4"
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="size-4 text-muted transition-colors duration-200 group-hover:text-accent" />
                      <span className="text-sm text-paper">{label}</span>
                      <span className="mono-label hidden text-paper/35 sm:inline">{handle}</span>
                    </span>
                    <ArrowUpRight className="size-4 text-muted transition duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="min-w-0 self-start">
            <div className="rounded-lg border border-line bg-ink-2/60 p-6 md:p-7">
              <p className="mono-label">Direct</p>
              <div className="mt-4">
                <CopyEmail email={profile.email} />
              </div>

              <div className="mt-6 space-y-4 border-t border-line pt-6">
                <a
                  href={`tel:${profile.phoneHref}`}
                  className="group flex items-center gap-3 text-sm text-muted transition-colors duration-200 hover:text-paper"
                >
                  <Phone className="size-4 text-paper/40 transition-colors group-hover:text-accent" />
                  {profile.phone}
                </a>
                <p className="flex items-center gap-3 text-sm text-muted">
                  <MapPin className="size-4 text-paper/40" />
                  {profile.location}
                </p>
                <p className="flex items-center gap-3 text-sm text-muted">
                  <span className="relative flex size-4 items-center justify-center">
                    <span className="absolute inline-flex size-2 animate-ping rounded-full bg-emerald-400/50" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
                  </span>
                  {profile.availability}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
