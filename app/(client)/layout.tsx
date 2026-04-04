
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from '@clerk/nextjs'
import ProductGrid from "@/components/ui/ProductGrid";


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
      
        <div className="flex flex-col grow flex-1 justify-between">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          {/* <ProductGrid /> */}
          <Footer />
        </div>
      
    </ClerkProvider>
  );
}
