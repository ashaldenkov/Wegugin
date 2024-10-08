import "@/styles/globals.css";
import { Inter } from "next/font/google";

import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
//components
import Header from './_components/layout/header'
import Footer from './_components/layout/footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wegugin",
  description: "Selling cars from korea",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body>
        <TRPCReactProvider>
          <Header/>
          {children}
          <Footer/>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
