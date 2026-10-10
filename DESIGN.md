---
name: Vivek Pillai Portfolio
description: Software Developer | AI & Automation Solutions — flat editorial portfolio with native project workspaces.
colors:
  bg: "hsl(155 13% 4%)"
  surface: "hsl(150 8% 7%)"
  text: "hsl(60 14% 93%)"
  muted: "hsl(100 5% 65%)"
  olive: "#b8c270"
  cyan: "#a4d8e5"
  line: "rgba(239,242,229,.12)"
  primary-text: "#171b10"
  primary-hover: "#cad488"
  secondary-bg: "rgba(200,217,204,.035)"
  secondary-hover: "#b8c27012"
  filter-text: "#aab0a7"
  filter-selected-text: "#1b201a"
  field-bg: "#a4bd8c04"
  field-text: "#e4ecdb"
  field-placeholder: "#8e9e83"
  error: "#ffb6ad"
  success: "#cadf9e"
  reference-bg: "#080b09"
  hero-bg: "#101713"
  hero-accent: "#d6dfbe"
  hero-text: "#e9eddf"
  workspace-bg: "#f0f1e8"
  workspace-text: "#293c33"
  workspace-sage: "#809689"
  workspace-olive: "#8f9878"
  workspace-cyan: "#78929a"
  workspace-coral: "#b18776"
  workspace-panel: "#dbe3cd"
  workspace-action: "#405a3c"
  workspace-action-hover: "#30472d"
  workspace-action-text: "#e3ead9"
  process-design: "#82977e"
  process-design-text: "#121b13"
typography:
  display:
    fontFamily: "Onest, sans-serif"
    fontSize: "clamp(62px,6.4vw,96px)"
    fontWeight: 400
    lineHeight: 1.025
    letterSpacing: "-.04em"
  headline:
    fontFamily: "Onest, sans-serif"
    fontSize: "clamp(36px,4.1vw,60px)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-.04em"
  title:
    fontFamily: "Onest, sans-serif"
    fontSize: "27px"
    fontWeight: 400
    letterSpacing: "-.04em"
  body:
    fontFamily: "Onest, sans-serif"
    fontSize: "13px"
    lineHeight: 1.7
  hero-body:
    fontFamily: "Onest, sans-serif"
    fontSize: "15px"
    lineHeight: 1.75
  label:
    fontFamily: "Onest, sans-serif"
    fontSize: "11px"
  button:
    fontFamily: "Onest, sans-serif"
    fontSize: "13px"
    fontWeight: 500
  field:
    fontFamily: "Onest, sans-serif"
    fontSize: "12px"
  serif-accent:
    fontFamily: "Georgia, 'Times New Roman', serif"
    fontWeight: 400
rounded:
  symbol: "8px"
  field: "10px"
  badge: "12px"
  toast: "15px"
  demo: "18px"
  tag: "20px"
  mobile-card: "23px"
  mobile-project: "24px"
  dialog: "26px"
  project: "28px"
  card: "30px"
  pill: "40px"
  workspace-control: "5px"
  workspace-panel: "7px"
  story-device: "41px"
  studio-teaser: "27px"
  circle: "50%"
spacing:
  gap-xs: "6px"
  gap-sm: "8px"
  gap-control: "12px"
  gap-grid: "16px"
  inset-sm: "20px"
  inset-card: "25px"
  gap-large: "30px"
  inset-panel: "35px"
  gap-editorial: "45px"
  section-desktop: "110px"
  section-tablet: "85px"
  section-mobile: "65px"
