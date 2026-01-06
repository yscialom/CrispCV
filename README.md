# Pages Configuration Branch

This is an orphan branch used to store the specific configuration for the GitHub Pages deployment of [CrispCV](https://github.com/yscialom/crispcv).

## How it works

The GitHub Actions workflow is configured to:
1.  Checkout the application code from the `main` (or `develop`) branch.
2.  Checkout the `config/profile.ts` file from **this** branch (`pages`).
3.  Build and deploy the application.

This allows maintaining a private or specific configuration (like personal contact details) separate from the main codebase history if desired, or simply managing the deployment configuration independently.

## Editing the Resume

To update the content of the published resume:
1.  Edit `config/profile.ts` in this branch.
2.  Commit and push the changes.
3.  The GitHub Actions workflow will automatically trigger and redeploy the site.

## Resources

*   [GitHub Pages Documentation](https://docs.github.com/en/pages)
*   [GitHub Actions Documentation](https://docs.github.com/en/actions)
