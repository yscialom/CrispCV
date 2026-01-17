# Contributing to CrispCV

Thank you for your interest in contributing to CrispCV! This project follows a structured process to ensure high-quality code and clear documentation.

## How to Contribute

### 1. Requesting a Feature or Reporting a Bug

All features and bug fixes must be documented in `docs/specs.md` before implementation begins.

1.  **Open an Issue:** Describe the feature or bug on GitHub.
2.  **Add to Specifications:** Add a new entry to `docs/specs.md` following the existing format:
    - **ID**: Next sequential integer.
    - **Description**: Detailed user story and technical requirements.
    - **Status**: `idea` or `todo`.
    - **Branch**: `feature/<ID>-<short-description>`.

### 2. Implementation Process

Once a feature is in `todo` status:

1.  **Create a Feature Branch:** Branch out from `main` using the name specified in `docs/specs.md`.
2.  **Development:**
    - Mimic existing code style and architectural patterns (Hexagonal Architecture, Signals, Zoneless).
    - Use the provided tools: `make lint`, `make format`, and `make test`.
    - **Unit Tests are mandatory** for all new features and logic.
3.  **Docker:** Use Docker for development and building. Refer to `docs/docker.md` for instructions.

### 3. Adding Translations

CrispCV is designed for easy localization.

1.  **New Profile Content:**
    - Create a new file in `config/profile.<locale>.ts` (e.g., `config/profile.es_ES.ts`).
    - Copy an existing profile and translate the content.
2.  **UI Translations:**
    - Add a corresponding JSON file in `public/assets/i18n/<locale>.json`.
    - Translate all UI strings used in the application.
3.  **Verification:** The `generate-profile-registry.js` script will automatically pick up your new profile during the build process.

### 4. Pull Requests

1.  **Push your branch** to your fork or the repository.
2.  **Open a Pull Request** targeting the `main` branch.
3.  **Update `docs/specs.md`**: Update the `Status` to `wip` during development and include the PR number once created.
4.  **Continuous Integration:** Ensure all CI checks (linting, tests, build) pass.

## Code Standards

- **Architecture:** CrispCV uses a clean, hexagonal-like architecture. Keep business logic in services and UI in components.
- **Signals:** Use Angular Signals for all state management.
- **Styling:** Use SCSS with the provided mixins and variables in `config/`. Ensure responsiveness and accessibility.
- **Documentation:** Keep `docs/*.md` up to date with any architectural or stylistic changes.

---

By contributing, you agree that your contributions will be licensed under the project's [LICENSE](LICENSE).
