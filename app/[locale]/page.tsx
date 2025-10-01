import { fetchFaq, fetchSeries, fetchTags } from "@/data-access";
import { Categories } from "./components/categories";
import { GetApp } from "./components/getApp";
import { Faq } from "./components/faq";
import { Hero } from "./components/hero";
import ServerIntlProvider from "@/components/serverIntlProvider";
import getIntl from "./intl";
import { Locale } from "@/types/model";
import { Suspense } from "react";

export const revalidate = 604800;
export const dynamic = "force-static";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: sLocale } = await params;

  const series = await fetchSeries();
  const faq = await fetchFaq();
  const tags = await fetchTags();

  const { locale, messages } = await getIntl(sLocale);

  return (
    <ServerIntlProvider messages={messages} locale={locale}>
      <main className="" data-anchor="home">
        <Hero series={series} tags={tags} locale={locale as Locale} />
        <GetApp />
        <Suspense>
          <Categories series={series} tags={tags} locale={locale as Locale} />
        </Suspense>
        <Faq items={faq} />
      </main>
    </ServerIntlProvider>
  );
}
