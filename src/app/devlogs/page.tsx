import { Montserrat, Roboto } from "next/font/google"

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700"] })
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"] })

type Section =
  | {
      type: "list"
      title: string
      items: string[]
    }
  | {
      type: "text"
      title: string
      content: string
    }

const sections: Section[] = [
  {
    type: "list",
    title: "What you’ll find here",
    items: [
      "Daily coding updates",
      "What I learned",
      "Bugs I faced & how I fixed them",
      "Architecture & design decisions",
      "Links to projects & commits",
    ],
  },
  {
    type: "text",
    title: "Why I write devlogs",
    content:
      "Writing devlogs helps me stay consistent, reflect on what I learned, and document real-world problems I face while building things. It also acts as a public notebook for future me — and maybe for you too.",
  },
  {
    type: "list",
    title: "How each devlog is structured",
    items: [
      "What I worked on that day",
      "Concepts or tools I learned",
      "Problems or blockers",
      "How I solved them",
      "Next steps",
    ],
  },
  {
    type: "list",
    title: "Current focus areas",
    items: [
      "Full-stack web development",
      "Backend & system design",
      "DevOps & infrastructure basics",
      "Web 3 and distributed systems",
    ],
  },
]

const Devlogs = () => {
  return (
    <main className="min-h-screen px-8 py-20 bg-zinc-950 text-slate-100">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Heading */}
        <div className="space-y-4">
          <h1
            className={`text-5xl md:text-6xl font-semibold tracking-tight ${montserrat.className}`}
          >
            Devlogs
          </h1>
          <p
            className={`text-lg md:text-xl text-slate-400 max-w-2xl ${roboto.className}`}
          >
            Daily progress, learnings, and experiments while building real-world projects.
          </p>
        </div>

        {/* Sections */}
        {sections.map((section) => (
          <div
            key={section.title}
            className="pl-6 border-l border-slate-700 space-y-4"
          >
            <h2 className={`text-2xl font-semibold ${montserrat.className}`}>
              {section.title}
            </h2>

            {section.type === "list" ? (
              <ul
                className={`list-disc list-inside text-lg text-slate-300 space-y-2 ${roboto.className}`}
              >
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p
                className={`text-slate-300 text-lg leading-relaxed ${roboto.className}`}
              >
                {section.content}
              </p>
            )}
          </div>
        ))}

        {/* Footer */}
        <div className={`text-slate-400 text-base ${roboto.className}`}>
          Pick a date from the sidebar to start reading →
        </div>

      </div>
    </main>
  )
}

export default Devlogs