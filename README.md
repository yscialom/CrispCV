# CrispCV - Simple & Elegant Developer Résumé

[![Pull Request Validation](https://github.com/yscialom/CrispCV/actions/workflows/pr-validation.yaml/badge.svg)](https://github.com/yscialom/CrispCV/actions/workflows/pr-validation.yaml)
[![GitHub Pages](https://github.com/yscialom/CrispCV/actions/workflows/pages.yaml/badge.svg)](https://github.com/yscialom/CrispCV/actions/workflows/pages.yaml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A professional, customizable, and high-performance single-page application (SPA) designed to showcase a developer's profile, experience, and skills. Built with modern Angular (Signals, Zoneless), SCSS, and Docker.

---

## 🚀 For Users: Build Your Own Résumé

CrispCV is designed to be easily forked and customized with your own data and style.

### Quick Start (Live in 5 Minutes)

1.  **Fork this repository** to your own GitHub account.
2.  **Create a `pages` branch** (preferably an orphan branch) to store your personal configuration:
    ```bash
    git checkout --orphan pages
    git rm -rf .
    # Copy your customized config/profile.en_US.ts here
    git add config/profile.en_US.ts
    git commit -m "feat: add personal resume data"
    git push origin pages
    ```
3.  **Enable GitHub Pages**: In your repository settings, go to **Settings > Pages** and set the source to **GitHub Actions**.
4.  **Success!**: Your resume will be automatically built and deployed to `https://<your-username>.github.io/CrispCV/`.

### Customization

- **Content**: Edit `config/profile.<locale>.ts` to update your profile, experience, and education.
- **Theme Colors**: Edit `config/_colors.scss` to change the primary, secondary, and accent colors.
- **Detailed Guide**: See [Configuration Guide](docs/user/config.md).

### Self-Hosting with Docker

1.  **Build the image**: `make build-prod-image`
2.  **Run the container**: `make start-prod`
    Access the app at `http://localhost:8080`.

See [Docker & Installation](docs/user/docker.md) for more details.

---

## 🛠 For Developers: Contribute & Extend

CrispCV is built on a "Showcase Quality Code" philosophy, making it a great playground for modern Angular.

### Local Development

1.  Ensure you have **Docker** and **Make** installed.
2.  Start the dev server: `make start`
3.  Navigate to `http://localhost:4200`.

### Workflow & Quality

- **Linting**: `make lint`
- **Formatting**: `make format`
- **Testing**: `make test`

### Documentation for Developers

- [Technical Architecture](docs/dev/technical.md)
- [Code Guidelines](docs/dev/code-guidelines.md)
- [Style Guide](docs/dev/style.md)
- [Feature Specifications](docs/dev/specs.md)
- [Contributing Guide](CONTRIBUTING.md)

---

## 🔄 CI/CD

This project includes a comprehensive suite of GitHub Actions workflows for automated testing, building, and multi-registry deployment (GitHub Container Registry & Docker Hub).

For details on secrets and workflow triggers, see the [Technical Architecture](docs/dev/technical.md).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
