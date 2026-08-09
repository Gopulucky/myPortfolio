import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../lib/motion";

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="mb-12 max-w-2xl"
    >
      {eyebrow && (
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-terracotta">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-base text-charcoal-soft">{description}</p>}
    </motion.div>
  );
}
