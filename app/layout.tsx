import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react"
import { SpeedInsights as VercelSpeedInsights } from "@vercel/speed-insights/next"

import { AntdRegistry } from '@ant-design/nextjs-registry';
import "./globals.css";
import { HeaderNav } from "@/components/header/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Vanilla",
    template: "Vanilla - %s"
  },
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderNav />
        <AntdRegistry>
        {children}
        </AntdRegistry>
        <VercelAnalytics></VercelAnalytics>
        <VercelSpeedInsights></VercelSpeedInsights>
      </body>
    </html>
  );
}
