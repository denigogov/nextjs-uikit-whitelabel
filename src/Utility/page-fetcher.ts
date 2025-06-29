import NotFound from "@/app/[locale]/not-found";
import { notFound } from "next/navigation";

export async function getPageByUrl(locale: string, url: string) {
  if (!locale || !url) {
    throw new Error("Locale or Url not provided");
  }

  try {
    const TOKEN = process.env.STRAPI_API_TOKEN;
    const URL = process.env.STRAPI_URL;

    const res = await fetch(`${URL}?locale=${locale}&populate=components`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    const resData = await res.json();
    if (!resData.data) {
      throw new Error("No data returned from CMS");
    }

    const match = resData.data.find((page: any) => page.url === url);

    if (!match) {
      notFound();
    }

    return match;
  } catch (error) {
    throw error;
  }
}
