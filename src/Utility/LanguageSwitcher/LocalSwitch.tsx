import "./_localSwitch.scss";
import { routing } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./LocalSwitchSelect";
import languageSwitch from "../../assest/icons/languageSwitch.svg";
import Image from "next/image";

const LocalSwitch = () => {
  const t = useTranslations("LocalSwitcher");

  const locale = useLocale();

  return (
    <div className="languageSwitch uk-margin">
      <div className="languageSwitch__wrapper ">
        <LocaleSwitcherSelect defaultValue={locale}>
          {routing.locales.map((lng) => (
            <option key={lng} value={lng}>
              {lng}
            </option>
          ))}
        </LocaleSwitcherSelect>

        <Image
          className="languageSwitch__icon"
          src={languageSwitch}
          alt="Language Icon"
        />
      </div>
    </div>
  );
};

export default LocalSwitch;
