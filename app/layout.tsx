import type { Metadata } from "next";
import "./globals.css";
import "./portfolio-visuals.css";
import "./project-details.css";
import "./project-hero.css";
import "./artfolio-behance.css";
import "./client-readiness.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://veruance.com"),
  title: "Veruance — Web Design & Development by Vivek Pillai",
  description: "Distinctive websites and digital experiences by Veruance. Explore our design work, discover our services and estimate your next website project.",
  openGraph: {
    title: "Veruance — Websites that move businesses forward",
    description: "Explore our website design work, services and project estimator.",
    type: "website",
    siteName: "Veruance",
    locale: "en_US",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veruance — Web Design & Development",
    description: "Distinctive websites and digital experiences by Vivek Pillai.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
