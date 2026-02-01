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
