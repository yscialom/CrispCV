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
  - `done`: The feature has been completed, tested, and merged. **Note: A feature can only be set to `done` if explicitly asked by the user.**

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
:

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
: none

**Release**
:

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
: [#1](https://github.com/yscialom/vibed-resume/pull/1)

**Release**
:

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
: [#2](https://github.com/yscialom/vibed-resume/pull/2)

---

## Keyword-based Filtering and Statistics

**ID**
: `5`

**Description**
: Enhance keyword interactivity. Clicking a keyword highlights all experience cards sharing that keyword. Hovering over a keyword reveals a tooltip showing the total accumulated duration of experience for that specific skill across all positions.

**Status**
: `todo`

**Branch**
:

**PR**
:

**Release**
:

---

## Experience Card Permalinks and Sharing

**ID**
: `6`

**Description**
: Implement deep-linking for experiences. Clicking an experience card updates the URL with a unique permalink and automatically copies the full link to the clipboard. The application should handle these permalinks on load by scrolling to the relevant card.

**Status**
: `todo`

**Branch**
:

**PR**
:

**Release**
:

---

## Sticky Navbar

**ID**
: `7`

**Description**
**Status**
: `todo`

**Branch**
:

**PR**
:

**Release**
:

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
: [#4](https://github.com/yscialom/vibed-resume/pull/4)

**Release**
:

---

## Multilingual Support

**ID**
: `9`

**Description**

: provide multilingual support with language selection in the top navbar.

*Technical considerations:*

- **Date Parsing:** The `DurationPipe` currently has a `parseDate` method that handles English "Present" and French "Présent". This logic will need to be centralized and expanded to support all future languages.
- **UI Strings:** Hardcoded strings in components (e.g., language level labels like "Débutant", "Intermédiaire" in `AboutComponent`) must be moved to a translation system or configuration map.

**Status**
: `todo`

**Branch**
:

**PR**
:

**Release**
:

---

## Dark/Light Theme Switch

**ID**
: `10`

**Description**
: provide dark/light theme switch in the top navbar

**Status**
: `toto`

**Branch**
:

**PR**
:

**Release**
:

---

## Publish to GitHub Pages

**ID**
: `11`

**Description**
: add a github workflow to publish the app as github pages

**Status**
: `toto`

**Branch**
:

**PR**
:

**Release**
:

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
: `wip`

**Branch**
: `feature/12-about-me-page`

**PR**
: [#8](https://github.com/yscialom/vibed-resume/pull/8)

**Release**
:
