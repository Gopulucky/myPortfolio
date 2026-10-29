import { motion } from "framer-motion";
import { profile } from "../../data/content";
import { fadeUp, viewportOnce } from "../../lib/motion";
import { GithubIcon, LinkedinIcon, MailIcon } from "../ui/Icons";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <motion.div
        variants={fadeUp}
        initial={false}
        whileInView="visible"
        viewport={viewportOnce}
        className="container contact-layout"
      >
        <h2>Get in touch</h2>
        <div className="contact-details">
        <p>
          I’m currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox
          is always open.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="button button-primary"
        >
          <MailIcon className="h-5 w-5" />
          Say hello
        </a>

        <a className="contact-email text-link" href={`mailto:${profile.email}`}>{profile.email}</a>
        <div className="contact-socials">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-charcoal-soft transition-colors hover:text-terracotta"
          >
            <GithubIcon className="h-6 w-6" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-charcoal-soft transition-colors hover:text-terracotta"
          >
            <LinkedinIcon className="h-6 w-6" />
          </a>
        </div>
        </div>
      </motion.div>
    </section>
  );
}
