import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aberturas N&L | Aluminio y Vidriería a Medida",
  description: "Fabricación y colocación de aberturas de aluminio, mamparas y vidriería en Almirante Brown y Zona Sur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-gray-100 min-h-screen flex flex-col`}>
        <TopBar />
        <Navbar />
        <main className="grow">
          {children}
        </main>
      </body>
    </html>
  );
}