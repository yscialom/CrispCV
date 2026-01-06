# Angular Resume / Portfolio

A professional, customizable, and high-performance single-page application (SPA) designed to showcase a developer's profile, experience, and skills. Built with modern Angular (Signals, Zoneless), SCSS, and Docker.

## 🚀 Features

- **Modern Stack**: Angular 21+, Standalone Components, Signals for state management.
- **Clean Design**: "Showcase Quality Code" philosophy, responsive layout, dark/light theme support.
- **Configurable**: Easily customize colors, content, and layout without touching core logic.
- **Auto-Deploy**: Built-in GitHub Actions workflow for seamless deployment to GitHub Pages.
- **Dockerized**: Zero-dependency development environment – just bring Docker and Make.

## 🛠 Prerequisites

- **Docker**: For running the development environment and building the application.
- **Make**: For executing project commands.

## 🏃 Quick Start (Live in 5 Minutes)

1.  **Fork this repository** to your own GitHub account.
2.  **Create a `pages` branch** (preferably an orphan branch) to store your personal configuration:
    ```bash
    git checkout --orphan pages
    git rm -rf .
    # Copy your customized config/profile.ts here
    git add config/profile.ts
    git commit -m "feat: add personal resume data"
    git push origin pages
    ```
3.  **Enable GitHub Pages**: In your repository settings, go to **Settings > Pages** and set the source to **GitHub Actions**.
4.  **Success!**: Your resume will be automatically built and deployed to `https://<your-username>.github.io/crispcv/`.

## 💻 Local Development

To start the development server with live reload:

```bash
make start
```

Open your browser and navigate to `http://localhost:4200`.

## 🔄 Full Workflow

### 1. Development (Iteration)

Work on the `develop` branch. Use `make start` to preview features and `make test`, `make lint`, `make format` to ensure code quality.

### 2. Configuration (Your Data)

Manage your resume data on the `pages` branch. The deployment workflow always pulls `config/profile.ts` from this branch, allowing you to keep your personal data separate from the main codebase updates.

### 3. Deployment (Production)

- **Code Updates**: Push or merge changes to the `main` branch.
- **Data Updates**: Push changes to the `pages` branch.
  Either action will trigger the **Deploy to GitHub Pages** workflow.

## ⚙️ Configuration

The application is designed to be easily customized.

1.  **Content**: Edit `config/profile.ts` to update your profile, experience, and education.
2.  **Theme Colors**: Edit `config/_colors.scss` to change the primary, secondary, and accent colors for light and dark modes.
3.  **Layout/Spacing**: Edit `src/app/config/_spacing.scss` for global spacing adjustments.

For more details, see [docs/config.md](docs/config.md).

## 🏗 Building

To build the application artifacts (HTML, CSS, JS) for production:

```bash
make build
```

The output will be generated in the `dist/` directory on your host machine.

## 🚀 Alternative Deployment Options

### Option 1: Docker (Recommended for Self-Hosting)

You can build and run a production-ready Docker image that serves the app using a lightweight web server (lighttpd).

1.  **Build the image**:
    ```bash
    make build-prod-image
    ```
2.  **Run the container**:
    ```bash
    make start-prod
    ```
    (Or manually: `docker run -d -p 8080:80 angular-resume-prod`)

Access the app at `http://localhost:8080`.

### Option 2: Static Web Server

If you have an existing web server (Nginx, Apache, AWS S3, etc.):

1.  Run `make build`.
2.  Copy the contents of the `dist/resume-app/browser/` directory to your web server's root directory.

## 📚 Documentation

- [Features & Specs](docs/specs.md)
- [Technical Guidelines](docs/technical.md)
- [Style Guide](docs/style.md)
- [Docker Setup](docs/docker.md)
