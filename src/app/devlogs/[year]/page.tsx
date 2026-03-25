
import { notFound } from "next/navigation"
// import path from "path"
// import fs from "fs"


export const runtime = "nodejs"
// export const dynamic = "force-dynamic"
export const revalidate = 3600; //ISR

interface PageProps {
  params: Promise<{
    year: string
  }>
}

export default async function DevlogDatePage({ params }: PageProps) {
  const { year } = await params
  const path = [year]


  // turn ['uk', 'each', 'element'] → 'uk/each/element'
  const main_path = path.join('/')

  try {
    const { default: Post } = await import(`@/content/devlogs/${main_path}.mdx`)

    return (
      <article className="px-6 py-12 max-w-5xl mx-auto">
        {/* ✅ Correct usage */}
        <Post />
      </article>

      //  <Post/>
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
