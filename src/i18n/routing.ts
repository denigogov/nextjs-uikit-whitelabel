import { defineRouting } from "next-intl/routing";

const routes = [
  {
    "/about": {
      de: "/uber-uns",
    },
  },
  {
    "/help": {
      de: "/hilfe",
    },
  },

  {
    "/about/english": {
      de: "/uber-uns/german",
    },
  },
];

const pathnames = routes.reduce((acc, cur) => {
  return { ...acc, ...cur };
}, {});

export const routing = defineRouting({
  localeDetection: true,

  // A list of all locales that are supported
  locales: ["en", "de"],

  // Used when no locale matches
  defaultLocale: "en",

  pathnames,
});
