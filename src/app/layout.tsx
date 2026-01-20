import { Header } from "@/components/ui/header";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inmuebles Paraguay",
  description: "Terrenos, Casas y Campos Productivos en Paraguay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="light">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=material_symbols_outlined" />
      </head>
      <body
        className={`${manrope.variable} antialiased`}
      >
        <Header />
        {/* We add pt-20 to account for the fixed header height */}
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
