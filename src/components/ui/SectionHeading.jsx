import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../lib/motion";

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      variants={fadeUp}
      initial={false}
      whileInView="visible"
      viewport={viewportOnce}
      className="section-heading"
    >
      <h2>{eyebrow === "About" ? "About" : title}</h2>
      {description && <p className="section-description">{description}</p>}
    </motion.div>
  );
}