components:
  button-primary:
    backgroundColor: "{colors.olive}"
    textColor: "{colors.primary-text}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "16px 23px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-secondary:
    backgroundColor: "{colors.secondary-bg}"
    textColor: "{colors.text}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "16px 23px"
  button-secondary-hover:
    backgroundColor: "{colors.secondary-hover}"
  filter:
    backgroundColor: "transparent"
    textColor: "{colors.filter-text}"
    rounded: "{rounded.card}"
    padding: "10px 16px"
  filter-selected:
    backgroundColor: "{colors.text}"
    textColor: "{colors.filter-selected-text}"
    rounded: "{rounded.card}"
    padding: "10px 16px"
  tag:
    textColor: "#9ca795"
    rounded: "{rounded.tag}"
    padding: "5px 9px"
  text-field:
    backgroundColor: "{colors.field-bg}"
    textColor: "{colors.field-text}"
    typography: "{typography.field}"
    rounded: "{rounded.field}"
    padding: "14px"
    width: "100%"
  project-image:
    backgroundColor: "#131b17"
    rounded: "{rounded.project}"
  process-card:
    rounded: "{rounded.card}"
    padding: "{spacing.inset-card}"
  skill-panel:
    rounded: "{rounded.card}"
    padding: "{spacing.inset-panel}"
  skill-badge:
    backgroundColor: "rgba(208,224,195,.025)"
    textColor: "#d0d8c6"
    rounded: "{rounded.badge}"
    padding: "15px 12px"
  navigation:
    textColor: "#b3b8b1"
    height: "100px"
  reference-navigation:
    backgroundColor: "#080b09dc"
    textColor: "#aeb7a9"
    height: "88px"
  carousel-arrow:
    backgroundColor: "#c1dfd00b"
    textColor: "#c1d4c9"
    rounded: "{rounded.circle}"
    height: "40px"
    width: "40px"
  studio-teaser:
    backgroundColor: "{colors.reference-bg}"
    rounded: "{rounded.studio-teaser}"
    padding: "{spacing.inset-card}"
  workspace:
    backgroundColor: "{colors.workspace-bg}"
    textColor: "{colors.workspace-text}"
    rounded: "{rounded.field}"
  workspace-action:
    backgroundColor: "{colors.workspace-action}"
    textColor: "{colors.workspace-action-text}"
    rounded: "{rounded.workspace-control}"
    padding: "10px 11px"
  workspace-action-hover:
    backgroundColor: "{colors.workspace-action-hover}"
  workspace-assistant:
    backgroundColor: "{colors.workspace-panel}"
    rounded: "{rounded.workspace-panel}"
    padding: "16px"
  project-selector:
    backgroundColor: "transparent"
    textColor: "#819277"
    padding: "13px 3px 3px"
  project-selector-selected:
    textColor: "#d6e1bf"
---

# Design System: Vivek Pillai Portfolio

## Overview

**Creative North Star: "Artfolio"**

Vivek Pillai’s portfolio presents Software Developer | AI & Automation Solutions. Artfolio references inform the Onest editorial hierarchy, dark surfaces, olive/cyan/coral character, and restrained glass controls. All compositions and interactions are native React; supplied screenshots are not page content.

The homepage is a flat editorial composition with large Onest/Georgia type, an introduction on the right, and a four-project workspace canvas. It uses no hero image, AI dome, or hemisphere outline. The workspaces demonstrate Labmate research organization, CampusHub request review, job-application review, and an illustrative Shorts Clipper timeline. Separate Stories and Studio pages retain original portraits and native visual explorations.

Source extraction records the current design; browser verification is unavailable because localhost access was explicitly denied. Identity/contact remain Vivek Pillai, pillaivivek16@gmail.com, +91 72492 92943. Supplied project descriptions, illustrative UI studies/walkthroughs, testimonials, and engineering targets remain clearly distinguished.

**Key Characteristics:**

- Flat editorial hero with native typography and matching dark navigation surface.
- Four selectable native project workspaces, each with useful preview controls.
- Warm cream interface canvas inside sage/olive/cyan/coral mounts.
- Onest headings with occasional Georgia italics; restrained outlines and glass.
- Responsive layouts, accessible focus, reduced motion, and visible preview disclosures.

## Colors

Dark green charcoal unifies navigation and hero. Warm off-white and muted sage support the editorial hierarchy; olive remains the action and keyboard-focus color. The native workspace uses warm cream and deep green text, mounted on sage for Labmate, olive for CampusHub, muted cyan for job automation, and warm coral for Shorts Clipper.

Inside the workspace, pale sage panels, subtle green lines, and forest-green actions establish a quieter product interface. The source colors remain normative in frontmatter. Other portfolio sections retain their prior dark materials, cyan/olive atmospheric cards, and local feedback tones.

**The Native Composition Rule.** Translate the Artfolio composition into native elements and controls; never use supplied screenshots as whole-page layouts.

## Typography

Onest supplies headings, prose, and controls. Georgia supplies occasional italics and the “vp” monogram. Hero display uses the frontmatter token; its emphasized software word scales to (1.06em). The right-hand introduction uses (15px), line height (1.75), and maximum width (355px).

Hero type reduces to (67px) below (1100px), (58px) on intermediate tablet, (clamp(42px,9.6vw,68px)) on mobile, then (42px) below (420px) and (36px) below (350px). Project-stage names use (42px) on desktop. Native workspace headings use (23px); its labels and supporting copy use compact (8–11px) roles. Stories/Studio keep their existing editorial scales.

**The Italic Accent Rule.** Use Georgia italics for selected words and short phrases within the Onest hierarchy.

## Layout

