# Technical Guidelines

This document outlines the technical architecture, standards, and practices for the project. It is intended to ensure the codebase remains clean, maintainable, and easy for any developer to understand and contribute to.

## 1. Core Principles & Philosophy

The entire application is built on a foundation of modern software design principles.

- **Framework:** The project uses **Angular 21+**, leveraging its latest features, including **Zoneless** change detection and a universal reliance on **Signals** for state management and data flow.
- **SOLID:** Every component, service, and class is designed with the SOLID principles in mind:
  - **S**ingle Responsibility: Each file has one job.
  - **O**pen/Closed: Extensible without modification.
  - **L**iskov Substitution: Subtypes are substitutable for their base types.
  - **I**nterface Segregation: Components do not depend on methods they don't use.
  - **D**ependency Inversion: High-level modules do not depend on low-level modules; both depend on abstractions.
- **Clean Code:** The code must be self-documenting, readable, and simple.
- **Showcase Quality Code:** This project serves a dual purpose. While it functions as a developer résumé, the source code itself is a primary exhibit of professional skill and craftsmanship. It will be referenced in the résumé, and as such, its quality is a goal in itself. We will not cut corners for practicality; instead, every line of code, every architectural decision, and every commit will reflect a commitment to the highest standards of software engineering.

## 2. Architecture

A **Hexagonal Architecture (Ports and Adapters)** approach is used to isolate the core application logic from external concerns like data sources and UI frameworks.

- **The Core (Inside):** The résumé data structure itself and the `ResumeDataService` that manages access to it.
- **Ports:** Abstract interfaces defining how the application interacts with the outside world. In TypeScript, these are represented by `abstract class` or `InjectionToken` constructs.
- **Adapters (Outside):**
  - **Primary/Driving Adapters:** The Angular components that render the UI. They are the entry point for user interaction.
  - **Secondary/Driven Adapters:** The mechanism that provides the résumé data. This is currently a TypeScript file (`.ts`) that exports the data, but the hexagonal approach ensures this could be swapped for an HTTP client or any other data source with minimal changes to the core application.

### Folder Structure

```
src/app/
├── core/
│   ├── services/       # Core services like ResumeDataService
│   └── models/         # TypeScript interfaces for data structures
├── data/
│   └── resume.data.ts  # The static data source for the application
├── features/
│   ├── experience/     # Components related to the Experience section
│   └── education/      # Components related to the Education section
├── shared/
│   └── components/     # Reusable components (e.g., buttons, cards)
└── ...
```

## 3. Data & State Management

- **Data Source:** All résumé data is sourced from a single TypeScript file: `src/app/data/resume.data.ts`. This file exports the data structure as a constant, ensuring it's loaded at runtime.
- **State Service:** A singleton service, `ResumeDataService`, is the single source of truth for application state. It imports the data from `resume.data.ts` and stores it in **Signals**.
- **Data Flow:** Components access data exclusively through one of two mechanisms:
  1.  `inject()`: For direct access to the `ResumeDataService` within a component's constructor context.
  2.  `input()`: For parent components to pass slices of data down to child components using Angular's new input signal function.

## 4. Unit Testing

- **Frameworks:** The project uses Angular's default testing stack: **Karma** (test runner) and **Jasmine** (assertion library).
- **Guiding Principles:**
  - **Independence:** Each `it()` block must be fully independent. Use `beforeEach()` to set up a clean state for every test.
  - **Mocking:** Isolate the unit under test. Services and dependencies must be mocked to ensure tests are fast, reliable, and test only one thing.
  - **DOM Testing:** When verifying a component's output, interact with the DOM by selecting elements via unique `id` attributes. Use Angular's `DebugElement` and `nativeElement` APIs for this purpose.

## 5. Code Quality & Tooling

To maintain a "crisp and comprehensible" codebase, the following tools and standards are enforced.

### 5.1 Code Guidelines

Detailed coding standards, formatting rules, and best practices are outlined in [docs/code-guidelines.md](./code-guidelines.md). All developers are expected to adhere to these guidelines.

- **Linter (ESLint):** A strict ESLint configuration is used, incorporating `eslint-plugin-angular` and other plugins to enforce modern Angular best practices.
- **Formatter (Prettier):** Prettier is configured to automatically format all code, ensuring a consistent style across the entire project. No code that fails Prettier's checks will be accepted.
- **Scripts:** The following scripts are available in `package.json`:
  - `npm run lint`: To manually run the linter.
  - `npm run format`: To manually format the entire codebase.

### 5.2 Pre-commit Hook (Manual Setup)

To automate code quality checks, you can use a pre-commit hook to run linting and formatting before each commit. This ensures that no code that violates the project's style guidelines is committed.

**Manual Installation:**

