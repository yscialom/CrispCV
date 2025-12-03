# Docker Build & Run Documentation

This project uses Docker for building and running the application to ensure a consistent environment, as the host system does not have `node` or `npm` installed.

## Dockerfile

The `Dockerfile` is a multi-stage docker build.

-   **Stage 1: `builder`**
    -   Uses a `node:20-alpine` image.
    -   Copies the source code (`package.json`, `package-lock.json`, and the `src` directory).
    -   Installs npm dependencies (`npm install`).
    -   Builds the Angular application for production (`npm run build`). The output is generated inside the `/app/dist/boat-app/browser` directory of this intermediate container.

-   **Stage 2: Final Image**
    -   Uses a lightweight `lighttpd/lighttpd` image.
    -   Copies the built application artifacts from the `builder` stage into the web server's document root (`/var/www/localhost/htdocs`).
    -   Copies a custom `lighttpd.conf` to configure the server for a Single Page Application (SPA).
    -   Exposes port `80`.

## Makefile

A `Makefile` is provided to simplify common Docker operations.

### Targets

-   `make help`
    Prints a help message listing all available targets.

-   `make build` or `make`
    This is the default target. It performs the initial application build. It runs a temporary `node` container to execute `npm install` and `npm run build`. The resulting `dist/` directory is created on your **host machine**, which can then be used by other commands or for inspection.

-   `make start`
    Starts the development server. It runs the `ng serve` command within a `node` container, mounting your local `src` directory. This enables live-reloading. The application will be available at [http://localhost:4200](http://localhost:4200).

-   `make stop`
    Stops the development server container started with `make start`.

-   `make clean`
    Removes the `dist/` directory and `node_modules/` from your host machine.

-   `make dist-clean`
    This is an alias for `clean`.

### Code Quality Targets

The following targets ensure code quality and consistency by running linters and formatters within a Docker container, guaranteeing a consistent environment regardless of the host setup.

-   `make lint`: Runs ESLint checks on the codebase. Any errors or warnings will be reported.
-   `make format`: Runs Prettier to automatically format the entire codebase. This helps maintain a consistent code style.

### Production Simulation

While a formal production environment was not requested, you can build and run the production-like `lighttpd` image using the `Makefile`.

-   `make build-prod-image`: Builds the final Docker image using the `Dockerfile`.
-   `make start-prod`: Runs the production image in a container, serving the static files via `lighttpd` on [http://localhost:8080](http://localhost:8080).
-   `make stop-prod`: Stops the production container.
