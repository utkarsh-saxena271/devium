import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  metadataBase: new URL("https://devium.utkrsh.online"),
  title: {
    default: "Devium — Learn Development Through Real Experiences",
    template: "%s | Devium",
  },
  description:
    "Open-source developer learning platform with daily devlogs, learning roadmaps, and real code. Built in public by Utkarsh.",
  authors: [{ name: "Utkarsh", url: "https://x.com/404not_utkarsh" }],
  openGraph: {
    type: "website",
    siteName: "Devium",
    title: "Devium — Learn Development Through Real Experiences",
    description:
      "Open-source developer learning platform with daily devlogs, learning roadmaps, and real code.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@404not_utkarsh",
    creator: "@404not_utkarsh",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className="antialiased bg-black text-zinc-300 selection:text-zinc-950 selection:bg-zinc-50">
        <div className="min-h-screen flex flex-col">
        
        <Navbar/>
        {children}
        <Footer/>
        <Analytics />
        </div>
      </body>
    </html>
  );
}
