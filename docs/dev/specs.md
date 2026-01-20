# Application Features & Specifications

This document tracks all features, from initial ideas to completed implementations. It serves as a single source of truth for the project's scope and progress, in alignment with the "Showcase Quality Code" principle.

## How This Document is Structured

Each feature is documented in its own section. A feature section is a level-2 heading (`##`) and contains the following key-value pairs presented as a definition list:

- **ID**
  : A unique, sequential integer identifying the feature.

- **Description**
  : A detailed explanation of the feature, its purpose, user-facing value, and technical requirements.

- **Status**
  : The current state of the feature. Must be one of the following:
  - `idea`: A feature that has been proposed but not yet planned.
  - `todo (priority: X)`: A feature that is planned for development. `X` is a number from 0 (highest priority) to 10 (lowest priority, will likely not be implemented) and must always come from the user, do not suggest a value; if none given, only use `todo`.
  - `wip`: The feature is currently in progress.
  - `done`: The feature has been completed, tested, and merged. **IMPORTANT: A feature MUST NOT be set to `done` until the user explicitly says it is done.**

- **Branch**
  : The name of the git feature branch, formatted as `feature/<ID>-<short-description>` (e.g., `feature/42-make-coffee`).
  _Note: The short description should be lowercase, hyphen-separated, and concise._

- **PR**
  : The pull request number associated with the feature's implementation (e.g., `#42`).

- **Release**
  : The semantic version number of the application in which this feature was (or will be) included (e.g., `v1.0.0`).

---

## Initial Project & Documentation Setup

**ID**
: `1`

**Description**
: Initialize the Angular application and create the foundational documentation structure. This includes setting up the core project files (`angular.json`, `package.json`, etc.), configuring Docker for a consistent development and build environment (`Dockerfile`, `Makefile`), and creating the initial set of markdown documents (`GEMINI.md`, `docs/style.md`, `docs/technical.md`, `docs/specs.md`) to guide development. The goal is to establish the standards and architecture for the "Showcase Quality Code" principle from the outset.

**Status**
: `done`

**Branch**
: `feature/1-initial-setup`

**PR**
: none

**Release**
: v0.1.0

## Linting and Formatting Make Targets

**ID**
: `2`

**Description**
: Implement `make lint` and `make format` commands to enforce code style and catch potential errors. The `make lint` command will run ESLint for TypeScript and `stylelint` for SCSS files, ensuring adherence to coding standards. The `make format` command will use Prettier to automatically reformat code, maintaining consistent style across the project. Both commands will operate within the Dockerized development environment, making them accessible and consistent for all developers. This feature enhances code quality, reduces merge conflicts, and improves developer experience.

**Status**
: `done`

**Branch**
: `feature/2-make-lint-format`

**PR**
: _none_

**Release**
: `v0.1.0`

---

## Top Navbar

**ID**
: `3`

**Description**
: This feature implements a prominent top navigation bar for the resume. The layout ensures the profile picture, now a distinct rectangular shape with a border, takes the full available height of the navbar on the left side. Immediately to the right of the profile picture, the profile's full name is prominently displayed and left-aligned at the top, followed by a concise professional objective, and a brief profile summary. Increased vertical spacing is applied consistently between all textual elements (name, objective, summary) and the navigation menu for enhanced visual separation. The navigation menu is presented with its items left-aligned, styled distinctly to resemble interactive buttons or tabs, and appropriately spaced. These tabs, currently disabled, are for "Experience", "Education", and "About". The entire navbar is designed to respect the project's dark theme style guidelines, ensuring a consistent and aesthetically pleasing user experience. Finally, the data displayed is pulled from a configuration file in <root>/config via an injected service.

**Status**
: `done`

**Branch**
: `feature/3-navbar`

