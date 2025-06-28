import "../globals.css";
import Script from "next/script";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import LocalSwitch from "@/Utility/LanguageSwitcher/LocalSwitch";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <Script
          src="https://cdn.jsdelivr.net/npm/uikit@3.23.7/dist/js/uikit.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/uikit@3.23.7/dist/js/uikit-icons.min.js"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <NextIntlClientProvider>
          <LocalSwitch />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
