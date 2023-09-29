import React from "react";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Jodaem-cart",
  description: "Developed with create-next-app",
};

// NB: If loading a variable font, you don't need to specify a font weight >> https://fonts.google
// .com/variablefonts
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
