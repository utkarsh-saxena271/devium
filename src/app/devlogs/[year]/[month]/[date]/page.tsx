interface PageProps {
  params: Promise<{
    year: string
    month: string
    date: string
  }>
}

import fs from "fs"
import { notFound } from "next/navigation"
import path from "path"
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
      <article className="py-12 max-w-5xl mx-auto">
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



export const dynamicParams = true


export async function generateStaticParams() {
  const devlogsDir = path.join(process.cwd(), "src/content/devlogs");
  
  if (!fs.existsSync(devlogsDir)) return [];

  const paths: { year: string; month: string; date: string }[] = [];

  // Crawl: Year -> Month -> Date.mdx
  const years = fs.readdirSync(devlogsDir);
  for (const year of years) {
    const yearPath = path.join(devlogsDir, year);
    if (!fs.statSync(yearPath).isDirectory()) continue;

    const months = fs.readdirSync(yearPath);
    for (const month of months) {
      const monthPath = path.join(yearPath, month);
      if (!fs.statSync(monthPath).isDirectory()) continue;

      const files = fs.readdirSync(monthPath);
      for (const file of files) {
        if (file.endsWith(".mdx")) {
          paths.push({
            year,
            month,
            date: file.replace(".mdx", ""),
          });
        }
      }
    }
  }

  // Sort by date (descending) and take only the latest 10
  // This keeps your 'npm run build' instant.
  return paths
    .sort((a, b) => {
      const dateA = `${a.year}-${a.month}-${a.date}`;
      const dateB = `${b.year}-${b.month}-${b.date}`;
      return dateB.localeCompare(dateA);
    })
    .slice(0, 10); 
}