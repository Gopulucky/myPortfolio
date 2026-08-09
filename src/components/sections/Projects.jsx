import { motion } from "framer-motion";
import { profile, projects } from "../../data/content";
import { staggerContainer, viewportOnce } from "../../lib/motion";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";

export default function Projects({ reducedMotion }) {
  return (
    <section id="projects" className="scroll-mt-24 bg-ivory-dim py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Work"
          title="Selected projects"
          description="A few things I've built and shipped — a 3D commerce marketplace, a real-time platform, an ML geospatial pipeline, and more. Every link below is real."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} reducedMotion={reducedMotion} />
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-charcoal/20 px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:border-terracotta hover:text-terracotta"
          >
            View full project archive on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
