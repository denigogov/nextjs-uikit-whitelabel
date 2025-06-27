import type { NextConfig } from "next";
const path = require("path");

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src")],
    additionalData: `@use "@/global/scss/_app.scss" as *;`,
  },
};

export default nextConfig;
