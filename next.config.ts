import type { NextConfig } from "next";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGitHubPages = process.env.GITHUB_ACTIONS === "true" && repoName.length > 0;

const nextConfig: NextConfig = {
  // GitHub Pages serves static files, so export the Next.js app as HTML/CSS/JS.
  output: "export",
  basePath: isGitHubPages ? `/${repoName}` : "",
  trailingSlash: true,

  // next/image's optimization server is unavailable on GitHub Pages.
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
  },

  // Keep the existing local development / Ideavo origins available.
  allowedDevOrigins: ["*.e2b.app", "*.ideavo.app", "*.ideavo.ai"],

  // The project currently contains some generated/third-party code that may
  // produce non-blocking type/lint warnings during deployment.
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
