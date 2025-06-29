import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  localeDetection: true,

  // A list of all locales that are supported
  locales: ["en", "de"],

  // Used when no locale matches
  defaultLocale: "en",
  // pathnames: {
  //   "/about": {
  //     de: "/über-uns",
  //   },
  // },
});
