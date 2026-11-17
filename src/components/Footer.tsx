import { ArrowUp } from "lucide-react";
import { profile } from "../data/content";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
        <p className="mono-label text-paper/60">© 2026 {profile.name}</p>
        <p className="mono-label text-paper/55">Built with React, TypeScript and Tailwind</p>
        <a
          href="#top"
          className="group mono-label flex items-center gap-2 transition-colors duration-200 hover:text-paper"
        >
          Back to top
          <ArrowUp className="size-3.5 transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5" />
        </a>
      </div>
    </footer>
  );
}