Because the `.git/hooks` directory is not tracked by Git, you need to create the pre-commit hook manually.

1.  Create a file named `pre-commit` inside the `.git/hooks` directory:

    ```bash
    touch .git/hooks/pre-commit
    ```

2.  Make the script executable:

    ```bash
    chmod +x .git/hooks/pre-commit
    ```

3.  Add the following content to the `.git/hooks/pre-commit` file:

    ```sh
    #!/bin/sh
    echo "Running pre-commit hook..."

    # Run lint
    echo "Running make lint..."
    make lint
    if [ $? -ne 0 ]; then
        echo "Linting failed. Commit aborted."
        exit 1
    fi

    # Run format
    echo "Running make format..."
    make format
    if [ $? -ne 0 ]; then
        echo "Formatting failed. Commit aborted."
        exit 1
    fi

    echo "Pre-commit hook passed."
    exit 0
    ```

This hook will now run automatically before each `git commit`. If a hook fails, the commit will be aborted. You must fix the issues and stage the changes before re-attempting the commit.

## 6. TypeScript Guidelines

We adhere to the strictest TypeScript settings to ensure maximum type safety and code quality.

- **Strict Mode:** `strict: true` must be enabled in `tsconfig.json`.
- **No `any`:** The use of the `any` type is forbidden. Use `unknown` for values whose type is not known at compile time, followed by proper type-checking.
- **Types vs. Interfaces:** Use `interface` for defining the shape of public-facing data structures and objects. Use `type` for creating utility types, unions, and other complex type manipulations.
- **Immutability:** Favor immutable data structures. Use the `readonly` modifier for properties on interfaces and `Readonly<T>` for arrays where applicable to prevent accidental mutations.
- **Naming Conventions:**
  - `PascalCase` for types, interfaces, classes, and enums.
  - `camelCase` for functions and variables.
  - Private properties must use the `private` keyword and should not be prefixed with an underscore.

## 7. HTML & Template Guidelines

HTML templates must be clean, semantic, highly accessible, and as simple as possible in their structure, minimizing unnecessary nesting to enhance readability and maintainability.

- **Minimal Nesting:** Strive for the simplest possible HTML structure. Avoid excessive `div` nesting where a more semantic tag or direct placement of content would suffice. This improves readability and simplifies CSS targeting.

- **Semantic HTML:** Always use appropriate HTML5 elements (`<nav>`, `<main>`, `<section>`, `<article>`, etc.) to accurately represent the structure and meaning of the content.
- **Accessibility (A11y):** All templates must be fully accessible. This includes providing `alt` attributes for images, using ARIA attributes where semantic HTML is insufficient, and ensuring form controls are properly labeled.
- **Test Hooks:** Use `id` attributes for selecting elements in unit tests. For more complex applications or to clearly distinguish from styling hooks, `data-testid` is a preferred alternative.
- **Template Logic:** Keep logic in templates to a minimum. Complex expressions, transformations, or calculations should be handled by the component's TypeScript class.

## 8. CSS (SCSS) Guidelines

All styling is written in SCSS to leverage its advanced features and promote maintainable, scalable, simple, and readable CSS.

- **Readability & Simplicity:** Prioritize clear, straightforward selectors. While SCSS nesting is powerful, avoid overly deep or complex nesting that can hinder readability and lead to specificity issues. Aim for a flat structure where appropriate, leveraging variables and mixins for efficiency rather than complex selectors.

- **Scoped Styles:** Always use Angular's built-in style encapsulation. Global styles should be avoided and reserved only for foundational theme setup (e.g., fonts, theme colors).
- **BEM Naming Convention:** Adhere to the Block, Element, Modifier (BEM) methodology for naming CSS classes (e.g., `.resume-card__title--highlighted`). This creates a clear, hierarchical, and conflict-free styling system.
- **SCSS Features:** Leverage SCSS variables, nesting, and mixins to write DRY (Don't Repeat Yourself) code.
- **Units:** Use `rem` for scalable properties like `font-size`, `margin`, and `padding`. Use `px` only for properties that must remain fixed, suchs as `border-width`.
- **No Magic Numbers:** All colors, font families, font sizes, and spacing units must be sourced from a central SCSS variables file that reflects the design tokens in `docs/style.md`.

## 9. Configuration Files

To promote consistency and allow for user-specific customization, global configuration variables are stored in dedicated SCSS files.

-   **Color Palettes (`_colors.scss`):** Global color definitions for both light and dark themes are located at the root of the Git repository in `config/_colors.scss`. This allows developers to easily adjust core theme colors without modifying the application's source code.
-   **Spacing and Layout Variables (`_spacing.scss`):** Variables related to spacing, font sizes, and common layout values are located within the application's source code at `src/app/config/_spacing.scss`. These are application-specific design tokens.