import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | JANANI 2026",
    default: "JANANI 2026 - Shaping the Future of Empowerment",
  },
  description: "JANANI 2026 is a premier full-day conference bringing together visionaries, leaders, and change-makers to shape the future of women's empowerment at St. Teresa's College.",
  keywords: ["JANANI 2026", "Women Empowerment", "Conference", "Kerala", "St. Teresa's College", "Leadership"],
  openGraph: {
    title: "JANANI 2026 - Shaping the Future of Empowerment",
    description: "Join us on July 24, 2026, at St. Teresa's College for a full-day programme of inspiring leadership and empowerment.",
    url: "https://www.myjanani.in",
    siteName: "JANANI 2026",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JANANI 2026 - Shaping the Future of Empowerment",
    description: "Join us on July 24, 2026, at St. Teresa's College for a full-day programme of inspiring leadership and empowerment.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "JANANI 2026",
      "url": "https://www.myjanani.in/"
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "JANANI Foundation",
      "url": "https://www.myjanani.in/",
      "sameAs": [
        "https://www.instagram.com/myjanani_/",
        "https://www.linkedin.com/in/my-janani-a1931b420/",
        "https://www.facebook.com/people/My-Janani/",
        "https://www.youtube.com/@my_janani/shorts"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "JANANI 2026",
      "startDate": "2026-07-24T08:00:00+05:30",
      "endDate": "2026-07-24T18:30:00+05:30",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "location": {
        "@type": "Place",
        "name": "St. Teresa's College (Autonomous)",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Park Ave, Marine Drive",
          "addressLocality": "Ernakulam",
          "addressRegion": "Kerala",
          "addressCountry": "IN"
        }
      },
      "description": "A premier full-day conference bringing together visionaries, leaders, and change-makers to shape the future of women's empowerment.",
      "organizer": {
        "@type": "Organization",
        "name": "JANANI Foundation",
        "url": "https://www.myjanani.in"
      }
    }
  ];

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
