import { motion } from "framer-motion";
import { profile, skills } from "../../data/content";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";
import SectionHeading from "../ui/SectionHeading";
import SkillPill from "../ui/SkillPill";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="About" title="A little about me" />

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-5"
          >
            {profile.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-charcoal-soft">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-wrap content-start gap-3"
          >
            {skills.map((skill) => (
              <SkillPill key={skill} label={skill} />
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
