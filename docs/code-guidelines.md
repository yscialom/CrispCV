# Code Guidelines

This document outlines the coding standards and guidelines for this project, ensuring consistency, readability, and maintainability across the codebase. Adherence to these guidelines is crucial for collaborative development and code quality.

## 1. General Principles

- **Readability**: Code should be easy to understand for anyone reading it.
- **Consistency**: Follow existing patterns and conventions within the project.
- **Maintainability**: Write code that is easy to modify and extend.
- **Performance**: Consider performance implications, especially in critical paths.

## 2. Formatting

Code formatting is enforced automatically using **Prettier** for TypeScript, JavaScript, HTML, JSON, Markdown, and **Stylelint** for SCSS files. Developers should configure their IDEs to use these tools for automatic formatting on save.

To format the entire codebase, use the following `make` command:

```bash
make format
```

### 2.1 Prettier Configuration

Prettier handles most of the formatting. The `.prettierrc` file defines the rules, including:

- `printWidth`: 100 characters
- `singleQuote`: true
- `overrides`: Specifically targets `.html` files for Angular template formatting.

### 2.2 Stylelint Configuration

Stylelint is used for SCSS-specific formatting and linting rules. The `.stylelintrc.json` file dictates these rules, ensuring consistency in stylesheets.

## 3. Linting

Code linting is performed using **ESLint** for TypeScript and **Stylelint** for SCSS. This helps catch potential errors, enforce best practices, and maintain code quality.

To run lint checks on the entire codebase, use the following `make` command:

```bash
make lint
```

### 3.1 ESLint Configuration

ESLint is configured via `.eslintrc.json`, extending recommended rules from `@angular-eslint` and `@typescript-eslint`, and integrating with Prettier to avoid conflicts. Key rules include:

- Angular selector conventions (prefix `app`, `camelCase` for attributes, `kebab-case` for elements).

### 3.2 Type Checking

TypeScript type checking is an integral part of the build process and is configured in `tsconfig.json` and `tsconfig.app.json`. Ensure that your code compiles without type errors.

**Explicit Typing**: Prioritize explicit type annotations for function arguments and return values. For variables, use explicit typing where it enhances readability or prevents subtle errors, but favor inference for local variables when the type is obvious. Only omit explicit types where inference leads to a more generic or equally clear type, or when dealing with complex object literals where inference is precise and exhaustive.

## 4. Naming Conventions

- **Variables and Functions**: `camelCase` (e.g., `myVariable`, `calculateTotal`).
- **Classes and Interfaces**: `PascalCase` (e.g., `MyClass`, `MyInterface`).
- **Constants**: `UPPER_SNAKE_CASE` (e.g., `API_KEY`, `MAX_RETRIES`).
- **Files**: `kebab-case` (e.g., `my-component.ts`, `my-service.ts`).

## 5. Comments

- Use comments sparingly. Code should be self-documenting as much as possible.
- Explain _why_ a particular piece of code exists, rather than _what_ it does.
- Use JSDoc for public API functions, classes, and interfaces.

## 6. Typescript Specific Guidelines

- Use strict type checking.
- **Explicit Typing**: All function and method arguments and return values must be explicitly typed, even if the type can be inferred.
- **Type Inference**: Prefer type inference for local variables when the type is obvious and explicit typing doesn't add clarity.
- Avoid the `any` type; use `unknown` when type is uncertain.

## 7. Angular Specific Guidelines

- **Components**:
  - Keep components focused on a single responsibility.
  - Use **Standalone Components** for all new development.
  - Apply `changeDetection: ChangeDetectionStrategy.OnPush` to all components for optimal performance.
  - Prioritize "dumb" (presentation) vs "smart" (container) component architecture.
- **Signals & Inputs**:
  - **Signals**: Embrace Angular Signals for all local state and reactivity.
  - **Inputs**: Use **Signal Inputs** (`input()`, `input.required()`) instead of the `@Input()` decorator.
  - **Outputs**: Use `output()` instead of `@Output()` where applicable.
- **Control Flow**:
  - Use the new built-in control flow syntax (`@if`, `@for`, `@switch`) instead of structural directives (`*ngIf`, `*ngFor`, `*ngSwitch`).
- **Services**: Use services for shared logic, data retrieval, and business rules.
- **Zoneless**: Develop with zoneless change detection in mind.
- Must NOT set `standalone: true` inside Angular decorators. It's the default in Angular v20+.
- Use signals for state management
- Implement lazy loading for feature routes
- Do NOT use the `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator instead
- Use `NgOptimizedImage` for all static images.
- `NgOptimizedImage` does not work for inline base64 images.

## 8. Accessibility Requirements

- It MUST pass all AXE checks.
- It MUST follow all WCAG AA minimums, including focus management, color contrast, and ARIA attributes.

### Components

- Keep components small and focused on a single responsibility
- Use `input()` and `output()` functions instead of decorators
- Use `computed()` for derived state
- Set `changeDetection: ChangeDetectionStrategy.OnPush` in `@Component` decorator
- Prefer inline templates for small components
- Prefer Reactive forms instead of Template-driven ones
- Do NOT use `ngClass`, use `class` bindings instead
- Do NOT use `ngStyle`, use `style` bindings instead
- When using external templates/styles, use paths relative to the component TS file.

## State Management

- Use signals for local component state
- Use `computed()` for derived state
- Keep state transformations pure and predictable
- Do NOT use `mutate` on signals, use `update` or `set` instead

## Templates

- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables
- Do not assume globals like (`new Date()`) are available.
- Do not write arrow functions in templates (they are not supported).

## Services

- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- Use the `inject()` function instead of constructor injection

## 9. Git Commit Messages

Follow the Conventional Commits specification. Each commit message should be structured as follows:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

Example: `feat(users): add user profile page`

Common types include: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`, `build`, `ci`.

**Note on Merge Commits to `develop`:** When merging a feature branch into `develop`, the merge commit message **must** be `[<feature id>] <description> (#<PR number>)`. Example: `[42] add user profile page (#56)`. This ensures traceability to the Pull Request.
