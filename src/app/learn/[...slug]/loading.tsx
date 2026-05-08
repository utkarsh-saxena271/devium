export default function Loading() {
  return (
    <article className="py-12 px-5 max-w-5xl mx-auto animate-pulse">
      {/* Date badge */}
      <div className="h-4 w-32 bg-zinc-800 rounded mb-8" />

      {/* Title */}
      <div className="h-9 w-3/4 bg-zinc-800 rounded mb-4" />
      <div className="h-9 w-1/2 bg-zinc-800 rounded mb-10" />

      {/* Paragraph lines */}
      <div className="space-y-3 mb-8">
        <div className="h-4 w-full bg-zinc-800/70 rounded" />
        <div className="h-4 w-full bg-zinc-800/70 rounded" />
        <div className="h-4 w-5/6 bg-zinc-800/70 rounded" />
        <div className="h-4 w-full bg-zinc-800/70 rounded" />
        <div className="h-4 w-4/6 bg-zinc-800/70 rounded" />
      </div>

      {/* Section heading */}
      <div className="h-6 w-40 bg-zinc-800 rounded mb-5 mt-10" />

      {/* Code block */}
      <div className="rounded-lg bg-zinc-900 border border-zinc-800 p-4 mb-8 space-y-2">
        <div className="h-3.5 w-3/5 bg-zinc-700/60 rounded" />
        <div className="h-3.5 w-4/5 bg-zinc-700/60 rounded" />
        <div className="h-3.5 w-2/5 bg-zinc-700/60 rounded" />
        <div className="h-3.5 w-3/5 bg-zinc-700/60 rounded" />
      </div>

      {/* More paragraph lines */}
      <div className="space-y-3 mb-8">
        <div className="h-4 w-full bg-zinc-800/70 rounded" />
        <div className="h-4 w-5/6 bg-zinc-800/70 rounded" />
        <div className="h-4 w-full bg-zinc-800/70 rounded" />
        <div className="h-4 w-3/4 bg-zinc-800/70 rounded" />
      </div>

      {/* Section heading */}
      <div className="h-6 w-52 bg-zinc-800 rounded mb-5 mt-10" />

      {/* List items */}
      <div className="space-y-3 pl-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="h-1.5 w-1.5 rounded-full bg-zinc-700 shrink-0" />
            <div className="h-4 bg-zinc-800/70 rounded" style={{ width: `${55 + i * 10}%` }} />
          </div>
        ))}
      </div>
    </article>
  );
}
