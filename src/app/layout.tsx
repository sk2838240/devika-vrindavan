import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The White Butter Residences | A Spiritual Homecoming in Vrindavan",
  description:
    "Inspired by Krishna's most cherished symbol, The White Butter Residences offers a rare opportunity to own a part of Vrindavan's timeless spirit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${montserrat.variable}`}
    >
      <head>
        <meta name="google-site-verification" content="sx9JrFn1UG6kCrO_w9PyEPtDOlQvNXVEhPrcIXXujJc" />
      </head>
      <body className="antialiased bg-cream-50 text-ink">
        <SmoothScroll />
        {children}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-E6V0WPEP6E" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E6V0WPEP6E');
          `}
        </Script>
      </body>
    </html>
  );
}