import { MotionConfig } from "framer-motion";
import usePrefersReducedMotion from "./hooks/usePrefersReducedMotion";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Certifications from "./components/sections/Certifications";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

export default function App() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <MotionConfig reducedMotion="user">
      <Navbar reducedMotion={reducedMotion} />
      <main>
        <Hero reducedMotion={reducedMotion} />
        <Projects reducedMotion={reducedMotion} />
        <About />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
