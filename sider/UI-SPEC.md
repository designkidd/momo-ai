# Momo:AI UI Design System Specification

> **Version:** 1.0  
> **Last Updated:** 2026-04-05  
> **Scope:** All UI surfaces — options page, sidepanel (chat), iframe sidebar shell

---

## 1. Design Tokens

### 1.1 Token Mapping Across Files

The extension uses three CSS files, each with its own variable namespace. The table below maps equivalent tokens.

| Concept | `options.css` | `sidepanel.css` | `iframe-sidebar.css` |
|---------|---------------|-----------------|----------------------|
| Page / frame bg | `--bg-page` | `--bg-alt` | hardcoded `white` / `#1a1a1a` |
| Card / panel bg | `--bg-card` | `--bg` | — |
| Subtle / soft bg | `--bg-subtle` | `--bg-soft` | — |
| Softer alt bg | — | `--bg-soft-alt` | — |
| Border default | `--border` | `--border` | hardcoded rgba |
| Border strong | `--border-strong` | `--border-strong` | — |
| Text primary | `--text` | `--text` | — |
| Text secondary | `--text-sec` | `--text-sec` | — |
| Text faint | `--text-faint` | — | — |
| Accent | `--bg-active` | `--accent` | — |
| Accent hover | `--bg-active-hover` | `--accent-hover` | — |
| Focus ring | `--focus` | `--accent` | — |
| Danger | `--danger` | `--danger` | — |
| Success | `--success` | — | — |
| Code bg | — | `--code-bg` | — |
| Scrollbar | — | `--scrollbar` | — |
| Shadow | `--shadow` | — | hardcoded rgba |

### 1.1.1 Cross-File Aliases

To allow either naming convention in new code, alias variables are defined in each file:

**In `options.css`:**
- `--accent` → alias for `--bg-active`
- `--accent-hover` → alias for `--bg-active-hover`

**In `sidepanel.css`:**
- `--bg-page` → alias for `--bg-alt`
- `--bg-card` → alias for `--bg`
- `--bg-subtle` → alias for `--bg-soft`
- `--bg-active` → alias for `--accent`
- `--bg-active-hover` → alias for `--accent-hover`
- `--focus` → alias for `--accent`

New code should prefer the **canonical names**: `--bg-page`, `--bg-card`, `--bg-subtle`, `--accent`, `--accent-hover`, `--focus`.

### 1.2 Color Palette — Light Theme

| Token | options.css | sidepanel.css | Canonical Value |
|-------|-------------|---------------|-----------------|
| Page bg | `#f5f7fa` | `#ffffff` (alt) | Per-surface |
| Card bg | `#ffffff` | `#ffffff` | `#ffffff` |
| Subtle bg | `#f1f4f7` | `#f7f7f8` | ~`#f5f7f8` |
| Soft alt bg | — | `#f0f2f5` | `#f0f2f5` |
| Border | `#dae1ea` | `#d8dfe5` | ~`#d9e0e8` |
| Border strong | `#c3cdd9` | `#c1ccd7` | ~`#c2ccd8` |
| Text primary | `#1f2933` | `#1f2933` | `#1f2933` |
| Text secondary | `#5d6a79` | `#5d6a79` | `#5d6a79` |
| Text faint | `#94a3b8` | — | `#94a3b8` |
| Accent (Teal) | `#2ACFB6` | `#2ACFB6` | `#2ACFB6` |
| Accent hover | `#50DCC9` | `#22B7A0` | See note below |
| Danger | `#dc2626` | `#dc2626` | `#dc2626` |
| Danger hover | `#b91c1c` | — | `#b91c1c` |
| Success | `#059669` | — | `#059669` |

> **Note on accent-hover:** `options.css` uses a **lighter** hover (`#50DCC9`) for the "brighten on hover" pattern. `sidepanel.css` uses a **darker** hover (`#22B7A0`). Both are valid depending on context — options page brightens, sidepanel darkens for pressed feel.

