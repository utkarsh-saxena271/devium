import SideBar from "@/components/Devlogs/SideBar"
import DevlogsPageTransition from "@/components/Devlogs/DevlogsPageTransition"
import { getDevlogsTree } from "@/lib/devlogs"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Devium | Devlogs",
}

export default function DevlogsLayout({ children }: { children: React.ReactNode }) {
  const tree = getDevlogsTree()

  return (
    <div className="min-h-screen w-screen bg-zinc-900 flex">
      <SideBar tree={tree} />
      <main className="flex-1 h-screen overflow-auto">
        <DevlogsPageTransition>{children}</DevlogsPageTransition>
      </main>
    </div>
  )
}
