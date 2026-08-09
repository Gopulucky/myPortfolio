import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../lib/motion";

export default function TimelineItem({ item }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="relative pb-10 pl-8 last:pb-0"
    >
      <span className="absolute left-0 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-moss bg-ivory" />
      <span className="absolute left-0 top-4 bottom-0 w-px -translate-x-1/2 bg-charcoal/15 last:hidden" />

      <span className="text-sm font-medium text-moss">{item.date}</span>
      <h3 className="mt-1 text-lg font-semibold text-charcoal">{item.title}</h3>
      <span className="text-sm text-charcoal-soft">{item.org}</span>
      <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">{item.description}</p>
    </motion.div>
  );
}
