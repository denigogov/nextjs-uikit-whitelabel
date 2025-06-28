"use client";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Locale } from "next-intl";
import { useParams } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label?: string;
};

export default function LocaleSwitcherSelect({
  defaultValue,
  label,
  children,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;

    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      { pathname, params },
      { locale: nextLocale as Locale }
    );
  }

  return (
    <>
      {label && <span>{label}</span>}
      <select
        className="uk-select"
        aria-label={label}
        value={defaultValue}
        onChange={onSelectChange}
      >
        {children}
      </select>
    </>
  );
}
