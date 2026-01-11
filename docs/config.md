# Configuration Guide

This document explains how to configure various aspects of the application, allowing for easy customization without modifying the core source code.

## 1. Color Palettes

Global color definitions for both light and dark themes are located in a dedicated SCSS file at the root of the Git repository.

- **File:** `config/_colors.scss`
- **Purpose:** Define and manage the application's primary, secondary, accent, and text colors for different themes.
- **Structure:** Colors are defined within SCSS maps (`$palette-dark`, `$palette-light`) using consistent keys (e.g., `primary-bg`, `accent`, `text`).
- **Usage:** To change the color palette, simply modify the hex codes (or other color formats) within this file. The changes will be applied upon recompilation.

## 2. Spacing and Layout Variables

Variables for consistent spacing, sizing, and common layout values are defined in a dedicated SCSS file.

- **File:** `config/_spacing.scss`
- **Purpose:** Centralize values for padding, margins, font sizes, and standard border radii.
- **Structure:** Variables are defined as standard SCSS variables (e.g., `$spacing-medium`, `$border-radius-standard`).
- **Usage:** Adjust these values to modify the overall visual density and responsiveness of the application.

## 3. Profile Picture

The application allows users to easily configure the profile picture displayed in the navbar.

- **File:** `config/profile.<locale>.ts` (e.g., `config/profile.en_US.ts`)
- **Purpose:** Specify the path to the profile picture image.
- **Structure:** A TypeScript constant `PROFILE_CONFIG` exports an object with a `profilePicturePath` property.
- **Usage:**
  1.  Place your desired profile picture image (e.g., `profile-picture.jpg`) into the `public/` directory (or a subdirectory).
  2.  Update the `profilePicturePath` value in `config/profile.<locale>.ts` to reflect the path to your image (e.g., `'profile-picture.png'`).
  3.  Rebuild the application for changes to take effect.
