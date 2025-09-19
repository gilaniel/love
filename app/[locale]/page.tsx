import { fetchFaq, fetchSeries } from "@/data-access";
import { Popular } from "./components/popular";
import { GetApp } from "./components/getApp";
import { Faq } from "./components/faq";
import { Hero } from "./components/hero";
import ServerIntlProvider from "@/components/serverIntlProvider";
import getIntl from "./intl";
import { Locale } from "@/types/model";

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

  const { locale, messages } = await getIntl(sLocale);

  return (
    <ServerIntlProvider messages={messages} locale={locale}>
      <main className="" data-anchor="home">
        <Hero series={series} locale={locale as Locale} />
        <GetApp />
        <Popular series={series} locale={locale as Locale} />
        <Faq items={faq} />
      </main>
    </ServerIntlProvider>
  );
}
