import Hero from "@/components/home-layout/hero";
import OpenSource from "@/components/home-layout/open-source";
import WhatIsDevium from "@/components/home-layout/whatisdevium";
import Container from "@/components/layout/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn Development Through Real Experiences",
  description:
    "Devium is a free open-source platform with daily devlogs, learning roadmaps, and real developer experiences. Built in public by Utkarsh.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <div className="min-h-screen min-w-screen bg-zinc-950">
      <Container>
        <Hero/>
        <WhatIsDevium/>
        <OpenSource/>
      </Container>
    </div>
  )
}
// border-l border-r border-slate-600/30