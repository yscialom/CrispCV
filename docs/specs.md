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
  - `todo (priority: X)`: A feature that is planned for development. `X` is a number from 0 (highest priority) to 10 (lowest priority, will likely not be implemented).
  - `wip`: The feature is currently in progress.
  - `done`: The feature has been completed, tested, and merged.

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
: #1

**Release**
:
