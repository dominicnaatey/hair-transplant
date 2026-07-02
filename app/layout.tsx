import type { Metadata } from "next";
import { DM_Sans, Chivo } from "next/font/google";
import RouteTransition from '@/components/RouteTransition';
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const chivo = Chivo({
  variable: "--font-chivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hairise | Hair Transplant Clinic",
  description: "Modern hair transplant solutions with proven results and compassionate care — from diagnosis to full recovery.",
  keywords: "hair transplant, hair restoration, hair loss treatment, FUE, PRP, baldness treatment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${chivo.variable} h-full antialiased`}
      style={{ colorScheme: 'light' }}
    >
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <RouteTransition>{children}</RouteTransition>
      </body>
    </html>
  );
}
