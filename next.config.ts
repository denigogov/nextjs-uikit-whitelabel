import type { NextConfig } from "next";
const path = require("path");

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src")],
    prependData: `
        @import "@/global/scss/_app.scss";
      `,
  },

  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: {},
  },
};

export default nextConfig;
