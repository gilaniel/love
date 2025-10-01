import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "swiper/css";
import i18nConfig from "@/i18nConfig";
import { Toaster } from "@/components/ui/sonner";
import { NavigationProvider } from "@/providers/NavigationProviders";
import { GlobalNavigationLoader } from "@/components/GlobalNavigationLoader";

const montserrat = Montserrat({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | LoveDrama",
    default: "LoveDrama",
  },
  description: "Love the drama? You need The LoveDrama app!",
  icons: {
    icon: "/icon.svg",
  },
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className={`${montserrat.variable} antialiased`}>
        <NavigationProvider>
          <Header />
          {children}
          <GlobalNavigationLoader />
          <Toaster />
          <Footer />
        </NavigationProvider>
      </body>
    </html>
  );
}
