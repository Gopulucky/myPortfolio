import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile, navLinks } from "../../data/content";
import { GithubIcon, LinkedinIcon, MenuIcon, CloseIcon, FileTextIcon } from "../ui/Icons";

export default function Navbar({ reducedMotion }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleNavClick(event, href) {
    event.preventDefault();
    setOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
    }
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
        scrolled ? "border-charcoal/10 bg-ivory/85 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="text-xl font-semibold tracking-tight text-charcoal"
        >
          {profile.initials}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-charcoal-soft transition-colors hover:text-terracotta"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-charcoal-soft transition-colors hover:text-terracotta"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-charcoal-soft transition-colors hover:text-terracotta"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-charcoal px-4 py-2 text-sm font-medium text-ivory transition-colors hover:bg-terracotta"
          >
            <FileTextIcon className="h-4 w-4" />
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="text-charcoal md:hidden"
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-charcoal/10 bg-ivory md:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="rounded-lg px-2 py-2.5 text-base font-medium text-charcoal transition-colors hover:bg-terracotta/10 hover:text-terracotta"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex items-center gap-5 border-t border-charcoal/10 px-2 pt-4">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                  <GithubIcon className="h-5 w-5 text-charcoal-soft" />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                  <LinkedinIcon className="h-5 w-5 text-charcoal-soft" />
                </a>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto inline-flex items-center gap-2 rounded-full bg-charcoal px-4 py-2 text-sm font-medium text-ivory"
                >
                  <FileTextIcon className="h-4 w-4" />
                  Resume
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
