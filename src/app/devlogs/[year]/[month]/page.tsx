// import fs from "fs"
// import path from "path"
import { notFound } from "next/navigation"

export const runtime = "nodejs"
// export const dynamic = "force-dynamic"
export const revalidate = 3600; //ISR

interface PageProps {
  params: Promise<{
    year: string
    month: string
  }>
}

export default async function DevlogDatePage({ params }: PageProps) {
  const { year, month } = await params
  const path = [year, month]


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