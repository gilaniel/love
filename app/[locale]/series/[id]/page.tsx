import { fetchContent, fetchSeries } from "@/data-access";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import VideoPlayer from "./components/videoPlayer/videoPlayer";
import Link from "next/link";
import getIntl from "../../intl";
import { Locale } from "@/types/model";
import { Metadata } from "next";

export const revalidate = 604800;
export const dynamic = "force-static";

export async function generateStaticParams() {
  const data = await fetchSeries();

  return data.map((item) => ({
    slug: item.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; locale: string; ids: number }>;
}): Promise<Metadata> {
  const { id, locale: sLocale } = await params;

  const [meta] = await fetchSeries(Number(id));

  const { locale } = await getIntl(sLocale);

  const title = meta?.l10n?.[locale as Locale]?.name
    ? `${meta.l10n[locale as Locale].name}`
    : "LoveDrama";

  const description = meta?.l10n?.[locale as Locale]?.description
    ? meta.l10n[locale as Locale].description
    : "";

  const posterUrl = meta?.l10n[locale as Locale]?.thumbnail || "";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "video.tv_show",
      url: `https://lovedrama.tv/${sLocale}/series/${id}`,
      images: [
        {
          url: posterUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [posterUrl],
    },
    alternates: {
      canonical: `https://lovedrama.tv/${sLocale}/series/${id}`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string; locale: string; ids: number }>;
}) {
  const { id, locale: sLocale } = await params;
  const [meta] = await fetchSeries(Number(id));
  const data = await fetchContent(Number(id));

  const { locale } = await getIntl(sLocale);

  return (
    <main>
      <section className="px-0 lg:px-[80px] lg:min-h-[calc(100vh-80px)]">
        <div className="flex flex-col lg:flex-row justify-between lg:gap-5 items-center lg:items-start">
          <VideoPlayer
            data={data.items}
            count={data.count_all}
            meta={meta}
            locale={locale as Locale}
          />
        </div>
      </section>

      <section
        className="pt-[100px] px-4 lg:px-[80px] flex flex-col-reverse lg:flex-row gap-10 lg:gap-[80px] justify-center w-full"
        data-anchor="app"
      >
        <div className="flex flex-col flex-1 gap-5 lg:gap-10 items-center min-w-[240px] max-w-[240px] mx-auto lg:mx-0">
          <Icon
            url="/qr2.svg"
            alt="Get app"
            classNames="w-[140px] h-[140px] lg:w-[240px] lg:h-[240px] rounded-[16px]"
          />

          <div className="flex flex-col gap-4 w-full max-w-[400px] lg:max-w-[240px]">
            <Link
              href="https://lovedrama.onelink.me/3PHG/36j653y4"
              target="_blank"
            >
              <Button className="gradient-black-btn h-[48px] lg:h-[56px] w-full rounded-[28px]">
                <span className="black-btn-bg"></span>
                <Icon url="/icons/apple.svg" alt="App Store" />
                <span>App Store</span>
              </Button>
            </Link>
            <Link
              href="https://lovedrama.onelink.me/3PHG/36j653y4"
              target="_blank"
            >
              <Button className="gradient-black-btn h-[48px] lg:h-[56px] w-full rounded-[28px]">
                <span className="black-btn-bg"></span>
                <Icon url="/icons/google.svg" alt="Google play" />
                <span>Google play</span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="max-w-[620px] w-full mx-auto lg:mx-0">
          <h2 className="title mb-10" style={{ textAlign: "start" }}>
            Love the Drama? Get LoveDrama to Watch For Free!
          </h2>

          <p className="mb-5">
            Whether you have a few minutes between meetings or want to unwind
            before bed, our short-form romantic dramas are designed for your
            mobile screen, making it easy to immerse yourself in passionate love
            stories on the go. With high-quality storytelling, relatable
            characters, and emotionally rich plots, {`you'll`} never run out of
            heartfelt romance to enjoy.
          </p>
          <p>
            Feel the love, live the drama! Download Love Drama and experience
            short romance stories that will touch your heart.
          </p>
        </div>
      </section>
    </main>
  );
}
