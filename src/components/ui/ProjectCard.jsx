import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { fadeUp } from "../../lib/motion";
import { GithubIcon, ExternalLinkIcon } from "./Icons";

export default function ProjectCard({ project, reducedMotion }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 15 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 15 });

  function handleMouseMove(event) {
    if (reducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(((event.clientX - rect.left) / rect.width - 0.5) * 0.08);
    y.set(((event.clientY - rect.top) / rect.height - 0.5) * 0.08);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.article
      variants={fadeUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: reducedMotion ? 0 : rotateX,
        rotateY: reducedMotion ? 0 : rotateY,
        transformPerspective: 800,
      }}
      className="project-row"
    >
      <div className="project-identity">
        <h3>{project.title}</h3>
        {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
      </div>
      <div className="project-detail">
        <p className="project-description">{project.description}</p>
        {project.highlight && <p className="project-highlight">{project.highlight}</p>}
        <ul className="project-tech">
          {project.tech.map((tech) => <li key={tech}>{tech}</li>)}
        </ul>
      </div>
        <div className="project-links">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="text-link"
          >
            <GithubIcon className="h-5 w-5" />
            Source
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live site`}
              className="text-link"
            >
              <ExternalLinkIcon className="h-5 w-5" />
              Live site
            </a>
          )}
        </div>
    </motion.article>
  );
}
