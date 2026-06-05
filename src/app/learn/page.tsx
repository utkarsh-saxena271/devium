import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Structured learning paths, roadmaps, and curated resources for frontend, backend, and full-stack web development. Free and open source.",
  alternates: { canonical: "/learn" },
};

export default function learnPage(){
  return (
    <div className="flex justify-center items-center h-screen px-3">
        <div className="text-xl md:text-5xl font-thin">
            Architecture is completed, content will be added slowly! Stay tuned.
        </div>
    </div>
  )
}