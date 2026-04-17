import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Utkarsh Open Devlogs",
  description: "Building in public — daily dev logs, simple explanations, real code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className="antialised bg-black text-zinc-300 selection:text-zinc-950 selection:bg-zinc-50">
        <div className="min-h-screen flex flex-col">
        <Navbar/>
        {children}
        <Footer/>
        </div>
      </body>
    </html>
  );
}