### 1.3 Color Palette — Dark Theme

| Token | options.css | sidepanel.css | Canonical Value |
|-------|-------------|---------------|-----------------|
| Page bg | `#202223` | `#202223` (alt) | `#202223` |
| Card bg | `#252628` | `#252628` | `#252628` |
| Subtle bg | `#202223` | `#202223` (soft) | `#202223` |
| Soft alt bg | — | `#202020` | `#202020` |
| Border | `#3f3f3f` | `#3f3f3f` | `#3f3f3f` |
| Border strong | `#48484c` | `#48484c` | `#48484c` |
| Text primary | `#d4cfa8` | `#d4cfa8` | `#d4cfa8` (warm) |
| Text secondary | `#b6b898` | `#b6b898` | `#b6b898` |
| Text faint | `#88988a` | — | `#88988a` |
| Accent (warm) | `#d4d1a8` | `#d4d1a8` | `#d4d1a8` |
| Accent hover | `#e4e1bc` | `#c4c498` | See note above |
| Code bg | — | `#2e2e2e` | `#2e2e2e` |
| Scrollbar | — | `rgba(255,255,255,0.12)` | `rgba(255,255,255,0.12)` |
| Hover surface | `#383a3d` | — | `#383a3d` |

### 1.4 Semantic Colors

| Role | Light | Dark |
|------|-------|------|
| Danger | `#dc2626` | `#dc2626` |
| Danger hover | `#b91c1c` | `#b91c1c` |
| Danger bg (subtle) | `#fff5f5` | `rgba(220,38,38,.12)` |
| Success | `#059669` | `#059669` |
| Focus ring (light) | `rgba(42,207,182,.18)` | — |
| Focus ring (dark) | — | `rgba(212,209,168,.15)` |

### 1.5 Shadows

| Context | Light | Dark |
|---------|-------|------|
| Card | `0 4px 12px -2px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04)` | `0 4px 14px rgba(0,0,0,.55)` |
| Dropdown | `0 4px 12px rgba(0,0,0,.15)` | `0 4px 16px rgba(0,0,0,.4)` |
| Modal | `0 20px 60px -10px rgba(0,0,0,.25), 0 8px 20px rgba(0,0,0,.12)` | Same |
| Sidebar shell | `-4px 0 24px rgba(0,0,0,0.12)` | Same |

---

## 2. Typography

### 2.1 Font Stack

```
-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang TC",
"Noto Sans", "Microsoft JhengHei", Helvetica, Arial, sans-serif
```

Monospace (code): `monospace` (system default)

### 2.2 Font Size Scale

| Token | Size | Usage |
|-------|------|-------|
| xs | 10px | Character counts, meta labels |
| sm | 11px | Badges, attachment indicators |
| sm-md | 12px | Hints, tooltips, slider labels |
| hint | 12.5px | Hint text, inline status |
| md | 13px | Buttons, nav items, dropdowns |
| base | 14px | Body text, inputs, options |
| md-lg | 15px | Provider name, prompt titles |
| lg | 16px | Sub-headings |
| xl | 18px | Section titles, modal headers |
| 2xl | 34px | Page title |
| hero | `clamp(28px, 8vw, 42px)` | Sidepanel welcome |

### 2.3 Font Weight Scale

| Weight | Usage |
|--------|-------|
| 400 | Body text, inputs |
| 500 | Buttons, badges, provider name, nav items |
| 600 | Labels, section titles, headings |
| 700 | Page title |

### 2.4 Line Height

| Value | Usage |
|-------|-------|
| 1.32 | User bubble (single line) |
| 1.36 | User bubble (multi-line) |
| 1.5 | Inputs, textarea, general content |
| 1.65 | Hint text, tutorial text |

---

## 3. Spacing

### 3.1 Base Unit

**4px** — all spacing should be multiples of 4px.

