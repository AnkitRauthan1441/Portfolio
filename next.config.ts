import type { NextConfig } from "next";

const repoName =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPages && repoName ? `/${repoName}` : "",
  assetPrefix: isGitHubPages && repoName ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["*.e2b.app", "*.ideavo.app", "*.ideavo.ai"],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
