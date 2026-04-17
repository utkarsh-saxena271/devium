
import SideBar from "@/components/Learn/Sidebar";
import { getLearnTree } from "@/lib/learn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Utkarsh ODL | Learn",
};

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const tree = getLearnTree();

  return (
    <div className="min-h-screen flex bg-zinc-900">
      {/* Recursive Sidebar */}
      <SideBar tree={tree} />

      {/* Main Content Area */}
      <main className="flex-1 h-screen overflow-y-auto custom-sidebar-scrollbar">
        {children}
      </main>
    </div>
  );
}