**PR**
: [#1](https://github.com/yscialom/CrispCV/pull/1)

**Release**
: `v0.1.0`

---

## Experience Page

**ID**
: `4`

**Description**
: Implement the "Experience" page, accessible via the "Experience" link in the top navbar. This page displays the professional experiences from the configuration file as a list of "Experience Cards".

_Layout_:

```text
+-----------------------------------------------------------------------+
|  [Job Title]                                             [Location]   |
|  [Company Name]                            [Date Range] ([Duration])  |
|                                        (Keyword) (Keyword) (Keyword)  |
|                     -------------------------                         |
|  [Mission Title]                                                      |
|  [Mission Description Paragraph...]                                   |
|                                                                       |
+-----------------------------------------------------------------------+
```

_Key Features_:

- **Experience Card:** one card per job, one job having possibly multiple missions
- **Duration Logic:**
  - `> 10 years`: Round to full years (e.g., "12 years").
  - `> 1 year`: Round to half years (e.g., "1.5 years").
  - Otherwise: Full months (e.g., "8 months").
- **Alignment:** Company name and Date/Duration share the same baseline.
- **Keywords:** displayed as round-boxed items, right-justified.
- **Description:** Structured into "Mission Title" and "Mission Description".

**Status**
: `done`

**Branch**
: `feature/4-experience-page`

**PR**
: [#2](https://github.com/yscialom/CrispCV/pull/2)

**Release**
: `v0.1.0`

---

## Keyword-based Filtering and Statistics

**ID**
: `5`

**Description**
: Enhance keyword interactivity. Clicking a keyword highlights all experience cards sharing that keyword. Hovering over a keyword reveals a tooltip showing the total accumulated duration of experience for that specific skill across all positions.

**Status**
: `done`

**Branch**
: `feature/5-keyword-filtering-statistics`

**PR**
: [#23](https://github.com/yscialom/CrispCV/pull/23)

**Release**
:

---

## Experience Card Permalinks and Sharing

**ID**
: `6`

**Description**
: Implement deep-linking for all card-based entries across the application (Experience, Education, About Me).

_Global ID & Routing:_

- **Global Counter:** Assign a unique, incremental integer (`<id>`) to every card entry across the entire application. The counter starts at 1 for the oldest entry (chronologically sorted across all Experience, Education, and About data).
- **Anchor Format:**
  - Experience: `#<company>-<start-date>-<id>`
  - Education: `#<institution>-<degree>-<date>-<id>`
  - About (Projects/Volunteering): `#<project>-<id>` or `#<institution>-<id>`
    (Note: All strings are slugified: lowercase, hyphens instead of spaces/special chars).
- **Short Links:** Implement a root-level route `/:id` (e.g., `https://resume.com/42`) that automatically redirects to the correct page and anchor (e.g., `/experience#google-2020-42`).

_UI/UX:_

- **Link Icon:** Add a specific "Link" icon (FontAwesome or Unicode) in the top-right corner of every card.
- **Hover Effect:** The icon should be hidden by default and only visible when the user hovers over the card.
- **Action:** Clicking the icon copies the **Short Link** (`domain.com/<id>`) to the clipboard.
- **Feedback:** Display a small, non-intrusive "toast" notification confirming the copy action.
- **Highlighting:** When navigating to a permalink, the target card should be visually highlighted (e.g., a temporary glow or flash) to orient the user.

**Status**
: `done`

**Branch**
: `feature/6-experience-permalinks`

**PR**
: [#15](https://github.com/yscialom/CrispCV/pull/15)

**Release**
: `v0.1.0`

---

## Sticky Navbar

**ID**
: `7`

**Description**
: Ensure the top navigation bar remains visible at the top of the viewport when scrolling.

- **Visual Feedback:** When sticky, the navbar should have a subtle shadow as a visual separator from the content.
- **Dynamic Shrinking:** As the navbar becomes sticky, the professional summary (description) should disappear, and the navigation tabs should move up, resulting in a reduced navbar height.
- **Smooth Transitions:** All changes (height, opacity of elements, shadow) must transition smoothly.
- **Layering:** The navbar must always remain on top of the page content.
- **Mobile:** This behavior applies to both desktop and mobile devices.

**Status**
: `done`

**Branch**
: `feature/7-sticky-navbar`

**PR**
: [#10](https://github.com/yscialom/CrispCV/pull/10)

**Release**
: `v0.1.0`

---

## Education Page

**ID**
: `8`

**Description**
: Implement the "Education" page, accessible via the "Education" link in the top navbar. This page displays the academic background from the configuration file as a list of "Education Cards", following the same visual style and layout as the Experience page.

_Layout_:

```text
+-----------------------------------------------------------------------+
|  [Degree]                                                [Location]   |
|  [Institution]                                         [Date Range]   |
|                                                                       |
|                     -------------------------                         |
|  [Optional Description Paragraph...]                                  |
|                                                                       |
+-----------------------------------------------------------------------+
```

_Key Features_:

- **Education Card:** One card per degree.
- **Consistency:** Mimics the Experience card's typography, spacing, and interaction patterns.
- **Optional Content:** Displays a description if provided in the configuration.
- **Route:** Accessible at `/education`.

**Status**
: `done`

**Branch**
: `feature/8-education-page`

**PR**
: [#4](https://github.com/yscialom/CrispCV/pull/4)

**Release**
: `v0.1.0`

---

## Multilingual Support

**ID**
: `9`

**Description**

: provide multilingual support with language selection in the top navbar.

_Technical considerations:_

- **Library:** Use `ngx-translate` for runtime translation and easy switching.
- **UI Strings (Translation Software Compatible):** UI labels (e.g., "Experience", "Present") must be stored in standard JSON files (e.g., `assets/i18n/fr_FR.json`). This format is widely supported by translation management software (Lokalise, Crowdin, Weblate, etc.).
- **Profile Data (Developer Friendly):** The resume content remains in TypeScript configuration files (e.g., `config/profile.fr_FR.ts`) to maintain type safety and developer ergonomics.
- **Build-Time Registry:** A custom script (`tools/generate-profile-registry.ts`) will run before the build. It scans the `config/` directory and generates a strongly-typed registry file (`src/app/core/profile.registry.ts`).
  - **Type Safety:** The registry must use the `Resume` interface (not `any`) to ensure type safety across all profiles: `export const PROFILES: Record<string, Resume> = { ... };`
  - **Language List:** The supported languages list is derived automatically from the existing profile files.
- **UI:** A dropdown in the navbar displaying the flag and language name.
- **Fallback:** If a profile is available in a language the UI is not, the UI should fallback to English strings while displaying the localized profile content.

**Status**
: `done`

**Branch**
: `feature/9-multilingual-support`

**PR**
: [#18](https://github.com/yscialom/CrispCV/pull/18)

**Release**
: `v0.2.0`

---

## Localization of Dates and Numbers

**ID**
: `17`

**Description**
: Standardize and localize all date and number displays throughout the application using `ngx-translate` and the native `Intl` API, ensuring clarity and consistency across locales.

_Data Integrity & Formatting Rules:_

- **Source Format:** All dates in `config/profile.*.ts` must strictly use ISO-8601 formats (`YYYY-MM-DD`, `YYYY-MM`, or `YYYY`).
- **Display Format:**
  - Full dates (`YYYY-MM-DD`) render as `DD mmm. YYYY` (e.g., "10 Jan. 2026" in English, "10 janv. 2026" in French).
  - Partial dates (`YYYY-MM`) render as `mmm. YYYY` (e.g., "Jan. 2026").
  - Year-only dates (`YYYY`) render as `YYYY`.
- **Tooltips:** Any rendered date should include a tooltip showing the original `YYYY-MM-DD` format (when a full date is available) to avoid any ambiguity.
- **Duration Pipe:**
  - Maintain the "half-year" rounding logic (e.g., `1.5 years`).
  - Ensure the decimal separator is localized (e.g., `1.5` for `en_US` vs `1,5` for `fr_FR`).

_Implementation Details:_

- **DateRangePipe:** A new pipe to handle the "Start - End (Duration)" logic centrally, replacing manual template concatenation.
- **About Page:** The `birthDate` and `age` must be localized.
- **Technical Integration:**
  - All localization pipes must be reactive to language changes.
  - Internal locale identifiers (`en_US`, `fr_FR`) will be mapped to proper BCP 47 tags (e.g., `en-US`, `fr-FR`) for the `Intl` API.

**Status**
: `done`

**Branch**
: `feature/17-localization-dates-numbers`

**PR**
: [#20](https://github.com/yscialom/CrispCV/pull/20)

**Release**
: `v0.2.0`

---

## Dark/Light Theme Switch

**ID**
: `10`

**Description**
: Implement a user-controlled dark/light theme switch to enhance accessibility and user preference.

_Features_:

- **UI Placement:** Located in the top-right corner of the navbar (e.g., near the profile name or future language switch).
- **Iconography:** Use FontAwesome icons (sun/moon) to indicate the current or toggleable state.
- **Persistence:** Save the user's choice in `localStorage` with a 3-month expiry.
- **Auto-Detection:**
  - On first load (if no valid saved preference exists), detect the user's system preference via `prefers-color-scheme`.
  - Fallback to the application default (`dark`) if no system preference is found.
- **Styling:**
  - Define both dark and light color palettes in a single SCSS file (using CSS variables).
  - Ensure a smooth visual transition (e.g., `transition: background-color 0.3s, color 0.3s`) when switching themes.

**Status**
: `done`

**Branch**
: `feature/10-dark-light-theme`

**PR**
: [#12](https://github.com/yscialom/CrispCV/pull/12)

**Release**
: `v0.1.0`

---

## Publish to GitHub Pages

**ID**
: `11`

**Description**
: Add a GitHub Actions workflow to publish the application to GitHub Pages.
The workflow triggers on pushes to `main` or the orphan branch `pages`.
It checks out the code from `main` but retrieves the specific `config/profile.*.ts` from the `pages` branch (if it exists) to allow for private configuration.
It builds the application using `npm` and deploys the artifact to GitHub Pages.

**Status**
: `done`

**Branch**
: `feature/11-publish-to-github-pages`

**PR**
: [#16](https://github.com/yscialom/CrispCV/pull/16)

**Release**
: `v0.1.0`

---

## Additional CI/CD Workflows

**ID**
: `16`

**Description**
: Implement supplementary CI/CD workflows to ensure code quality and facilitate distribution.

1.  **GitHub Pages Deployment (Update):**
    - **Trigger:** Pushes to `main` AND `pages`.
    - **Behavior:**
      - Checks out `main`.
      - If the trigger was `pages` (or if `pages` exists), it checks out `config/profile.*.ts` from the `pages` branch overlaying the `main` branch's configuration.
      - Builds and deploys to GitHub Pages.
      - **Fix:** Ensure the workflow actually runs on pushes to `pages` (currently not triggering reliably).

2.  **Pull Request Validation:**
    - **Trigger:** Pull Requests targeting `develop`.
    - **Actions:**
      - Run Unit Tests (`make test`).
      - Build the Docker image (`make build-prod-image`) to ensure buildability.
    - **Policy:** The PR merge must be blocked if this workflow fails.

3.  **Release & Publication:**
    - **Trigger:** Pushing a git tag matching the pattern `v*` (e.g., `v1.2.3`).
    - **Actions:**
      - Build the production Docker image.
      - **Registries:** Push to both:
        - GitHub Container Registry (`ghcr.io/yscialom/crispcv`)
        - Docker Hub (`yankelscialom/crispcv`)
      - **Tagging Strategy:**
        - For a tag `v1.2.3`:
        - Push tags: `1.2.3`, `1.2`, `1`, and `latest`.
        - This ensures major and minor version aliases are always up-to-date.

**Status**
: `done`

**Branch**
: `feature/16-ci-cd-workflows`

**PR**
: [#21](https://github.com/yscialom/CrispCV/pull/21)

**Release**
: `v0.2.0`

---

## 'About Me' Page

**ID**
: `12`

**Description**

: Implement an "About Me" ("À propos de moi" in French) page to display personal details, links, and additional background. All fields are optional and data is pulled from the configuration file.

_Layout_:

```text
+-----------------------------------------------------------------------------------------------+
|  About Me ("À propos de moi")                                                                 |
|                                                                                               |
|  +--------------------------------+   +---------------------------------------------------+   |
|  | [Personal Info]                |   | [Description (Markdown)]                          |   |
|  |                                |   |                                                   |   |
|  | Date of birth : [DoB] ([Age])  |   | [Social Links]                                    |   |
|  | Nationality : [Nationality]    |   | [Icon] [Link Text]  [Icon] [Link Text] ...        |   |
|  | Location : [Location]          |   |                                                   |   |
|  | Phone : [Phone]                |   +---------------------------------------------------+   |
|  | Email : [Email]                |                                                           |
|  | License : [Driving License]    |                                                           |
|  |                                |                                                           |
|  | [Languages]                    |                                                           |
|  | [Language Name]  [Dots]        |                                                           |
|  | (Tooltip on hover: Level Text) |                                                           |
|  |                                |                                                           |
|  | [Hobbies]                      |                                                           |
|  | [Tag] [Tag] [Tag] ...          |                                                           |
|  +--------------------------------+                                                           |
|                                                                                               |
|  [Volunteering ("Bénévolat")]                                                                 |
|  +-----------------------------------------------------------------------+                    |
|  |  [Role]                                                  [Date Range] |                    |
|  |  [Organization]                                                       |                    |
|  |                                                                       |                    |
|  |  [Description Paragraph...]                                           |                    |
|  |                                                                       |                    |
|  +-----------------------------------------------------------------------+                    |
|                                                                                               |
|  [Personal Projects ("Projets personnels")]                                                   |
|  +-----------------------------------------------------------------------+                    |
|  |  [Project Name] (Link)                                   [Date Range] |                    |
|  |                                                                       |                    |
|  |                                        (Technology) (Technology) ...  |                    |
|  |                     -------------------------                         |                    |
|  |  [Description Paragraph...]                                           |                    |
|  |                                                                       |                    |
|  +-----------------------------------------------------------------------+                    |
|                                                                                               |
+-----------------------------------------------------------------------------------------------+
```

_Key Features_:

- **Personal Info:**
  - **Date of Birth:** Displayed as "YYYY-MM-DD (Age years old)".
  - **Formatting:** In French, colons are preceded by a non-breaking space (e.g., " : ").
- **Languages:**
  - displayed as a list with name and a visual "dots" indicator (1-5).
  - **Tooltip:** Hovering over the dots displays the text equivalent of the level (e.g., "Native", "Fluent").
- **Social Links:**
  - displayed with a favicon-size icon to the left of the text.
- **Volunteering & Projects:**
  - **Card Layout:** Use the exact same card layout as the "Experience" page (using `app-resume-entry` or similar structure).
  - **Projects:**
    - Title is "Projets personnels" (lowercase 'p').
    - Include **Start Date** and **End Date**.
    - **Keywords:** Display technologies using the same round-boxed style as experience/education keywords.

**Status**
: `done`

**Branch**
: `feature/12-about-me-page`

**PR**
: [#8](https://github.com/yscialom/CrispCV/pull/8)

**Release**
: `v0.1.0`

---

## Remove External CDN Dependencies

**ID**
: `13`

**Description**
: To ensure privacy, security, and offline availability, all external assets must be bundled locally. The application currently relies on CDN links for Font Awesome and the Lato font. These should be replaced by standard npm dependencies.

_Requirements:_

- **Add Dependencies:** Include `@fortawesome/fontawesome-free` and `@fontsource/lato` in `package.json`.
- **Automatic Installation:** These packages must be installed automatically as part of the standard `npm install` process, which is already integrated into the `make start` and `make build` commands.
- **Implementation:**
  - Remove `<link>` tags for Font Awesome and Google Fonts from `index.html`.
  - Import the styles (CSS/SCSS) from the installed `node_modules` directly into `src/styles.scss`.

**Status**
: `done`

**Branch**
: `feature/13-remove-cdn`

**PR**
: [#14](https://github.com/yscialom/CrispCV/pull/14)

**Release**
: `v0.1.0`

---

---

## Footer

**ID**
: `15`

**Description**
: Add a simple, discreet footer at the bottom of the application.

- **Content:** "static résumé &mdash; Yankel Scialom &mdash; link 'for us on github'".
- **Link:** The text "for us on github" should link to `https://github.com/yscialom/crispcv` and open in a new tab.
- **Style:** Discreet, centered, consistent with the app's minimal aesthetic. Implementation ensures it stays at the bottom of the screen on short pages.

**Status**
: `done`

**Branch**
: `feature/15-footer`

**PR**
: [#11](https://github.com/yscialom/CrispCV/pull/11)

**Release**

: `v0.1.0`

---

## Mobile Hamburger Menu

**ID**
: `18`

**Description**
: Implement a collapsible hamburger menu for the top navbar on mobile devices to handle varying navigation link lengths across different languages and screen sizes.

- **Mobile Behavior**:
  - Navigation links are hidden by default in a collapsed state.
  - A "Menu" toggle button (with a hamburger icon ☰) appears below the profile identity.
  - Clicking the toggle expands a full-width vertical navigation list.
  - The menu can be closed via the same toggle (switched to a close icon ✖).
- **Desktop Behavior**:
  - The layout MUST remain unchanged (horizontal tabs).
- **Smoothness**: The expansion and collapse should be animated for a polished feel.

**Status**
: `done`

**Branch**
: `feature/18-mobile-hamburger-menu`

**PR**
: [#24](https://github.com/yscialom/CrispCV/pull/24)

**Release**
:

---

## Certifications

**ID**
: `19`

**Description**
: Add a new "Certifications" section to the Education page. This section displays professional certifications from the configuration file, following the same visual style as education and experience cards.

- **Data Model:** Includes certification name, organization, date, optional location, description, and an optional verification link.
- **Layout:** Displayed below the Education section on the `/education` page. If a verification link is provided, it is displayed as "View certificate" with an external link icon, matching the style of project links.
- **Permalinks:** Each certification entry has its own unique ID and permalink fragment (e.g., `#scrum-alliance-certified-scrummaster-csm-2019-19`).
- **Consistency:** Uses the `app-resume-entry` component for a uniform look and feel.

**Status**
: `done`

**Branch**
: `feature/19-certifications`

**PR**
: [#24](https://github.com/yscialom/CrispCV/pull/24)

**Release**
:

---

## Print Layout & Button

**ID**
: `20`

**Description**
: Enhance the application with a dedicated print mode to produce a clean, professional PDF or paper copy of the resume.

_Features_:

- **Print Button:** A dedicated "print" icon in the navbar (right of the theme selector) that triggers the browser's print dialog (`window.print()`).
- **Print Layout (`@media print`):**
  - **Global Cleanup:** Hides all dynamic/interactive elements: navbar links, theme/language toggles, hamburger menu, "View project/certificate" links, and the footer.
  - **Layout Structure:**
    - **Float-based Sidebar:** A Left Sidebar (25% width) floated to the left.
    - **Dynamic Flow:** Content (Experience, Education) flows next to the sidebar on the first page and automatically expands to 100% width on subsequent pages (or once the sidebar ends).
    - **Left Sidebar Content:**
      1.  **Identity:** Profile picture, Name, Title, and Summary (from Navbar).
      2.  **Personal Info:** Date of birth, contact details, etc. (with added vertical spacing between items).
      3.  **About Me:** The detailed description from the "About" page.
    - **Main Content Content:**
      1.  **Experience:** Full list of experience cards.
      2.  **Education:** Academic background.
      3.  **Certifications:** Professional certifications.
      4.  **Volunteering & Projects:** Additional sections.
  - **Styling:**
    - Removes box shadows and background colors that waste ink.
    - Adjusts margins and font sizes for A4/Letter readability.
    - Prevents awkward page breaks inside cards.
    - Adds visual vertical separators for resume entries (3pt black left border).

**Status**
: `done`

**Branch**
: `feature/20-print-layout`

**PR**
: none

**Release**
:
