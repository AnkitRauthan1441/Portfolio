# Ankit Rauthan — Data Analyst Portfolio

Next.js portfolio configured for deployment on **GitHub Pages**.

## Deploy to GitHub Pages

1. Create a GitHub repository, for example `ankit-rauthan-portfolio`.
2. Push this project to the repository's `main` branch.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions**.
5. Push a new commit or run **Actions → Deploy Next.js site to GitHub Pages → Run workflow**.
6. GitHub will publish the generated `out/` directory automatically.

The workflow automatically detects the repository name and sets the correct Next.js `basePath`, so project-page URLs work without manually editing the configuration.

## Local development

```bash
bun install
bun run dev
```

For a production-style static build:

```bash
bun run build
```

The static output is generated in `out/`.