### 3.2 Spacing Scale

| px | Usage examples |
|----|----------------|
| 2 | Icon inner gap |
| 4 | Segment group padding, micro gaps |
| 6 | Button gaps, icon gaps, segment gap |
| 8 | Small padding, form-grid gap, slider-labels margin |
| 10 | Inline-row gap, button small padding, model-row padding |
| 12 | Messages gap, sidebar frame padding, section gaps |
| 14 | Nav item padding, model-row gap, composer gap |
| 16 | Section title margin, form-field padding, toolbar spacing |
| 20 | Test-row margin, footer padding-top, page padding |
| 24 | Page flex gap, form-field margin |
| 28 | Section compact margin, modal padding |
| 40 | Section margin |
| 48 | Card top padding |
| 54 | Card side padding |

### 3.3 Component Padding Patterns

| Component | Padding |
|-----------|---------|
| Card (options) | `48px 54px 56px` |
| Input | `12px 15px` |
| Input small | `8px 11px` |
| Button | `8px 16px` |
| Button small | `7px 14px` |
| Button pill | `8px 18px` |
| Segment button | `10px 4px` |
| Provider selector | `12px 16px` |
| Modal | `28px 30px 30px` |
| SP card | `18px 26px` |
| Custom select option | `9px 15px` |
| Nav item | `9px 14px` |

---

## 4. Border Radius

| px | Usage |
|----|-------|
| 2 | Resizer grip, tiny elements |
| 4 | Inline code |
| 6 | Icon buttons, badges, small controls |
| 7 | Icon buttons, sp-icon, close button |
| 8 | Input small, button small, dialog buttons |
| 9 | Buttons |
| 10 | Inputs, custom select, segment buttons, field inputs |
| 12 | Provider selector, model rows, dropdowns, provider dropdown |
| 14 | Segment group |
| 16 | User bubble, custom dialog |
| 18 | SP cards |
| 20 | Card (options page), switch thumb |
| 22 | Assistant bubble, modals, sp-editor |
| 999 | Pill selects (sidepanel) |

---

## 5. Component Interaction States

All interactive elements must define **4 states**: default, hover, focus/active, disabled.

### 5.1 Text Input (`.input`)

| State | Light | Dark |
|-------|-------|------|
| Default | bg: `--bg-subtle`, border: `1px solid --border` | bg: `--bg-subtle`, border: **transparent** |
| Hover | — | border: `--border` |
| Focus | bg: `#fff`, border: `--focus`, shadow: `0 0 0 3px rgba(42,207,182,.18)` | bg: `--bg-card`, border: `--border` (mouse) / `--focus` + glow (keyboard) |
| Disabled | `opacity: 0.6`, `cursor: not-allowed` | Same |

**Dark mode rule:** Use `:focus` for subtle border, `:focus-visible` for accent glow. This prevents border lingering after mouse-click selects.

### 5.2 Custom Select (`.csel-*`)

| State | Light | Dark |
|-------|-------|------|
| Closed | bg: `--bg-subtle`, border: `--border`, chevron SVG | bg: `--bg-subtle`, border: **transparent**, chevron SVG (lighter stroke) |
| Hover | border: `--border-strong` | border: `--border` |
| Open | border: `--focus`, top corners rounded, bottom flat | border: `--border` |
| Dropdown | bg: `--bg-card`, border: `--focus`, shadow | bg: `--bg-card`, border: `--border`, darker shadow |
| Option hover | bg: `--bg-subtle` | bg: `#383a3d` |
| Option selected | color: `--focus`, checkmark prefix, `font-weight: 500` | Same |

### 5.3 Segment Button (`.seg-btn`)

