"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useMemo } from "react";
import { ChevronRight, Menu, X, FileText } from "lucide-react";
import type { DevlogsTree } from "@/lib/devlogs";

interface SideBarProps {
  tree: DevlogsTree;
}

/* ================= SidebarContent ================= */

function SidebarContent({
  tree,
  expanded,
  toggle,
  pathname,
  onNavigate,
}: {
  tree: DevlogsTree;
  expanded: Record<string, boolean>;
  toggle: (key: string) => void;
  pathname: string;
  onNavigate?: () => void;
}) {
  const isActive = (path: string) => pathname === path;

  return (
    <div className="flex flex-col h-full bg-zinc-950 text-slate-400 overflow-hidden">
      {/* Scrollable Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-1 custom-sidebar-scrollbar">
        <Link
          href="/devlogs"
          onClick={onNavigate}
          className="flex items-center px-3 py-2 mb-4 text-sm font-medium rounded-md transition-colors hover:bg-zinc-800 hover:text-white shrink-0"
        >
          All Devlogs
        </Link>

        {tree.map(({ year, months }) => {
          const yearOpen = expanded[year];

          return (
            <div key={year} className="space-y-1">
              <div className="flex items-center group">
                <button
                  onClick={() => toggle(year)}
                  className="p-1 rounded-md hover:bg-zinc-800 transition-colors shrink-0"
                >
                  <ChevronRight
                    size={16}
                    className={`transition-transform duration-200 ${
                      yearOpen ? "rotate-90 text-slate-200" : "text-zinc-500"
                    }`}
                  />
                </button>
                <Link
                  href={`/devlogs/${year}`}
                  onClick={onNavigate}
                  className="flex-1 px-2 py-1 text-sm font-semibold tracking-wide hover:text-white transition-colors truncate min-w-0"
                >
                  {year}
                </Link>
              </div>

              {yearOpen && (
                <div className="ml-3 pl-3 border-l border-zinc-800/50 space-y-1">
                  {months.map(({ month, dates }) => {
                    const key = `${year}-${month}`;
                    const monthOpen = expanded[key];

                    return (
                      <div key={month} className="space-y-1">
                        <div className="flex items-center group">
                          <button
                            onClick={() => toggle(key)}
                            className="p-1 rounded-md hover:bg-zinc-800 transition-colors shrink-0"
                          >
                            <ChevronRight
                              size={14}
                              className={`transition-transform duration-200 ${
                                monthOpen
                                  ? "rotate-90 text-zinc-200"
                                  : "text-zinc-500"
                              }`}
                            />
                          </button>
                          <Link
                            href={`/devlogs/${year}/${month}`}
                            onClick={onNavigate}
                            className="flex-1 px-2 py-1 text-sm hover:text-white transition-colors truncate min-w-0"
                          >
                            {month}
                          </Link>
                        </div>

                        {monthOpen &&
                          dates.map(({ date }) => {
                            const path = `/devlogs/${year}/${month}/${date}`;
                            const active = isActive(path);
                            const label = `${date}-${month}-${year}`;

                            return (
                              <Link
                                key={date}
                                href={path}
                                title={label} // Native tooltip for truncated text
                                onClick={onNavigate}
                                className={`ml-5 flex items-center gap-2.5 px-3 py-1.5 rounded-md text-sm transition-all group/item ${
                                  active
                                    ? "bg-zinc-200/70 text-zinc-900 font-medium"
                                    : "hover:bg-zinc-800 hover:text-zinc-200"
                                }`}
                              >
                                <FileText
                                  size={14}
                                  className={`shrink-0 ${
                                    active ? "text-zinc-900" : "text-zinc-600 group-hover/item:text-zinc-400"
                                  }`}
                                />
                                <span className="truncate min-w-0">
                                  {label}
                                </span>
                              </Link>
                            );
                          })}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style jsx global>{`
        .custom-sidebar-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-sidebar-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-sidebar-scrollbar::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 10px;
        }
        .custom-sidebar-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #475569;
        }
      `}</style>
    </div>
  );
}

/* ================= Main Sidebar ================= */

export default function SideBar({ tree }: SideBarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  
  // This state ONLY tracks manual user clicks (toggles)
  const [manualToggles, setManualToggles] = useState<Record<string, boolean>>({});

  // 1. Derive what should be open based on the URL
  // 2. Merge it with manual choices
  const expanded = useMemo(() => {
    const parts = pathname.split("/").filter(Boolean);
    const year = parts[1];
    const month = parts[2];
    
    // Start with the manual state
    const combined = { ...manualToggles };

    // If we are on a specific page, ensure that year/month is forced 'true'
    // unless the user has explicitly toggled it to 'false'
    if (year && manualToggles[year] !== false) {
      combined[year] = true;
    }
    if (year && month && manualToggles[`${year}-${month}`] !== false) {
      combined[`${year}-${month}`] = true;
    }

    return combined;
  }, [pathname, manualToggles]);

  const toggle = (key: string) => {
    setManualToggles((prev) => ({
      ...prev,
      // If it's currently open (via URL or manual), clicking it forces it closed (false)
      // If it's currently closed, clicking it forces it open (true)
      [key]: !expanded[key],
    }));
  };

  return (
    <>
      {/* Mobile open button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed bottom-6 right-6 p-4 bg-zinc-600 text-white rounded-full shadow-lg shadow-zinc-500/40 active:scale-95 transition-transform z-50"
        aria-label="Open Navigation"
      >
        <Menu size={20} />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden z-40 animate-in fade-in duration-200"
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={`fixed left-0 top-0 h-full w-72 bg-zinc-900 border-r border-zinc-800 z-50 transform transition-transform duration-300 ease-out md:hidden flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-zinc-800 shrink-0">
          <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">
            Devlogs
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 text-zinc-500 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-hidden">
          <SidebarContent
            tree={tree}
            expanded={expanded}
            toggle={toggle}
            pathname={pathname}
            onNavigate={() => setIsOpen(false)}
          />
        </div>
      </aside>

      {/* Desktop sidebar */}
      <aside className="hidden md:flex flex-col w-64 h-screen sticky top-0 bg-zinc-950 border-r border-zinc-800 overflow-hidden">
        <div className="p-6 shrink-0">
             <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">
                Navigation
              </span>
        </div>
        <div className="flex-1 overflow-hidden">
            <SidebarContent
              tree={tree}
              expanded={expanded}
              toggle={toggle}
              pathname={pathname}
            />
        </div>
      </aside>
    </>
  );
}
// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState, useMemo } from "react";
// import { ChevronRight, Menu, X, FileText } from "lucide-react";
// import type { DevlogsTree } from "@/lib/devlogs";

// interface SideBarProps {
//   tree: DevlogsTree;
// }

// /* ================= SidebarContent ================= */

// function SidebarContent({
//   tree,
//   expanded,
//   toggle,
//   pathname,
//   onNavigate,
// }: {
//   tree: DevlogsTree;
//   expanded: Record<string, boolean>;
//   toggle: (key: string) => void;
//   pathname: string;
//   onNavigate?: () => void;
// }) {
//   const isActive = (path: string) => pathname === path;

//   return (
//     <div className="h-full overflow-y-auto p-4 space-y-1 bg-zinc-900 text-slate-400 font-sans selection:bg-zinc-500/30">
//       <Link
//         href="/devlogs"
//         onClick={onNavigate}
//         className="flex items-center px-3 py-2 mb-4 text-sm font-medium rounded-md transition-colors hover:bg-slate-800 hover:text-white"
//       >
//         All Devlogs
//       </Link>

//       {tree.map(({ year, months }) => {
//         const yearOpen = expanded[year];

//         return (
//           <div key={year} className="space-y-1">
//             <div className="flex items-center group">
//               <button
//                 onClick={() => toggle(year)}
//                 className="p-1 rounded-md hover:bg-slate-800 transition-colors"
//               >
//                 <ChevronRight
//                   size={16}
//                   className={`transition-transform duration-200 ${
//                     yearOpen ? "rotate-90 text-slate-200" : "text-slate-500"
//                   }`}
//                 />
//               </button>
//               <Link
//                 href={`/devlogs/${year}`}
//                 onClick={onNavigate}
//                 className="flex-1 px-2 py-1 text-sm font-semibold tracking-wide hover:text-white transition-colors"
//               >
//                 {year}
//               </Link>
//             </div>

//             {yearOpen && (
//               <div className="ml-3 pl-3 border-l border-slate-800 space-y-1">
//                 {months.map(({ month, dates }) => {
//                   const key = `${year}-${month}`;
//                   const monthOpen = expanded[key];

//                   return (
//                     <div key={month} className="space-y-1">
//                       <div className="flex items-center group">
//                         <button
//                           onClick={() => toggle(key)}
//                           className="p-1 rounded-md hover:bg-slate-800 transition-colors"
//                         >
//                           <ChevronRight
//                             size={14}
//                             className={`transition-transform duration-200 ${
//                               monthOpen
//                                 ? "rotate-90 text-slate-200"
//                                 : "text-slate-500"
//                             }`}
//                           />
//                         </button>
//                         <Link
//                           href={`/devlogs/${year}/${month}`}
//                           onClick={onNavigate}
//                           className="flex-1 px-2 py-1 text-sm hover:text-white transition-colors"
//                         >
//                           {month}
//                         </Link>
//                       </div>

//                       {monthOpen &&
//                         dates.map(({ date, title }) => {
//                           const path = `/devlogs/${year}/${month}/${date}`;
//                           const active = isActive(path);

//                           return (
//                             <Link
//                               key={date}
//                               href={path}
//                               onClick={onNavigate}
//                               className={`ml-5 flex items-center gap-2.5 px-3 py-1.5 rounded-md text-sm transition-all ${
//                                 active
//                                   ? "bg-blue-600/10 text-blue-400 font-medium"
//                                   : "hover:bg-slate-800 hover:text-slate-200"
//                               }`}
//                             >
//                               <FileText
//                                 size={14}
//                                 className={
//                                   active
//                                     ? "text-blue-400"
//                                     : "text-slate-600"
//                                 }
//                               />
//                               <span className="truncate">
//                                 {`${date}-${month}-${year}`}
//                               </span>
//                             </Link>
//                           );
//                         })}
//                     </div>
//                   );
//                 })}
//               </div>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// /* ================= Main Sidebar ================= */

// export default function SideBar({ tree }: SideBarProps) {
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = useState(false);
//   const [expanded, setExpanded] = useState<Record<string, boolean>>({});

//   const autoExpanded = useMemo(() => {
//     const parts = pathname.split("/").filter(Boolean);
//     const year = parts[1];
//     const month = parts[2];
//     const obj: Record<string, boolean> = {};
//     if (year) obj[year] = true;
//     if (year && month) obj[`${year}-${month}`] = true;
//     return obj;
//   }, [pathname]);

//   const mergedExpanded = { ...autoExpanded, ...expanded };

//   const toggle = (key: string) => {
//     setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
//   };

//   return (
//     <>
//       {/* Mobile open button */}
//       <button
//         onClick={() => setIsOpen(true)}
//         className="md:hidden fixed bottom-6 right-6 p-4 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-500/20 active:scale-95 transition-transform z-50"
//       >
//         <Menu size={20} />
//       </button>

//       {/* Backdrop */}
//       {isOpen && (
//         <div
//           onClick={() => setIsOpen(false)}
//           className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden z-40 transition-opacity"
//         />
//       )}

//       {/* Mobile drawer */}
//       <aside
//         className={`fixed left-0 top-0 h-full w-64 bg-slate-900 border-r border-slate-800 z-50 transform transition-transform duration-300 ease-out md:hidden ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="flex justify-between items-center p-5 border-b border-slate-800 mb-2">
//           <span className="text-sm font-bold tracking-widest text-white uppercase">
//             Navigation
//           </span>
//           <button
//             onClick={() => setIsOpen(false)}
//             className="text-slate-500 hover:text-white transition-colors"
//           >
//             <X size={18} />
//           </button>
//         </div>

//         <SidebarContent
//           tree={tree}
//           expanded={mergedExpanded}
//           toggle={toggle}
//           pathname={pathname}
//           onNavigate={() => setIsOpen(false)} // 👈 auto close
//         />
//       </aside>

//       {/* Desktop sidebar */}
//       <aside className="hidden md:block w-64 h-screen sticky top-0 bg-slate-900 border-r border-slate-800">
//         <SidebarContent
//           tree={tree}
//           expanded={mergedExpanded}
//           toggle={toggle}
//           pathname={pathname}
//         />
//       </aside>
//     </>
//   );
// }