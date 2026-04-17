// src/app/devlogs/layout.tsx
import SideBar from "@/components/Devlogs/SideBar";
import { getDevlogsTree } from "@/lib/devlogs"
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Utkarsh ODL | Devlogs",
};

export default function DevlogsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const tree = getDevlogsTree()

  return (
    <div className="min-h-screen w-screen bg-zinc-900 flex">
      {/* Sidebar */}
      <SideBar tree={tree} />

      {/* Content */}
      <main className="flex-1 h-screen overflow-auto">
        {children}
      </main>
    </div>
  )
}