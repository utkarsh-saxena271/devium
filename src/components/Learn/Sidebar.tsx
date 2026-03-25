"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useMemo } from "react";
import { ChevronRight, Menu, X, FileText } from "lucide-react";
import type { LearnNode } from "@/lib/learn";

interface SideBarProps {
  tree: LearnNode[];
}

/* ================= SidebarItem (Recursive) ================= */

function SidebarItem({
  node,
  expanded,
  toggle,
  pathname,
  onNavigate,
}: {
  node: LearnNode;
  expanded: Record<string, boolean>;
  toggle: (key: string) => void;
  pathname: string;
  onNavigate?: () => void;
}) {
  // const isFolder = node.type === "folder";
  const isOpen = expanded[node.path];
  const fullPath = `/learn/${node.path}`;
  const active = pathname === fullPath;

  if (node.type === "file") {
    return (
      <Link
        href={fullPath}
        onClick={onNavigate}
        className={`flex items-center gap-2.5 px-3 py-1.5 rounded-md text-sm transition-all group/item ${
          active
            ? "bg-blue-600/10 text-blue-400 font-medium"
            : "hover:bg-slate-800 hover:text-slate-200"
        }`}
      >
        <FileText
          size={14}
          className={`shrink-0 ${
            active ? "text-blue-400" : "text-slate-600 group-hover/item:text-slate-400"
          }`}
        />
        <span className="truncate min-w-0">{node.title}</span>
      </Link>
    );
  }

  return (
    <div className="space-y-1">
      <div className="flex items-center group">
        <button
          onClick={() => toggle(node.path)}
          className="p-1 rounded-md hover:bg-slate-800 transition-colors shrink-0"
        >
          <ChevronRight
            size={16}
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-90 text-slate-200" : "text-slate-500"
            }`}
          />
        </button>
        <span className="flex-1 px-2 py-1 text-sm font-semibold tracking-wide text-slate-400 cursor-default truncate min-w-0">
          {node.name}
        </span>
      </div>

      {isOpen && (
        <div className="ml-3 pl-3 border-l border-slate-800/50 space-y-1">
          {node.children.map((child) => (
            <SidebarItem
              key={child.path}
              node={child}
              expanded={expanded}
              toggle={toggle}
              pathname={pathname}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ================= Main Sidebar ================= */

export default function SideBar({ tree }: SideBarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  // Auto-expand based on the URL path
  const autoExpanded = useMemo(() => {
    const parts = pathname.split("/").filter(Boolean); // e.g. ["learn", "react", "hooks"]
    const obj: Record<string, boolean> = {};
    
    let currentPath = "";
    // We skip index 0 ("learn") and build segments
    for (let i = 1; i < parts.length; i++) {
      currentPath = currentPath ? `${currentPath}/${parts[i]}` : parts[i];
      obj[currentPath] = true;
    }
    return obj;
  }, [pathname]);

  const mergedExpanded = { ...autoExpanded, ...expanded };

  const toggle = (key: string) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const sidebarContent = (
    <div className="flex flex-col h-full bg-slate-900 text-slate-400 font-sans overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 space-y-1 custom-sidebar-scrollbar">
        <Link
          href="/learn"
          onClick={() => setIsOpen(false)}
          className="flex items-center px-3 py-2 mb-4 text-sm font-medium rounded-md transition-colors hover:bg-slate-800 hover:text-white shrink-0"
        >
          Learn Overview
        </Link>

        {tree.map((node) => (
          <SidebarItem
            key={node.path}
            node={node}
            expanded={mergedExpanded}
            toggle={toggle}
            pathname={pathname}
            onNavigate={() => setIsOpen(false)}
          />
        ))}
      </div>

      <style jsx global>{`
        .custom-sidebar-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-sidebar-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-sidebar-scrollbar::-webkit-scrollbar-thumb { background: #334155; border-radius: 10px; }
        .custom-sidebar-scrollbar::-webkit-scrollbar-thumb:hover { background: #475569; }
      `}</style>
    </div>
  );

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed bottom-6 right-6 p-4 bg-blue-600 text-white rounded-full shadow-lg z-50"
      >
        <Menu size={20} />
      </button>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden z-40"
        />
      )}

      <aside className={`fixed left-0 top-0 h-full w-72 bg-slate-900 border-r border-slate-800 z-50 transform transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex justify-between items-center p-5 border-b border-slate-800">
          <span className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">Learn</span>
          <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white"><X size={20} /></button>
        </div>
        {sidebarContent}
      </aside>

      <aside className="hidden md:flex flex-col w-64 h-screen sticky top-0 bg-slate-900 border-r border-slate-800 overflow-hidden">
        <div className="p-6 shrink-0 text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">Navigation</div>
        <div className="flex-1 overflow-hidden">{sidebarContent}</div>
      </aside>
    </>
  );
}