import { motion } from "framer-motion";
import { fadeUp } from "../../lib/motion";

export default function SkillPill({ label }) {
  return (
    <motion.li
      variants={fadeUp}
      className="rounded-full border border-charcoal/15 bg-white/60 px-4 py-2 text-sm font-medium text-charcoal transition-colors hover:border-terracotta/50 hover:text-terracotta"
    >
      {label}
    </motion.li>
  );
}
