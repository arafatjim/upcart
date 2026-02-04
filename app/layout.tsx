
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from '@clerk/nextjs'


export const metadata: Metadata = {
  title: "Upcart Online Shopping",
  description: "Everything You Need, One Cart",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body className="mx-4 font-mono flex flex-col min-h-screen">
        <div className="grow">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
    </ClerkProvider>
  );
}
