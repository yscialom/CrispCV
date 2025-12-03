# Application Features & Specifications

This document tracks all features, from initial ideas to completed implementations. It serves as a single source of truth for the project's scope and progress, in alignment with the "Showcase Quality Code" principle.

## How This Document is Structured

Each feature is documented in its own section. A feature section is a level-2 heading (`##`) and contains the following key-value pairs presented as a definition list:

-   **ID**
    : A unique, sequential integer identifying the feature.

-   **Description**
    : A detailed explanation of the feature, its purpose, user-facing value, and technical requirements.

-   **Status**
    : The current state of the feature. Must be one of the following:
    -   `idea`: A feature that has been proposed but not yet planned.
    -   `todo (priority: X)`: A feature that is planned for development. `X` is a number from 0 (highest priority) to 10 (lowest priority, will likely not be implemented).
    -   `wip`: The feature is currently in progress.
    -   `done`: The feature has been completed, tested, and merged.

-   **Branch**
    : The name of the git feature branch, formatted as `feature/<ID>-<short-description>` (e.g., `feature/42-make-coffee`).

-   **PR**
    : The pull request number associated with the feature's implementation (e.g., `#42`).

-   **Release**
    : The semantic version number of the application in which this feature was (or will be) included (e.g., `v1.0.0`).

---

## Initial Project & Documentation Setup

**ID**
: `1`

**Description**
: Initialize the Angular application and create the foundational documentation structure. This includes setting up the core project files (`angular.json`, `package.json`, etc.), configuring Docker for a consistent development and build environment (`Dockerfile`, `Makefile`), and creating the initial set of markdown documents (`GEMINI.md`, `docs/style.md`, `docs/technical.md`, `docs/specs.md`) to guide development. The goal is to establish the standards and architecture for the "Showcase Quality Code" principle from the outset.

**Status**
: `wip`

**Branch**
: `feature/1-initial-setup`

**PR**
: 

**Release**
: 