| State | Light | Dark |
|-------|-------|------|
| Inactive | bg: transparent, color: `--text-sec` | bg: transparent, color: `#888` |
| Inactive hover | bg: `#fff`, color: `--text` | bg: `#383a3d`, color: `--text` |
| Active | bg: `--bg-active`, color: `#fff`, ring: `0 0 0 1px --bg-active` | Same with warm accent |
| Active hover | bg: `--bg-active-hover`, glow: `0 0 10px rgba(42,207,182,.35)` | bg: `--bg-active-hover`, glow: `0 0 10px rgba(212,209,168,.3)` |

**Container** (`.seg-group`): Light has `1px solid --border`; dark has `border-color: transparent`.

### 5.4 Buttons

#### Primary (`.btn`)

| State | Light | Dark |
|-------|-------|------|
| Default | bg: `--bg-active` (teal), color: `#fff` | bg: `--bg-active` (warm), color: `#fff` |
| Hover | bg: `--bg-active-hover` (lighter) | bg: `--bg-active-hover` (lighter) |
| Disabled | `opacity: 0.55`, `cursor: not-allowed` | Same |

#### Outline (`.btn-outline`)

| State | Light | Dark |
|-------|-------|------|
| Default | bg: `--bg-subtle`, color: `--text-sec`, border: `--border` | Same, `--bg-hover` overridden to `#383a3d` |
| Hover | bg: `#fff`, color: `--text`, border: `--border-strong` | bg: `#383a3d`, color: `--text`, border: `--border-strong` |

#### Danger Outline (`.btn-outline.danger`)

| State | Light | Dark |
|-------|-------|------|
| Default | color: `--danger`, border: `--danger` | Same |
| Hover | color: `--danger-hover`, bg: `#fff5f5` | color: `--danger-hover`, bg: `rgba(220,38,38,.12)` |

### 5.5 Toggle Switch (`.switch`)

| State | Appearance |
|-------|------------|
| Off | Track: `--border`, thumb: `#fff` |
| On | Track: `--bg-active`, thumb slides right |

Dimensions: `36px x 20px`, thumb: `14px` circle with `box-shadow: 0 1px 2px rgba(0,0,0,.25)`.

### 5.6 Provider Selector (`.provider-select-button`)

| State | Light | Dark |
|-------|-------|------|
| Default | bg: `--bg-subtle`, border: `1px solid --border` | bg: `--bg-subtle`, border: **transparent** |
| Hover | bg: `#fff`, border: `--border-strong` | bg: `--bg-card`, border: `--border` |
| Open | Arrow rotates 180deg | Same |

Dropdown arrow: SVG chevron (`12x12`, stroke `currentColor`).

### 5.7 Cards & Rows (`.sp-card`, `.model-row`)

| State | Appearance |
|-------|------------|
| Default | bg: `--bg-subtle`, border: `1px solid --border` |
| Hover | bg: `--bg-card` |

### 5.8 Icon Button (`.icon-btn`, `.sp-icon`)

| State | Appearance |
|-------|------------|
| Default | bg: transparent, border: `1px solid --border` (icon-btn) or transparent (sp-icon) |
| Hover | bg: `--bg-card`, color: `--text`, border shows |

### 5.9 Modal (`.prompt-modal`)

- Backdrop: `rgba(0,0,0,0.4)` + `backdrop-filter: blur(3px)`
- Box: bg `--bg-card`, border `1px solid --border`, radius `22px`
- Entry animation: scale 0.94 -> 1, translateY 10px -> 0
- Close button: hover rotates 90deg

### 5.10 Slider (`.size-slider`)

- Track: height `6px`, bg `--border`, radius `3px`
- Thumb: `18px` circle, bg `--bg-active`, border `2px solid --bg-card`
- Thumb hover: bg `--bg-active-hover`, scale 1.1

---

## 6. Dark Mode Rules

### 6.1 Theme Switching Mechanism

**Standard:** Use `data-theme="dark"` attribute on `<html>` (document root).

