import { notFound } from "next/navigation";

const TOKEN = process.env.STRAPI_TOKEN;
const URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function getPageByUrl(url: string, locale?: string) {
  if (!url) {
    throw new Error("Url not provided");
  }

  try {
    const res = await fetch(`${URL}&locale=${locale}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    const resData = await res.json();
    if (!resData.data) {
      throw new Error("No data returned from CMS");
    }

    const page = resData.data.find((page: any) => page.url === url);

    if (!page) {
      notFound();
    }

    const dynamicPathnames: Record<string, Record<string, string>> = {};
    resData.data.forEach((page: any) => {
      const baseUrl = page.url;
      const currentLocale = page.locale;
      const currentSlug = page.slug;

      if (!dynamicPathnames[baseUrl]) {
        dynamicPathnames[baseUrl] = {};
      }

      dynamicPathnames[baseUrl][currentLocale] = currentSlug;

      page.localizations.forEach((loc: any) => {
        dynamicPathnames[baseUrl][loc.locale] = loc.slug;
      });
    });

    console.log(dynamicPathnames);

    return { page, resData };
  } catch (error) {
    throw error;
  }
}

export const dynamicURLbaseLanguage = async () => {
  const { resData } = await getPageByUrl("/");

  const dynamicPathnames: Record<string, Record<string, string>> = {};
  resData.data.forEach((page: any) => {
    const baseUrl = page.url;
    const currentLocale = page.locale;
    const currentSlug = page.slug;

    if (!dynamicPathnames[baseUrl]) {
      dynamicPathnames[baseUrl] = {};
    }

    dynamicPathnames[baseUrl][currentLocale] = currentSlug;

    page.localizations.forEach((loc: any) => {
      dynamicPathnames[baseUrl][loc.locale] = loc.slug;
    });
  });

  console.log(dynamicPathnames);

  return dynamicPathnames;
};

dynamicURLbaseLanguage();
