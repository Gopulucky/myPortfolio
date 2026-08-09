import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { profile } from "../../data/content";
import { fadeUp, staggerContainer } from "../../lib/motion";
import { GithubIcon, LinkedinIcon, ChevronDownIcon, FileTextIcon } from "../ui/Icons";

const HeroScene = lazy(() => import("../../scenes/HeroScene"));

export default function Hero({ reducedMotion }) {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.p variants={fadeUp} className="mb-4 text-sm font-semibold uppercase tracking-wider text-terracotta">
            {profile.role}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-4xl font-semibold tracking-tight text-charcoal sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-5 max-w-lg text-lg leading-relaxed text-charcoal-soft">
            {profile.heroDescription}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center rounded-full bg-terracotta px-6 py-3 text-sm font-medium text-ivory transition-colors hover:bg-terracotta-dark"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-charcoal/20 px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:border-terracotta hover:text-terracotta"
            >
              Contact me
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-charcoal/20 px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:border-terracotta hover:text-terracotta"
            >
              <FileTextIcon className="h-4 w-4" />
              Resume
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-charcoal-soft transition-colors hover:text-terracotta"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-charcoal-soft transition-colors hover:text-terracotta"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>

        <div className="relative h-[320px] sm:h-[420px] md:h-[480px]">
          <Suspense fallback={<div className="h-full w-full" />}>
            <HeroScene reducedMotion={reducedMotion} />
          </Suspense>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-charcoal-soft transition-colors hover:text-terracotta"
      >
        <ChevronDownIcon className="h-6 w-6 animate-bounce motion-reduce:animate-none" />
      </a>
    </section>
  );
}
