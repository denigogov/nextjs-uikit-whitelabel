// src/app/[locale]/[...slug]/page.tsx

import { getPageByUrl } from "@/Utility/page-fetcher";
import componentMapper from "@/Utility/componentMapper";

interface PageProps {
  params: {
    locale: string;
    slug?: string[];
  };
}

export default async function DynamicPage({ params }: PageProps) {
  const { locale, slug = [] } = await params;

  const path = "/" + (slug?.join("/") ?? "");

  const { page } = await getPageByUrl(path, locale);
  const components = page?.components || [];

  if (!page) {
    return <h1>404 - Page not found</h1>;
  }

  return (
    <div>
      {components.map((component: any) => {
        const Component = componentMapper[component.__component];
        if (!Component) return null;

        const { id, __component, ...props } = component;
        return <Component key={id} {...props} />;
      })}
    </div>
  );
}
