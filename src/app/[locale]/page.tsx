import componentMapper from "@/Utility/componentMapper";
import { getPageByUrl } from "@/Utility/page-fetcher";
import { getTranslations } from "next-intl/server";

interface HomePageProps {
  params: {
    locale: string;
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = params;

  const t = await getTranslations("RootLayout");

  const { page } = await getPageByUrl("/", locale);

  const components = page?.components || [];

  return (
    <div>
      <h1>{t("title")}</h1>

      {components.map((component: any) => {
        const Component = componentMapper[component.__component];
        if (!Component) return null;
        const { id, __component, ...props } = component;
        return <Component key={id} {...props} />;
      })}

      {/* <h1>{t("subcomponent")}</h1>
      <Link href={"/about"} style={{ display: "inline-block" }}>
        <Button label={t("homePageButton")} size="large" style="secoundary" />
      </Link> */}
    </div>
  );
}
