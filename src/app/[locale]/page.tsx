import Button from "@/whitelabel/src/atoms/button/A-Button";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function HomePage() {
  const t = await getTranslations("RootLayout");

  return (
    <div>
      <h1>{t("title")}</h1>

      <h1>{t("subcomponent")}</h1>
      <Link href={"/about"} style={{ display: "inline-block" }}>
        <Button label={t("homePageButton")} size="large" style="secoundary" />
      </Link>
    </div>
  );
}
