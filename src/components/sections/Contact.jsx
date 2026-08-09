import { motion } from "framer-motion";
import { profile } from "../../data/content";
import { fadeUp, viewportOnce } from "../../lib/motion";
import { GithubIcon, LinkedinIcon, MailIcon } from "../ui/Icons";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-28">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto max-w-2xl px-6 text-center"
      >
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-terracotta">
          Get in touch
        </span>
        <h2 className="text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
          Let's build something together
        </h2>
        <p className="mt-4 text-base text-charcoal-soft">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox
          is always open.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-terracotta px-8 py-4 text-base font-medium text-ivory transition-colors hover:bg-terracotta-dark"
        >
          <MailIcon className="h-5 w-5" />
          Say hello
        </a>

        <div className="mt-10 flex items-center justify-center gap-6">
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
      </motion.div>
    </section>
  );
}
