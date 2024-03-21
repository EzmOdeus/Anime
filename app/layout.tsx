import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'

import Footer from "@/components/Footer";

import "./globals.css";


const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spider Anime",
  description: "Your favorite anime, all in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={dmSans.className}>
        <main className="max-w-7xl mx-auto bg-[#0F1117]">
     
          {children}
          <Footer />
        </main>
      </body>
    </html>
    </ClerkProvider>
  );
}
