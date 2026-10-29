# Portfolio audit and redesign

Audited and redesigned on 29 October 2026 with Hallmark v2.0.0.

## Audit of the original website

The audience is recruiters assessing Gopu Hardik's engineering work. The main action is contacting him. The existing warm palette, detailed project descriptions, real project links, and certification documents are useful material to preserve.

The largest design problems were the oversized decorative 3D object, projects arriving after biography, experience, and certifications, and three competing hero actions. Equal project cards concealed the relative importance of project titles, descriptions, and outcomes. Repeated small uppercase labels and identical section treatments weakened the hierarchy.

The rendered baseline reported **14 Floor failures, 8 Reflex findings, and 5 warnings**. This baseline excludes Hallmark's own stamp requirement for an existing website. Counts are lint findings, not an accessibility certification.

| Priority | Original source location | Finding | Lightest useful change |
| --- | --- | --- | --- |
| High | `src/components/sections/Hero.jsx:11` | Oversized decorative visual, full-screen sizing, three competing actions | Restyle can improve scale; a full redesign makes work and contact the priority |
| High | `src/App.jsx:23` | Projects follow the certification section | Full redesign to put the work directly below the hero |
| High | `src/index.css:1` | No authored keyboard focus treatment | Polish: immediate, high-contrast focus outlines |
| High | `src/components/sections/Hero.jsx:14` | Terracotta text and buttons measured 3.95:1 in several places | Polish: deepen the text/button terracotta |
| Medium | `src/components/ui/ProjectCard.jsx:38` | Equal boxed cards and a final orphan row make projects harder to scan | Full redesign: ruled project rows and explicit source/live links |
| Medium | `src/components/ui/SectionHeading.jsx:14` | Repeated uppercase, letter-spaced eyebrows | Polish: put the subject in the heading |
| Medium | `src/components/layout/Navbar.jsx:98` | Mobile menu animates height | Polish: animate opacity and vertical translation instead |
| Medium | `src/components/ui/CertCard.jsx:12` | Certificate previews are cropped and scale on hover | Polish: contain the full image and keep it still |
| Medium | `public/resume.html:272` | Rounded fixed print button can crowd a narrow screen; transition targets all properties | Polish: responsive placement and explicit background transition |

The original résumé already had a useful print layout and direct Download PDF behavior. Its structure, wording, links, and print settings were worth retaining.

## Implemented design

The homepage is now an editorial portfolio with large Georgia headings over the original self-hosted Inter body text. Ivory, charcoal, moss, and terracotta remain; terracotta used for text and buttons is deeper for contrast. Shared roles and sizes live in `src/tokens.css`, with base accessibility rules in `src/base.css`.

The reading order is hero, selected projects, about, experience and education, certifications, contact, and footer. All six original section ids and both page paths remain. Project rows keep all seven projects, their descriptions, benchmark claims, technology lists, source URLs, and live destinations. The six certificate images remain visible in full rather than cropped, with their original PDF links.

Contact is the sole filled primary action style. The existing 3D scene remains at a supporting scale and has a pause/play control. It stops under reduced motion and when outside the viewport. The résumé received matching display type, keyboard focus styles, and a responsive screen layout; its printable content is unchanged.

No files, routes, or component trees were deleted. The two pre-existing untracked PDFs were not modified. `src/data/content.js`, the framework, dependencies, and lockfile were not changed.

## Validation

| Check | Result |
| --- | --- |
| Hallmark before → after | 14 → 0 Floor failures; 8 → 0 unresolved Reflex findings |
| Hallmark warnings | 0 open; below-fold certificate lazy loading explicitly dismissed |
| Preserved inventory | 35/35 links, 5/5 existing handlers, 6/6 recorded figures |
| Headings | 19/21 exact matches; two heading changes recorded below |
| Source-content verification | Every profile, biography, skill, timeline, project, and certification value renders |
| Local assets | Résumé and all twelve certificate assets return HTTP 200 |
| Responsive checks | No horizontal scrolling at 320, 375, 768, 1024, 1280, 1440, or 1920 pixels |
| Behavior checks | Mobile navigation, contact scroll position, pause/play, reduced motion, résumé print action, and no-JavaScript contact/résumé fallback pass |
| Browser errors | None during the interaction checks |
| Project checks | `npm.cmd run build`, `npm.cmd run lint`, and `git diff --check` pass |

The retained copy exceeds Hallmark's preferred screen word budget: 194 words in its densest desktop screen and three original text blocks before the hero actions. These remain explicit notes under the redesign's content-preservation policy. No facts were cut to lower that count.

Visual review ran in-thread, using desktop and phone screenshots. The old site gave certificate previews more area; the new smaller previews show the full certificate and retain direct PDF access. Print-specific résumé typography remains deliberately denser than the marketing page. External project deployments and the supplied performance/benchmark claims were preserved, not independently verified.

## Copy adjustments

- “A little about me” became “About”; its existing eyebrow supplied the heading.
- “Let's build something together” became “Get in touch”; its existing eyebrow supplied the heading.
- “View full project archive on GitHub” became “Full project archive on GitHub” to fit narrow screens.
- Redundant “Work”, “Journey”, and “Credentials” eyebrows were removed.
- The footer's separator was replaced by spacing, and the contact paragraph uses a typographic apostrophe.
- Source and Live site text labels were added to the existing project links. The email address, existing tagline, playback controls, and no-script fallback expose existing facts and actions.

## Preview and material

With the dev server running, open `http://127.0.0.1:5173/`. The generated `.hallmark/compare.html` shows desktop and phone before/after screenshots. Fresh viewport previews are in `.hallmark/previews/`.

No placeholder images or unfilled material slots were introduced. The most useful future addition is a supplied screenshot of 3DVerse or aerotwin that demonstrates the actual product, ideally at least 1600 pixels wide. The current redesign deliberately uses the existing assets.
