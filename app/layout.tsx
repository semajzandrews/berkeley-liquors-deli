import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

/* ---- §E2 type casting (3 voices) ----
   display: Clash Display (Fontshare) — the stacked grocer wordmark + heads
   body:    General Sans (Fontshare) — warm humanist grotesque, all running text
   label:   Space Mono (Google) — the receipt / price-ticket voice (eyebrows, tags, buttons)
   None shared with stack neighbors (Melodrama/Supreme, Libre Caslon/Switzer).      */

export const metadata: Metadata = {
  metadataBase: new URL("https://berkeley-liquors-deli.vercel.app"),
  title:
    "Berkeley Liquors & Deli · Bottle shop + sandwich counter · Bloomfield, NJ",
  description:
    "Wine, beer, and spirits with a real deli counter on Franklin Street, Bloomfield. Family run since 1993. Open till 10 PM Fri and Sat.",
  openGraph: {
    title: "Berkeley Liquors & Deli · Bloomfield, NJ",
    description:
      "The corner pours and stacks. Wine, beer, spirits, and a real sandwich counter on Franklin Street.",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&f[]=general-sans@400,500,600&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
        />
      </head>
      <body>
        <Script id="arm-reveal" strategy="beforeInteractive">
          {`try{if(document.visibilityState!=='hidden'){document.documentElement.classList.add('reveal-armed')}setTimeout(function(){document.documentElement.classList.add('reveal-done')},2400)}catch(e){}`}
        </Script>
        {children}
        <div className="paper-grain" aria-hidden="true" />
      </body>
    </html>
  );
}
