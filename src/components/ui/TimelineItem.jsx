import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../lib/motion";

export default function TimelineItem({ item }) {
  return (
    <motion.div
      variants={fadeUp}
      initial={false}
      whileInView="visible"
      viewport={viewportOnce}
      className="experience-item"
    >
      <h3>{item.title}</h3>
      <p className="experience-date">{item.date}</p>
      <p className="experience-org">{item.org}</p>
      <p className="experience-description">{item.description}</p>
    </motion.div>
  );
}
