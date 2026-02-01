# User Acceptance Testing (UAT) Campaign

This document tracks the UAT campaign for the CrispCV application.

## 1. Web UI - iOS

This section covers the testing of the web interface on iOS devices (iPhone/iPad) using Safari and Chrome.

### 1.1 Navbar & Navigation

| ID    | Test Case                    | Expected Result                                                                         | Status | Notes |
| ----- | ---------------------------- | --------------------------------------------------------------------------------------- | ------ | ----- |
| 1.1.1 | Mobile Hamburger Menu Toggle | Clicking the ☰ icon expands the menu; clicking ✖ closes it.                            |        |       |
| 1.1.2 | Navigation Tabs              | Clicking "Experience", "Education", or "About" navigates to the correct section.        |        |       |
| 1.1.3 | Sticky Navbar                | Navbar stays at the top when scrolling; summary disappears and height reduces smoothly. |        |       |
| 1.1.4 | Profile Identity             | Profile picture, name, and objective are correctly displayed and aligned.               |        |       |

### 1.2 Experience & Education Pages

| ID    | Test Case             | Expected Result                                                                                  | Status | Notes |
| ----- | --------------------- | ------------------------------------------------------------------------------------------------ | ------ | ----- |
| 1.2.1 | Card Layout           | Experience and Education cards are well-formatted and fit the screen width.                      |        |       |
| 1.2.2 | Duration Logic        | Durations (e.g., "1.5 years", "8 months") are correctly calculated and localized.                |        |       |
| 1.2.3 | Keyword Interactivity | Tapping a keyword highlights related cards.                                                      |        |       |
| 1.2.4 | Certifications        | Certifications section is visible on Education page with "View certificate" links if applicable. |        |       |

### 1.3 About Me Page

| ID    | Test Case             | Expected Result                                                                | Status | Notes |
| ----- | --------------------- | ------------------------------------------------------------------------------ | ------ | ----- |
| 1.3.1 | Personal Info         | DoB, Age, Nationality, and contact info are correctly displayed and localized. |        |       |
| 1.3.2 | Languages             | Language dots (1-5) are visible; tapping/holding shows the level tooltip.      |        |       |
| 1.3.3 | Social Links          | Social icons and links are functional and open in new tabs.                    |        |       |
| 1.3.4 | Projects/Volunteering | Cards are displayed correctly with technologies and dates.                     |        |       |

### 1.4 Global Features

| ID    | Test Case       | Expected Result                                                                         | Status | Notes |
| ----- | --------------- | --------------------------------------------------------------------------------------- | ------ | ----- |
| 1.4.1 | Theme Switch    | Toggling dark/light mode works instantly; preference persists after refresh.            |        |       |
| 1.4.2 | Language Switch | Switching language updates UI strings and resume content immediately.                   |        |       |
| 1.4.3 | Permalinks      | Tapping the "Link" icon on a card copies the short link to clipboard and shows a toast. |        |       |
| 1.4.4 | Print Button    | Tapping the print icon opens the iOS print dialog with a clean resume layout.           |        |       |
| 1.4.5 | Page Title      | The browser tab title correctly reflects "CV of [Name]" in the selected language.       |        |       |
| 1.4.6 | Footer          | Footer is visible at the bottom and links to GitHub correctly.                          |        |       |

### 1.5 Visuals & Responsiveness

| ID    | Test Case      | Expected Result                                                              | Status | Notes |
| ----- | -------------- | ---------------------------------------------------------------------------- | ------ | ----- |
| 1.5.1 | Responsiveness | No horizontal scrolling; content fits within the viewport.                   |        |       |
| 1.5.2 | Accessibility  | Sufficient contrast; touch targets are large enough for comfortable tapping. |        |       |
| 1.5.3 | Animations     | Transitions between pages and theme changes are smooth (300ms ease-in-out).  |        |       |

## 2. Web UI - Other Devices

_To be completed (Android, Desktop Windows/macOS/Linux)_

## 3. Configuration & Deployment

_To be completed (Profile customisation, Docker build, GitHub Pages workflow)_
