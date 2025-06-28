import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
const path = require("path");

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src")],
    additionalData: `@use "@/global/scss/_app.scss" as *;`,
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
