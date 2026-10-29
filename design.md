# Design: Gopu Hardik portfolio

Shared design system for the homepage and its printable résumé companion.

## System

- Genre: editorial.
- Homepage shape: Portfolio Index, with work immediately after the introduction.
- Theme: existing brand palette; restrained serif editorial typography.
- Surfaces: ivory paper, warm secondary paper, charcoal ink.
- Accent: terracotta for actions; moss for project results and focus rings.
- Homepage action: contact Gopu Hardik.

## Tokens

`src/tokens.css` is the source of truth for the React website.

- Paper: `--color-paper` and `--color-paper-2`.
- Text: `--color-ink` and `--color-ink-2`.
- Actions: `--color-accent`, `--color-accent-ink`, `--color-focus`.
- Display: Georgia, with Times New Roman and serif fallbacks.
- Body: self-hosted Inter Variable, with system sans fallbacks.
- Main container: 1440px including responsive gutters.
- Homepage headings: large, regular-weight serif, left aligned.
- Spacing, sizes, easing, and layer values are declared with the tokens.

## Controls

- Primary: deep terracotta fill, ivory text, 3px corners, minimum 48px height.
- Secondary: underlined text links with clear hover feedback.
- Keyboard focus: an immediate moss outline with visible offset.
- The mobile navigation disclosure retains all original destinations.

## Motion

- Content starts visible; there are no scroll-dependent opacity reveals.
- The existing 3D scene has pause/play, reduced-motion, and offscreen behavior.
- Menu transitions use opacity and translation.

## Résumé variant

`public/resume.html` remains standalone and printable. It uses the same display/body pairing and warm palette, with its existing A4 layout and denser document typography. Screen-only responsive rules do not replace print settings. Its body content, links, and print action remain intact.

## Exports

The framework styles import `src/tokens.css` and `src/base.css` through `src/index.css`. No additional font dependency or remote font request was added to the homepage. The résumé retains its existing Google Fonts link.
