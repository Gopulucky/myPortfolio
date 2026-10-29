import { motion } from "framer-motion";
import { profile, projects } from "../../data/content";
import { staggerContainer, viewportOnce } from "../../lib/motion";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";

export default function Projects({ reducedMotion }) {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <SectionHeading
          eyebrow="Work"
          title="Selected projects"
          description="A few things I've built and shipped — a 3D commerce marketplace, a real-time platform, an ML geospatial pipeline, a drone-video-to-3D reconstruction system, and more. Every link below is real."
        />

        <motion.div
          variants={staggerContainer}
          initial={false}
          whileInView="visible"
          viewport={viewportOnce}
          className="project-index"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} reducedMotion={reducedMotion} />
          ))}
        </motion.div>

        <div className="archive-link">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Full project archive on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
