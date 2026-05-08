import SideBar from "@/components/Learn/Sidebar"
import LearnPageTransition from "@/components/Learn/LearnPageTransition"
import { getLearnTree } from "@/lib/learn"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Devium | Learn",
}

export default function LearnLayout({ children }: { children: React.ReactNode }) {
  const tree = getLearnTree()

  return (
    <div className="min-h-screen flex bg-zinc-900">
      <SideBar tree={tree} />
      <main className="flex-1 h-screen overflow-y-auto custom-sidebar-scrollbar">
        <LearnPageTransition>{children}</LearnPageTransition>
      </main>
    </div>
  )
}
