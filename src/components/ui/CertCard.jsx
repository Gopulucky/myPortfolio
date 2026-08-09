import { motion } from "framer-motion";
import { fadeUp } from "../../lib/motion";
import { FileTextIcon } from "./Icons";

export default function CertCard({ cert }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group flex flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-white/60 transition-shadow hover:shadow-lg hover:border-terracotta/40"
    >
      <div className="aspect-[4/3] overflow-hidden bg-ivory-dim">
        <img
          src={cert.image}
          alt={cert.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-base font-semibold leading-snug text-charcoal">{cert.title}</h3>
        <span className="text-sm text-charcoal-soft">{cert.issuer}</span>
        <a
          href={cert.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-moss transition-colors hover:text-moss-dark"
        >
          <FileTextIcon className="h-4 w-4" />
          View PDF
        </a>
      </div>
    </motion.article>
  );
}
