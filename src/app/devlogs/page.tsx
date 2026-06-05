import { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google"

export const metadata: Metadata = {
  title: "Devlogs",
  description:
    "Daily logs of building, learning, and figuring things out. Real developer experiences — DSA practice, bugs, decisions, and lessons learned.",
  alternates: { canonical: "/devlogs" },
};

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
    title: "What this is",
    items: [
      "Daily logs of what I’m building",
      "DSA practice and learnings",
      "Bugs I hit and how I fixed them",
      "Decisions I make while building",
      "Real progress, not highlights",
    ],
  },
  {
    type: "text",
    title: "Why I do this",
    content:
      "This keeps me consistent. It forces me to show up, do the work, and reflect. Over time, this becomes proof, not just for others, but for myself.",
  },
  {
    type: "list",
    title: "What a typical log looks like",
    items: [
      "What I worked on",
      "What I learned",
      "Problems I faced",
      "How I approached them",
      "What’s next",
    ],
  },
  {
    type: "list",
    title: "Current focus",
    items: [
      "DSA and problem solving",
      "Full-stack development",
      "Backend and system thinking",
      "Shipping real projects",
    ],
  },
]

const Devlogs = () => {
  return (
    <main className="min-h-screen px-8 py-20 bg-zinc-950 text-zinc-100">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Heading */}
        <div className="space-y-4">
          <h1
            className={`text-5xl md:text-6xl font-semibold tracking-tight ${montserrat.className}`}
          >
            Devlogs
          </h1>
          <p
            className={`text-lg md:text-xl text-zinc-400 max-w-2xl ${roboto.className}`}
          >
            Daily logs of building, learning, and figuring things out.
          </p>
        </div>

        {/* Sections */}
        {sections.map((section) => (
          <div
            key={section.title}
            className="pl-6 border-l border-zinc-700 space-y-4"
          >
            <h2 className={`text-2xl font-semibold ${montserrat.className}`}>
              {section.title}
            </h2>

            {section.type === "list" ? (
              <ul
                className={`list-disc list-inside text-lg text-zinc-300 space-y-2 ${roboto.className}`}
              >
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p
                className={`text-zinc-300 text-lg leading-relaxed ${roboto.className}`}
              >
                {section.content}
              </p>
            )}
          </div>
        ))}

        {/* Footer */}
        <div className={`text-zinc-400 text-base ${roboto.className}`}>
          Pick a date from the sidebar to start reading →
        </div>

      </div>
    </main>
  )
}

export default Devlogs