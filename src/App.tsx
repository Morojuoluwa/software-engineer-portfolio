import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { StackStrip } from "./components/StackStrip";
import { Work } from "./components/Work";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest focus:text-ink"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <StackStrip />
        <Work />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
