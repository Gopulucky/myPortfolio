import { motion } from "framer-motion";
import { profile, skills } from "../../data/content";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";
import SectionHeading from "../ui/SectionHeading";
import SkillPill from "../ui/SkillPill";

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <SectionHeading eyebrow="About" title="A little about me" />

        <div className="about-layout">
          <motion.div
            variants={fadeUp}
            initial={false}
            whileInView="visible"
            viewport={viewportOnce}
            className="about-prose"
          >
            {profile.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.ul
            variants={staggerContainer}
            initial={false}
            whileInView="visible"
            viewport={viewportOnce}
            className="skills-list"
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
