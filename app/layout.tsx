import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



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
    <html lang="en">
      <body className="mx-12 font-mono flex flex-col min-h-screen">
        <div className="grow">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
