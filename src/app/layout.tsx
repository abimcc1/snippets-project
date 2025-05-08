import type { Metadata } from "next";
import { Work_Sans } from 'next/font/google';

import "./globals.css";

import Header from "@/components/Header/Header";
import Tabs from "@/components/Tabs/Tabs";

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Code Snippets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={workSans.className}>
        <Header />
        <Tabs />
        {children}
      </body>
    </html>
  );
}
