# Style Guide

This document outlines the stylistic and visual guidelines for the application. The core philosophy is to create an interface that is simple, flat, smooth, and elegant, with a strong emphasis on accessibility and intuitive usage.

## 1. Core Philosophy

-   **Spacious & Clean:** The layout should never feel cramped. Ample white space is crucial for readability and a calm user experience.
-   **Subtle Interactivity:** Animations and transitions should be smooth and subtle, providing feedback without being distracting.
-   **Almost Flat Design:** Components are mostly flat, with a very slight 3D aspect (like a subtle shadow on hover) to indicate interactivity.
-   **Accessibility First:** All design choices must prioritize accessibility for users with disabilities, including but not limited to color blindness, low vision, and mobility impairments. The application must be fully responsive and usable on all screen sizes.

## 2. Color Palette

A three-color palette is used for both light and dark themes. The chosen colors are selected to meet WCAG AA contrast standards.

### Light Theme

-   **Primary (Background):** `"#FFFFFF"` (White)
-   **Secondary (Light backgrounds/borders):** `"#F8F9FA"` (Very Light Grey)
-   **Accent (Interactive elements, links):** `"#FFC107"` (Amber/Yellow)
-   **Text:** `"#212529"` (Almost Black) - *This provides better contrast and a slightly softer feel than pure black, aligning with the "elegant" principle.*

### Dark Theme

-   **Primary (Background):** `"#212529"` (Dark Grey)
-   **Secondary (Card/input backgrounds):** `"#343A40"` (Slightly Lighter Grey)
-   **Accent (Interactive elements, links):** `"#0D6EFD"` (Vibrant Blue)
-   **Text:** `"#F8F9FA"` (Whit-ish / Light Grey)

## 3. Typography

-   **Font Family:** `Lato`, with `sans-serif` as a fallback.
-   **Style:** Crisp and modern.
-   **Font Scale:** A modular scale should be used for consistency.
    -   Body: `1rem` (16px)
    -   H4 / Small text: `0.875rem` (14px)
    -   H3: `1.25rem` (20px)
    -   H2: `1.5rem` (24px)
    -   H1: `2.0rem` (32px)
-   **Font Weight:**
    -   Regular: `400`
    -   Bold / Headings: `700`

## 4. Layout and Spacing

To ensure visual consistency, a spacing system based on a **`8px`** base unit is used. All margins, paddings, and layout gaps should be multiples of this unit.

-   `xx-small`: `4px`
-   `x-small`: `8px`
-   `small`: `12px`
-   `medium`: `16px`
-   `large`: `24px`
-   `x-large`: `32px`

## 5. Components

### Border Radius

-   Interactive elements like buttons, cards, and input fields should have rounded corners.
-   **Standard Radius:** `8px`

### Shadows & Interaction

-   Components are flat by default.
-   On **hover or focus**, a subtle `box-shadow` should appear to lift the element slightly, indicating it is interactive.
-   **Standard Shadow:** `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)`

### Animations & Transitions

-   Animations must be smooth and non-intrusive.
-   **Standard Transition:** `transition: all 300ms ease-in-out;`
-   This applies to changes in color, background, box-shadow, and transform properties.

## 6. Accessibility (A11y)

Accessibility is a primary requirement and must be considered at every step.

-   **Color Contrast:** All text and UI elements must meet at least **WCAG 2.1 AA** contrast ratios.
-   **Semantic HTML:** Use proper HTML5 elements (`<nav>`, `<main>`, `<article>`, `<button>`, etc.) to ensure screen readers can correctly interpret the page structure.
-   **Keyboard Navigation:** All interactive elements must be reachable and operable using only a keyboard.
-   **Focus Indicators:** A clear and visible focus state (e.g., using a ring or outline with the accent color) is mandatory for all focusable elements. This should not be disabled.
-   **Responsive Design:** The layout must be fluid and adapt gracefully from mobile phones to widescreen desktops.
-   **Images:** All `<img>` tags must have descriptive `alt` attributes. For decorative images, use an empty `alt=""`.
