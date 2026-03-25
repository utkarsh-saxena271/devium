interface PageProps {
  params: Promise<{
    year: string
    month: string
    date: string
  }>
}

// import fs from "fs"
import { notFound } from "next/navigation"
// import path from "path"

export const runtime = "nodejs"
// export const dynamic = "force-dynamic"
export const revalidate = 3600; //ISR



export default async function DevlogDatePage({ params }: PageProps) {
  const { year, month, date } = await params
  const path = [year, month, date]


  // turn ['uk', 'each', 'element'] → 'uk/each/element'
  const main_path = path.join('/')

  try {
    const { default: Post } = await import(`@/content/devlogs/${main_path}.mdx`)

    return (
      <article className="px-6 py-12 max-w-5xl mx-auto">
        {/* <h1 className="text-3xl font-semibold mb-8">
          Devlog · {year}/{month}/{date}
        </h1> */}
        <Post />
      </article>

    )
  } catch (e) {
    console.log(e)
    notFound()
  }
}



// export const dynamicParams = false



// export function generateStaticParams() {
//   const content = path.join('')

//   const files = fs.readdirSync(content)

//   return files
//     .filter(file => file.endsWith(".mdx"))
//     .map(file => ({
//       slug: file.replace(".mdx", ""),
//     }))
// }
