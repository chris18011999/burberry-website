import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react"
import { SpeedInsights as VercelSpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css";

import ClientNextUIProvider from "@/utils/next-ui-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Burberry",
    template: "Burberry - %s"
  },
  description: "Discover a curation of wardrobe foundations reimagined with a unique Burberry slant. Shop jersey styles and versatile layers elevated by signature Burberry codes. New Collection Available. Shop Online Now. The Iconic British Brand. Free Shipping.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientNextUIProvider>
        {children}
        </ClientNextUIProvider>
        <VercelAnalytics></VercelAnalytics>
        <VercelSpeedInsights></VercelSpeedInsights>
      </body>
    </html>
  );
}