- `options.css`: `:root[data-theme="dark"]` or `html[data-theme="dark"]`
- `sidepanel.css`: `[data-theme="dark"]`
- `iframe-sidebar.css`: **MUST migrate** from `@media (prefers-color-scheme: dark)` to `[data-theme="dark"]` applied by the content script

Also set `<meta name="color-scheme" content="dark">` and CSS `color-scheme: dark` on root when dark.

### 6.2 Core Dark Mode Principles

1. **Borderless-until-interaction**: Form controls (inputs, selects, segment groups) use `border-color: transparent` at rest. Borders appear on hover (`--border`) and focus (`--focus`).

2. **Semi-transparent focus rings**: Never use solid accent color for `box-shadow` focus rings. Always use `rgba()`:
   - Light: `0 0 0 3px rgba(42,207,182,.18)`
   - Dark: `0 0 0 3px rgba(212,209,168,.15)`

3. **Focus-visible for keyboard only**: Use `:focus` for subtle border, `:focus-visible` for the full accent glow. This prevents focus decoration from lingering after mouse interactions on selects.

4. **Unified hover surface**: Non-active interactive elements hover to `#383a3d` in dark mode (not `--bg-card` which is too similar to `--bg-subtle`).

5. **Active button hover = brighten**: Active/accent buttons hover to a **lighter** shade (not darker). Add subtle glow shadow.

6. **Native select replacement**: Use custom dropdown component (`csel-*`) instead of native `<select>` to ensure dark dropdown popup.

7. **color-scheme property**: Set `color-scheme: dark` on `:root[data-theme="dark"]` and on `select` elements for any remaining native controls.

### 6.3 Dark Mode Color Philosophy

- **Warm neutrals**: Text uses warm tones (`#d4cfa8`, `#b6b898`) instead of pure gray/white.
- **Muted accent**: Accent shifts from teal (`#2ACFB6`) to warm gold (`#d4d1a8`).
- **Low contrast borders**: `#3f3f3f` is subtle against `#202223` / `#252628` backgrounds.
- **Deep shadows**: Stronger shadow opacity compensates for reduced contrast.

---

## 7. Animation & Transitions

### 7.1 Standard Transition

```css
transition: 0.18s ease;
```

Used for: color, background, border-color, opacity changes on interactive elements.

### 7.2 Modal Entry

```css
animation: modalIn 0.22s cubic-bezier(.34, 1.2, .64, 1);
/* Scale 0.94 -> 1, translateY 10px -> 0 */
```

### 7.3 Dropdown Open

```css
animation: cselIn 0.12s ease;
/* Opacity 0 -> 1, translateY -4px -> 0 */
```

### 7.4 Sidebar Slide

```css
transition: transform 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);
```

### 7.5 Fade In (generic)

```css
animation: fadeIn 0.25s ease;
/* Opacity 0 -> 1, translateY 6px -> 0 */
```

---

## 8. Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| `<= 768px` | iframe sidebar: full width, no left border |
| `<= 820px` | Options: nav sidebar hidden, single column |
| `<= 880px` | Options: card padding reduced, footer stacked |

---

## 9. Iconography

- **Style:** Outline stroke icons (Feather/Lucide style)
- **Stroke width:** 1.5 (nav) or 1.8 (action buttons) or 2 (small icons)
- **Sizes:** 12px (chevrons), 15px (action icons), 16px (btn-icon), 18px (nav icons)
- **Dropdown arrow:** SVG chevron polyline `6 9 12 15 18 9`, 12x12, stroke currentColor, stroke-width 2

---

## 10. Accessibility

- All interactive elements must have `cursor: pointer`
- Disabled elements: `opacity: 0.55-0.6`, `cursor: not-allowed`
- Focus rings visible on keyboard navigation (`:focus-visible`)
- Toggle switches use hidden `<input>` with visible `.slider` pseudo-element
- Modals: `role="dialog"`, `aria-modal="true"`, Escape to close
- ARIA labels via `data-i18n-aria-label` for i18n support
