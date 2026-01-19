# Résumé

If you havn't read all document referenced in this one yet, please do before anything else.

## Project description

This project is a simple single page application displaying a developers résumé. It present in a simple
and nice looking page the professional experience, the education and miscalenous information about the profile.

## Style guidelines

The application is simple and flat, smoothe and elegant. It respects a three-color palette for light and dark theme.
It respect all accessibility and responsible guidelines. Usage is intuitive; no information is deeper than two
clicks away from the land page.

See [style.md](./style.md) for more information.

## Technical guidelines

### Source code

The application use angular 21 with the latest guideline in mind: zoneless, signals for everything, simple router,
all data comes from a simple TypeScript configuration file and the code base must be crisp and comprehensible by a junior
developpeer.

It includes unit tests.

See [technical.md](./technical.md) for more information.

### Building

Neither node nor npm is installed on the developpent building system, docker must be used.

See [../user/docker.md](../user/docker.md) for more information.

## Configuration

This project allows for easy customization through configuration files.
See [../user/config.md](../user/config.md) for more information.

## Features

Features are specified and managed into [specs.md](./specs.md).

## Development Process

All new features and bug fixes must follow this process:

1.  **Document the User Story:** A clear and concise User Story must be added to [specs.md](./specs.md).
2.  **Create a Feature Branch:** A dedicated Git branch must be created for the new feature or bug fix. The branch name should be looked up in [specs.md](./specs.md).
3.  **Implement the Feature/Bugfix:** Write the code, including unit tests.
4.  **Create a Pull Request:** Once the implementation is complete, a Pull Request should be created to merge the changes into the `main` branch.
