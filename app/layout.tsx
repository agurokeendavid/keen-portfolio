import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://keendavidaguro-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Keen David Aguro — Full-Stack Software Developer",
    template: "%s | Keen David Aguro",
  },
  description:
    "Full-stack software developer with 7+ years of experience building enterprise web applications using ASP.NET Core, Angular, Laravel, and cloud technologies. Based in the Philippines, available for remote work worldwide.",
  keywords: [
    "Keen David Aguro",
    "software developer",
    "full-stack developer",
    "ASP.NET Core",
    "Angular",
    "TypeScript",
    "C#",
    "Laravel",
    "PHP",
    ".NET developer",
    "web developer Philippines",
    "portfolio",
  ],
  authors: [{ name: "Keen David Aguro", url: BASE_URL }],
  creator: "Keen David Aguro",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Keen David Aguro",
    title: "Keen David Aguro — Full-Stack Software Developer",
    description:
      "Full-stack software developer with 7+ years of experience building enterprise web applications using ASP.NET Core, Angular, Laravel, and cloud technologies.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Keen David Aguro — Full-Stack Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keen David Aguro — Full-Stack Software Developer",
    description:
      "Full-stack software developer with 7+ years of experience building enterprise web applications using ASP.NET Core, Angular, Laravel, and cloud technologies.",
    images: ["/og-image.jpg"],
    creator: "@keendavidaguro",
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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
                  if (shouldBeDark) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })()
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
