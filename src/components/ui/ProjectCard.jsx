import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { fadeUp } from "../../lib/motion";
import { FolderIcon, GithubIcon, ExternalLinkIcon } from "./Icons";

export default function ProjectCard({ project, reducedMotion }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 15 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 15 });

  function handleMouseMove(event) {
    if (reducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
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
      className="flex flex-col rounded-2xl border border-charcoal/10 bg-white/60 p-6 shadow-sm transition-shadow hover:shadow-lg hover:border-terracotta/40"
    >
      <div className="mb-4 flex items-center justify-between">
        <FolderIcon className="h-7 w-7 text-terracotta" />
        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="text-charcoal-soft transition-colors hover:text-terracotta"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live site`}
              className="text-charcoal-soft transition-colors hover:text-terracotta"
            >
              <ExternalLinkIcon className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-lg font-semibold text-charcoal">{project.title}</h3>
      {project.subtitle && <p className="mt-0.5 text-sm font-medium text-terracotta">{project.subtitle}</p>}
      <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal-soft">{project.description}</p>

      {project.highlight && (
        <p className="mt-3 border-l-2 border-moss/50 pl-3 text-xs font-medium text-moss-dark">{project.highlight}</p>
      )}

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <li key={tech} className="rounded-full bg-moss/10 px-3 py-1 text-xs font-medium text-moss-dark">
            {tech}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
