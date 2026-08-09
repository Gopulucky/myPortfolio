import { motion } from "framer-motion";
import { certifications } from "../../data/content";
import { staggerContainer, viewportOnce } from "../../lib/motion";
import SectionHeading from "../ui/SectionHeading";
import CertCard from "../ui/CertCard";

export default function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Credentials" title="Certifications" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {certifications.map((cert) => (
            <CertCard key={cert.id} cert={cert} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
