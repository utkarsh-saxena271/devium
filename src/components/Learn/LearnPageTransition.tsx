"use client"

import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

function Skeleton() {
  return (
    <article className="py-12 px-5 max-w-5xl mx-auto animate-pulse">
      <div className="h-4 w-32 bg-zinc-800 rounded mb-8" />
      <div className="h-9 w-3/4 bg-zinc-800 rounded mb-4" />
      <div className="h-9 w-1/2 bg-zinc-800 rounded mb-10" />
      <div className="space-y-3 mb-8">
        {[100, 100, 83, 100, 66].map((w, i) => (
          <div key={i} className="h-4 bg-zinc-800/70 rounded" style={{ width: `${w}%` }} />
        ))}
      </div>
      <div className="h-6 w-40 bg-zinc-800 rounded mb-5 mt-10" />
      <div className="rounded-lg bg-zinc-900 border border-zinc-800 p-4 mb-8 space-y-2">
        {[60, 80, 40, 60].map((w, i) => (
          <div key={i} className="h-3.5 bg-zinc-700/60 rounded" style={{ width: `${w}%` }} />
        ))}
      </div>
      <div className="space-y-3 mb-8">
        {[100, 83, 100, 75].map((w, i) => (
          <div key={i} className="h-4 bg-zinc-800/70 rounded" style={{ width: `${w}%` }} />
        ))}
      </div>
      <div className="h-6 w-52 bg-zinc-800 rounded mb-5 mt-10" />
      <div className="space-y-3 pl-4">
        {[55, 65, 75, 85].map((w, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="h-1.5 w-1.5 rounded-full bg-zinc-700 shrink-0" />
            <div className="h-4 bg-zinc-800/70 rounded" style={{ width: `${w}%` }} />
          </div>
        ))}
      </div>
    </article>
  )
}

function isLearnLink(href: string) {
  const parts = href.split("/").filter(Boolean)
  return parts[0] === "learn" && parts.length > 1
}

export default function LearnPageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [showSkeleton, setShowSkeleton] = useState(false)
  const committedPathname = useRef(pathname)

  useEffect(() => {
    if (pathname !== committedPathname.current) {
      committedPathname.current = pathname
      setShowSkeleton(false)
    }
  }, [pathname])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as Element).closest("a")
      if (!target) return
      const href = target.getAttribute("href")
      if (href && isLearnLink(href)) setShowSkeleton(true)
    }
    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  if (showSkeleton) return <Skeleton />
  return <>{children}</>
}
