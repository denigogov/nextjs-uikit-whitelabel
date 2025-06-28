import Button from "@/whitelabel/src/atoms/button/A-Button";
import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

interface AboutProps {}

const About: React.FC<AboutProps> = async ({}) => {
  const t = await getTranslations("AboutPage");

  return (
    <div>
      <h4>{t("title")}</h4>

      <Link href={"/"} style={{ display: "inline-block" }}>
        <Button label={t("button")} style="danger" />
      </Link>
    </div>
  );
};

export default About;
