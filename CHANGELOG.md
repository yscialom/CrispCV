# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-02-06

### Changed

- **UI**: Improved card contrast on light theme for better readability.

## [1.0.3] - 2026-02-01

### Fixed

- **Configuration**: Fixed an issue where profile pictures with certain filenames were not correctly recognized in the `config/` directory.

## [1.0.0] - 2026-02-01

### Added

- **Core Architecture**: Modern Angular 21 stack utilizing Signals and Zoneless change detection for optimal performance.
- **Responsive Experience Page**: Detailed professional experience display with automatic duration calculation and mission-based structure.
- **Education & Certifications**: Academic background and professional certifications tracking with dedicated "Education" page.
- **"About Me" Page**: Comprehensive personal profile including contact details, language skills, hobbies, volunteering, and personal projects.
- **Multilingual Support**: Internationalization (i18n) framework with runtime language switching and fallback mechanisms.
- **Dark/Light Theme**: User-controlled theme switching with system preference auto-detection and persistence.
- **Interactive Keywords**: Keyword-based filtering across entries and duration statistics on hover.
- **Deep Linking & Sharing**: Unique permalinks for every resume entry and short-link sharing functionality with clipboard integration.
- **Print Optimization**: Dedicated print layout for professional PDF/paper export, including a specialized sidebar-flow design.
- **Mobile Navigation**: Collapsible hamburger menu for optimal mobile user experience.
- **Dynamic Page Title**: Browser tab titles that update based on profile name and selected language.
- **Robust CI/CD**: Automated workflows for GitHub Pages deployment, Docker image publication (GHCR and Docker Hub), and PR validation.
- **Developer Experience**: Dockerized development environment with integrated linting, formatting, and unit testing tools.
- **Privacy First**: Removed all external CDN dependencies by bundling assets (fonts, icons) locally.
