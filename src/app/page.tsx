import Hero from "@/components/home-layout/hero";
import OpenSource from "@/components/home-layout/open-source";
import WhatIsDevium from "@/components/home-layout/whatisdevium";
import Container from "@/components/layout/container";



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