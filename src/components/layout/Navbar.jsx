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
      className={`site-header ${scrolled ? "is-scrolled" : ""}`}
    >
      <div className="container nav-inner">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="wordmark"
          aria-label="Gopu Hardik, home"
        >
          {profile.initials}
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`nav-link ${link.href === "#contact" ? "nav-contact" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="desktop-nav nav-extras">
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
            className="nav-link nav-resume"
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
          className="menu-toggle"
          aria-controls="mobile-menu"
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: reducedMotion ? 0 : 0.25, ease: "easeInOut" }}
            className="mobile-menu"
            id="mobile-menu"
          >
            <nav className="container mobile-nav" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="nav-link"
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
                  className="nav-link ml-auto"
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
