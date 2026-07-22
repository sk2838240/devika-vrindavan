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
  metadataBase: new URL("https://thewhitebutter.in"),
  title: "The White Butter In Vrindavan | A Premium Boutique Residence",
  description:
    "Discover The White Butter Vrindavan, a premium boutique residential destination opposite Prem Mandir in the heart of Vrindavan.",
  keywords: [
    "the white butter",
    "the white butter vrindavan",
    "white butter vrindavan",
    "premium property in vrindavan",
    "luxury apartments in vrindavan",
    "boutique residences in vrindavan",
    "real estate vrindavan",
    "premium residence vrindavan",
    "luxury living vrindavan",
  ],
  alternates: {
    canonical: "https://thewhitebutter.in",
  },
  openGraph: {
    title: "The White Butter In Vrindavan | A Premium Boutique Residence",
    description: "Discover The White Butter Vrindavan, a premium boutique residential destination opposite Prem Mandir in the heart of Vrindavan.",
    url: "https://thewhitebutter.in",
    siteName: "The White Butter",
    images: [
      {
        url: "/images/destination-building-cropped.png",
        width: 1200,
        height: 630,
        alt: "The White Butter Vrindavan - Premium Boutique Residence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The White Butter In Vrindavan | A Premium Boutique Residence",
    description: "Discover The White Butter Vrindavan, a premium boutique residential destination opposite Prem Mandir in the heart of Vrindavan.",
    images: ["/images/destination-building-cropped.png"],
  },
  icons: {
    icon: "/images/icon.png",
    appleIcon: "/images/icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://thewhitebutter.in/#website",
        url: "https://thewhitebutter.in",
        name: "The White Butter Vrindavan",
        description: "A premium boutique residential destination opposite Prem Mandir in the heart of Vrindavan.",
        publisher: {
          "@type": "Organization",
          "@id": "https://thewhitebutter.in/#organization",
          name: "The White Butter",
          url: "https://thewhitebutter.in",
          logo: {
            "@type": "ImageObject",
            url: "https://thewhitebutter.in/images/icon.png",
          },
        },
      },
      {
        "@type": "Organization",
        "@id": "https://thewhitebutter.in/#organization",
        name: "The White Butter",
        url: "https://thewhitebutter.in",
        logo: {
          "@type": "ImageObject",
          url: "https://thewhitebutter.in/images/icon.png",
        },
        sameAs: [
          "https://www.facebook.com/TheWhiteButterOfficial/",
          "https://www.instagram.com/thewhitebutterofficial/",
          "https://www.youtube.com/@thewhitebutterofficial",
        ],
      },
      {
        "@type": "RealEstateListing",
        "@id": "https://thewhitebutter.in/#listing",
        name: "The White Butter Vrindavan",
        description: "A premium boutique residential destination in Vrindavan, offering luxury living spaces opposite Prem Mandir.",
        url: "https://thewhitebutter.in",
        image: {
          "@type": "ImageObject",
          url: "https://thewhitebutter.in/images/destination-building-cropped.png",
          width: 1200,
          height: 630,
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Vrindavan",
          addressRegion: "Uttar Pradesh",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 27.5762,
          longitude: 77.6611,
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://thewhitebutter.in/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is The White Butter Vrindavan?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The White Butter is a premium boutique residential destination in Vrindavan, offering luxury living spaces in the heart of this sacred city.",
            },
          },
          {
            "@type": "Question",
            name: "Where is The White Butter located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The White Butter is located opposite Prem Mandir in the heart of Vrindavan, Uttar Pradesh, India.",
            },
          },
          {
            "@type": "Question",
            name: "What amenities does The White Butter offer?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The White Butter offers premium amenities including spacious residences, rooftop gardens, curated retail boulevard, and hospitality-inspired living spaces.",
            },
          },
        ],
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${montserrat.variable}`}
    >
      <head>
        <meta name="google-site-verification" content="sx9JrFn1UG6kCrO_w9PyEPtDOlQvNXVEhPrcIXXujJc" />
        <link rel="icon" href="/images/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
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