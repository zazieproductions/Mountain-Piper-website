# Design system

The visual language of the site: an editorial, heritage-adjacent palette built around Highland
green and antique gold, with sharp edges rather than rounded cards.

- [Colour](#colour)
- [Typography](#typography)
- [Layout and spacing](#layout-and-spacing)
- [Breakpoints](#breakpoints)
- [Components](#components)
- [Motion](#motion)
- [Accessibility contract](#accessibility-contract)
- [Conventions when adding UI](#conventions-when-adding-ui)

---

## Colour

Defined as custom properties on `:root` in `src/index.css`. Use the tokens, never raw hex.

| Token | Value | Use |
|---|---|---|
| `--forest-deep` | `#09261f` | Header, footer, hero, dark sections |
| `--forest` | `#12362c` | Secondary dark surfaces, green buttons |
| `--forest-mid` | `#19483b` | Gradient stops, hover states |
| `--cream` | `#f5f1e8` | Page background, text on dark |
| `--paper` | `#ebe5d9` | Alternate light sections |
| `--gold` | `#c99a45` | Accent, focus ring, dark-on-light gold |
| `--gold-bright` | `#e1b964` | Primary CTA, text on dark |
| `--wine` | `#7e2e35` | Occasional highlight |
| `--ink` | `#172820` | Body text on light |
| `--muted` | `#607068` | Secondary text on light |
| `--focus` | `#c99a45` | `:focus-visible` outline |
| `--max-w` | `1180px` | Content column width |

Two values are used outside the token block and are worth knowing about: `#e6c781` and `#e0ba6f`
(warm gold variants for hero `<em>` text and eyebrow labels on dark), and `#8d652c` (a dark gold
for eyebrows on light). If you touch the palette, keep these in step.

### Contrast

Measured against the tokens above:

| Foreground | Background | Ratio | Verdict |
|---|---|---:|---|
| `--cream` | `--forest-deep` | **14.24 : 1** | AAA |
| `--ink` | `--cream` | **13.69 : 1** | AAA |
| `--gold-bright` | `--forest-deep` | **8.65 : 1** | AAA |
| `--gold` | `--forest-deep` | **6.26 : 1** | AA |
| `--muted` | `--cream` | **4.64 : 1** | AA |

`--muted` on `--cream` is the tightest pairing in the system at 4.64 : 1. It clears AA for body
text but has little headroom — do not use it below ~14 px.

## Typography

Two families, loaded from Google Fonts with `preconnect` and `display=swap`:

| Family | Role | Fallback |
|---|---|---|
| **Libre Caslon Display** | All display type — `h1`, section `h2`, brand wordmark, pull quotes | `Georgia, serif` |
| **DM Sans** (400/500/600/700) | Everything else, including UI and body | `system-ui, -apple-system, sans-serif` |

Display headings share one rule:

```css
font-family: 'Libre Caslon Display', Georgia, serif;
font-weight: 400;
letter-spacing: -.045em;
text-wrap: balance;
```

Type is sized fluidly with `clamp()` — 15 occurrences across the page components — so headings
scale between breakpoints without extra media queries:

```css
.hero h1        { font-size: clamp(48px, 5vw, 76px); line-height: .98; }
.section h2     { font-size: clamp(32px, 4vw, 52px); line-height: 1.05; }
.closing h2     { font-size: clamp(36px, 5vw, 60px); line-height: .98; }
```

Small caps labels (`.eyebrow`) run 9–11 px, weight 700, `letter-spacing: .15em–.19em`,
`text-transform: uppercase`. They carry most of the brand's editorial feel — keep them tight and
uppercase.

Body copy is 15–17 px at `line-height: 1.6–1.75`.

## Layout and spacing

| Primitive | Value |
|---|---|
| Content column | `width: min(var(--max-w), calc(100% - 48px))` → max 1180 px, 24 px gutters |
| Header row | `width: min(1320px, calc(100% - 48px))` — deliberately wider than content |
| Section rhythm | `.section-pad { padding: 96px 0 }` (72 px below 820 px) |
| Header height | 84 px (70 px below 820 px) |
| `scroll-padding-top` | 84 px, so anchor jumps clear the sticky header |

At ≤ 820 px the gutters tighten to 16 px and the column is capped at 660 px.

The site is a flex column: `.site-shell { min-height: 100vh; display: flex; flex-direction: column }`
with `main { flex: 1 }`, so the footer sits at the bottom on short pages.

## Breakpoints

Five, all `max-width`, all hand-authored:

| Width | What changes |
|---|---|
| **1100 px** | Multi-column grids begin stacking |
| **1024 px** | Header CTA tightens |
| **900 px** | Desktop nav is replaced by the hamburger; the mobile dialog becomes usable |
| **820 px** | The main mobile breakpoint — gutters, section padding, header height, grids collapse |
| **520 px** | Small-phone refinements |

**820 px is the one to test.** Almost everything responds there.

Note that the menu's JavaScript uses `window.innerWidth > 900` to auto-close, matching the 900 px
nav breakpoint — change one and you must change the other.

## Components

There is no component library. Styles are plain CSS classes in `src/index.css`; components in
`src/pages/*.tsx` apply them, occasionally with inline `style` for one-off clamps.

### Buttons

```css
.button { min-height: 54px; padding: 0 24px; font-size: 12px; font-weight: 700;
          letter-spacing: .02em; border: 1px solid transparent; }
.button:hover { transform: translateY(-2px); }
```

| Modifier | Appearance |
|---|---|
| `.gold` | Gold fill, dark text — the primary CTA |
| `.green` | Forest fill, white text |
| `.outline` | Transparent, forest border and text |
| `.outline-light` | Transparent, white border and text — for dark sections |

Buttons are **square** (`border-radius: 0`, occasionally `2px`). Rounded corners and pill buttons
are used nowhere in the design; the only circles are the brand seal and icon rings
(`border-radius: 50%`). Keep new controls sharp-edged to match.

54 px minimum height gives a comfortable touch target without an explicit media query.

### Other recurring patterns

- **`.eyebrow`** — small uppercase gold label above a heading, usually with a lucide icon.
- **`.lead`** — the larger introductory paragraph under a page `<h1>`.
- **`.container`** / **`.section-pad`** — the only layout primitives you should need.
- **`.page-hero`** — the dark hero band used by every inner page.
- **`.breadcrumb`** — visible breadcrumb list, mirrored in JSON-LD.
- **`.skip-link`** — off-canvas until focused.

## Motion

Two CSS animations, both infinite loops:

| Animation | Duration | Where | `prefers-reduced-motion` |
|---|---|---|---|
| `seal-spin` | 28 s linear | Rotating seal on the About page | **Disabled** |
| `venue-scroll` | 42 s linear | Horizontal venue marquee | **Not yet disabled** — see [ROADMAP.md](ROADMAP.md) |

Hover transitions are 0.2–0.25 s on `transform`, `background` and `color`.
`html { scroll-behavior: smooth }` is reverted to `auto` under reduced motion.

Framer Motion is installed but **not imported anywhere** in `src/`. Page transitions are planned,
not implemented.

If you add animation, add the reduced-motion override in the same commit:

```css
@media (prefers-reduced-motion: reduce) {
  .your-element { animation: none; }
}
```

## Accessibility contract

Anything you add must hold these:

- **Focus is visible.** A global `:focus-visible` rule draws a 3 px `var(--focus)` outline with
  2 px offset; `:focus:not(:focus-visible)` suppresses it for pointer use.
- **Interactive elements have accessible names** — text content, `aria-label`, or `aria-labelledby`.
- **Decorative icons are `aria-hidden="true"`.** Every lucide icon in the app is.
- **Dialogs manage focus.** The mobile menu moves focus in on open, restores it on close, traps
  `Escape`, and locks `body` scroll.
- **Images have `alt`** (or `alt=""` when decorative) and explicit `width`/`height`.
- **One `<h1>` per page**, sections labelled by `aria-labelledby`.

Details and the measured contrast table: see [Colour](#colour) and the README's accessibility
section.

## Conventions when adding UI

1. **Use the tokens.** If you need a colour that is not in `:root`, add it there first.
2. **Prefer `clamp()` over a new breakpoint.**
3. **Test at 820 px.** That is where the layout reorganises.
4. **Match the sharp-edged language** — no rounded cards, no drop-shadow-heavy elevation.
5. **Small caps labels for eyebrows**, sentence case for body.
6. **Put the CSS in `src/index.css`.** Inline `style` is acceptable for a one-off `clamp()` but not
   for anything reusable.
7. **`src/App.css` is dead** — an empty template leftover, not imported anywhere. Do not start
   putting styles in it.
