import { lazy, Suspense, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { profile } from "../../data/content";
import { fadeUp, staggerContainer } from "../../lib/motion";
import { GithubIcon, LinkedinIcon, ChevronDownIcon, FileTextIcon } from "../ui/Icons";

const HeroScene = lazy(() => import("../../scenes/HeroScene"));

export default function Hero({ reducedMotion }) {
  const [paused, setPaused] = useState(false);
  const sceneRef = useRef(null);
  const sceneVisible = useInView(sceneRef);
  return (
    <section id="hero" className="hero">
      <div className="container intro-layout">
        <motion.div variants={staggerContainer} initial={false} animate="visible" className="intro-copy">
          <motion.h1
            variants={fadeUp}
            className="display-name"
          >
            {profile.name}
          </motion.h1>
          <motion.p variants={fadeUp} className="hero-role">{profile.role}</motion.p>
          <motion.p variants={fadeUp} className="hero-description">
            {profile.heroDescription}
          </motion.p>

          <motion.div variants={fadeUp} className="hero-actions">
            <a
              href="#projects"
              className="text-link hero-work-link"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="button button-primary"
            >
              Contact me
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link hero-resume-link"
            >
              <FileTextIcon className="h-4 w-4" />
              Resume
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="hero-socials">
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

        <div className="hero-art">
          <div className="hero-canvas" aria-hidden="true" ref={sceneRef}>
          <Suspense fallback={<div className="h-full w-full" />}>
            <HeroScene reducedMotion={reducedMotion || paused || !sceneVisible} />
          </Suspense>
          </div>
          <button type="button" className="scene-control text-link" aria-pressed={paused} onClick={() => setPaused((value) => !value)} disabled={reducedMotion}>
            {reducedMotion ? "Motion reduced" : paused ? "Play 3D animation" : "Pause 3D animation"}
          </button>
        </div>
        <div className="hero-foot">
          <p>{profile.tagline}</p>
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="hero-about-link text-link"
      >
        About me <ChevronDownIcon className="h-4 w-4" />
      </a>
        </div>
      </div>
    </section>
  );
}
