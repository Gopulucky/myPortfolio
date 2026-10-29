import { motion } from "framer-motion";
import { fadeUp } from "../../lib/motion";

export default function SkillPill({ label }) {
  return (
    <motion.li
      variants={fadeUp}
      className="skill-item"
    >
      {label}
    </motion.li>
  );
}
