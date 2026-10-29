import { motion } from "framer-motion";
import { certifications } from "../../data/content";
import { staggerContainer, viewportOnce } from "../../lib/motion";
import SectionHeading from "../ui/SectionHeading";
import CertCard from "../ui/CertCard";

export default function Certifications() {
  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        <SectionHeading eyebrow="Credentials" title="Certifications" />

        <motion.div
          variants={staggerContainer}
          initial={false}
          whileInView="visible"
          viewport={viewportOnce}
          className="certification-grid"
        >
          {certifications.map((cert) => (
            <CertCard key={cert.id} cert={cert} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
