import { motion } from "framer-motion";
import { fadeUp } from "../../lib/motion";
import { FileTextIcon } from "./Icons";

export default function CertCard({ cert }) {
  return (
    <motion.article
      variants={fadeUp}
      className="certification-item"
    >
      <div className="certification-image">
        <img
          src={cert.image}
          alt={cert.title}
          loading="lazy"
          width="800"
          height="600"
        />
      </div>
      <div className="certification-copy">
        <h3>{cert.title}</h3>
        <p>{cert.issuer}</p>
        <a
          href={cert.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          <FileTextIcon className="h-4 w-4" />
          View PDF
        </a>
      </div>
    </motion.article>
  );
}
