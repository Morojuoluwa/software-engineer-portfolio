import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Menu, X as CloseIcon } from "lucide-react";
import { profile } from "../data/content";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          scrolled || open ? "border-b border-line bg-ink/85 backdrop-blur-xl" : "border-b border-transparent"
        }`}
      >
        <div className="shell flex h-20 items-center justify-between">
          <a href="#top" className="group flex items-center gap-3">
            <span aria-hidden className="grid size-8 place-items-center border border-line bg-accent font-mono text-[11px] font-semibold tracking-wider text-ink transition-transform duration-300 group-hover:-rotate-6">
              PO
            </span>
            <span className="text-sm font-medium tracking-tight text-paper">Patrick Olamide</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted transition-colors duration-200 hover:text-paper"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="hidden items-center gap-2 border border-line px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-paper transition-colors duration-200 hover:border-accent hover:text-accent sm:flex"
            >
              Let&apos;s talk
              <ArrowUpRight className="size-3.5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="grid size-10 place-items-center border border-line text-paper md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <CloseIcon className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-x-0 top-20 bottom-0 z-30 overflow-y-auto bg-ink md:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.nav
              className="shell flex flex-col py-8"
              aria-label="Mobile"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
              }}
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 18 } },
                  }}
                  className="flex items-center justify-between border-b border-line py-5 text-3xl font-medium tracking-tight"
                >
                  {link.label}
                  <ArrowUpRight className="size-5 text-muted" />
                </motion.a>
              ))}
            </motion.nav>
            <div className="shell mt-8 flex flex-col gap-3 pb-16">
              <a
                href={`mailto:${profile.email}`}
                onClick={() => setOpen(false)}
                className="bg-accent px-5 py-4 text-center font-mono text-xs tracking-[0.08em] text-ink"
              >
                {profile.email}
              </a>
              <div className="flex gap-3">
                {Object.entries(profile.links).map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 border border-line py-3 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-muted"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