Header and editorial hero cap at (1510px) with inset (5.3%). Hero content begins at (164px). Its opening uses columns (1.45fr / 1fr), gap (60px), and bottom separation (58px). The main title sits left and introduction/actions sit right.

The selected-project stage uses (28% / 72%) columns and minimum height (493px). Left content holds project title, description, details trigger, and four numbered selectors. Right content mounts a native interface within padding (35px 36px 32px). The cream workspace has a top bar, decorative icon rail, content panels, and disclosure. Panels adapt to the selected project.

At (1100px), spaces tighten and stage columns become (26% / 74%); intermediate tablet spans (900px) to (761px). At (760px), opening and stage stack, the mount expands to the content edges, decorative rail/search disappear, and perspective clears. At (420px), footer wrapping and compact panel adjustments apply. At (350px), selector placement and workspace panels stack further. The large-screen variant starts at (1700px).

Below the hero, the four selected projects retain their two-column grid, desktop stagger, CSS sprite imagery, and single-column mobile layout. Stories and Studio remain separate native pages.

## Elevation & Depth

The homepage composition is flat, with line-separated regions and a colored workspace mount. The native workspace has a soft shadow and subtle perspective tilt; hovering the mount flattens that tilt. The main header is transparent on the matching dark surface, becoming fixed dark glass with blur (16px) after scrolling beyond (40px). Existing Stories device and Studio overlap shadows remain recorded in the sidecar.

**The Workspace Depth Rule.** Keep the editorial page flat; use restrained perspective and a soft shadow to separate the native workspace from its colored mount.

Workspace perspective transitions over (.7s) using the existing easing curve. Shorts Clipper’s playhead runs through a (9s) illustrative loop when enabled. Reduced-motion mode removes perspective/transition and places a playing timeline indicator halfway instead of animating it. Subtitle rotation remains pauseable and defaults to the system’s reduced-motion preference.

## Shapes

The hero has straight, unclipped edges. Workspace corners are gently curved (10px), reducing to (8px) on mobile. Product panels/actions use compact (5–7px) corners. Existing project cards, dialogs, fields, pills, and circles preserve the established radius vocabulary. The header monogram is unframed, with no circular background.

## Components

### Hero and Project Selector

Large native copy leads into the working project canvas. The contact trigger is an understated underline action; the work link uses a small arrow. Numbered project selectors use thin top lines and muted text; selected state brightens both and exposes pressed semantics. Selection replaces project text and workspace content, resetting that project’s local preview state.

### Native Workspaces

Labmate organizes a sample research brief and toggles task review readiness. CampusHub toggles review of a sample study-room request. Job automation marks an illustrative opportunity reviewed while stating no applications are submitted. Shorts Clipper toggles an illustrative timeline, with native CSS artwork and a pause control. Search/status/rail ornaments are decorative interface elements. The visible disclosure identifies every workspace as an interactive interface study with sample content.

### Navigation and Project Details

Navigation shares the hero surface at the page top and becomes blurred fixed glass after scroll. Mobile controls expose expanded state. “Inside the project” and lower project cards open the same native details dialog with supplied descriptions, illustrative workflow walkthrough, and focus return on close. Shared workflow, service, contact, and sprite styles live in project-details.css.

### Actions, Fields, and Supporting Cards

Portfolio actions retain olive primary and outlined secondary treatments. Workspace actions use forest-green fill, pale text, compact corners, and a darker hover. Fields retain faint green fill, pale text, curved outlines, hover feedback, and olive keyboard focus. Contact includes native email/phone links and the persistent inquiry form. Process/skills, target metrics, illustrative testimonials, and feedback controls retain their established source styles and disclosures.

### Stories and Studio

Stories keeps a native portrait strip, creator selection, dialogs, and like/save/next controls. Studio retains its native cyan beam, overlapping linked cards, practice expander, and journal carousel. Their original AI portraits are separate visual studies, not homepage artwork.

## Do's and Don'ts

### Do:

- **Do** retain the flat editorial homepage and same-surface navigation.
- **Do** use native project interfaces with sage/cream materials and real controls.
- **Do** preserve Onest and occasional Georgia italic emphasis.
- **Do** distinguish supplied project descriptions from illustrative previews, testimonials, and target metrics.
- **Do** preserve keyboard focus, responsive layouts, and reduced-motion behavior.

### Don't:

- **Don't** restore the rejected dome, hemisphere, or former homepage phone.
- **Don't** embed supplied screenshots as page layouts or use a hero image.
- **Don't** present preview interactions as live AI processing, submitted applications, campus requests, or video exports.
- **Don't** present illustrative testimonials or engineering targets as verified client evidence.
- **Don't** describe source/build checks as browser-verified visual fidelity.




