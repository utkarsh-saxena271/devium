import Link from "next/link"
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs"


export default function Footer() {
  return (
    <footer className="min-w-screen border-t bg-zinc-800/50 border-t-zinc-400/40 flex flex-col items-start justify-between px-10 py-12">
      {/* initial part */}
      <div className="flex flex-col justify-center items-start gap-3 w-full border-b border-zinc-500/50 pb-10 mb-10">
        <div >
          <h1 className="text-3xl font-thin tracking-wide text-zinc-100 hover:text-zinc-300 transition-color duration-150 ease-in-out">Devium</h1>
          <p className="font-thin text-sm text-zinc-200/60"> All my experiences, learnings, and dev resources, all in one open-sourced platform.</p>
        </div>
        <div>
          <p className="font-thin text-sm text-zinc-100"> A product from <span className="text-zinc-200/60 underline underline-offset-1">Utkarsh</span></p>
          <p className="font-thin text-sm text-zinc-200/80">Building in public <Link href="https://x.com/404not_utkarsh" className="text-zinc-200/60 underline underline-offset-2">@404not_utkarsh</Link></p>
        </div>
      </div>
      {/* second part */}
      <div className="grid grid-cols-2 2xl:grid-cols-4 w-full border-b border-zinc-500/50 pb-10 mb-10 ">
        <div className="col-span-1 flex flex-col items-start justify-start gap-3">
          <h1 className="text-xl select-none tracking-wide text-zinc-100">Content</h1>
          <div className="flex flex-col items-start justify-center gap-2">
            <Link href='/devlogs' className="text-md text-zinc-400 hover:text-zinc-200 transition-colors duration-100 ease-in-out" >Devlogs</Link>
          <Link href='/learn' className="text-md text-zinc-400 hover:text-zinc-200 transition-colors duration-100 ease-in-out">Learn</Link>
          </div>
        </div>
        <div className="col-span-1 flex flex-col items-start justify-start gap-3">
          <h1 className="text-xl select-none tracking-wide text-zinc-100">On the Internet:</h1>
          <div className="flex flex-col items-start justify-center gap-2">
            <Link href='https://x.com/404not_utkarsh' className="flex items-center gap-2 text-md text-zinc-400 hover:text-zinc-200 transition-colors duration-100 ease-in-out"><BsTwitterX/><span className="text-sm md:text-base underline decoration-dashed underline-offset-2 decoration-zinc-500">@404not_utkarsh</span></Link>
          <Link href='/https://github.com/utkarsh-saxena271' className="flex items-center gap-2 text-md text-zinc-400 hover:text-zinc-200 transition-colors duration-100 ease-in-out"><BsLinkedin/><span className="text-sm md:text-base underline decoration-dashed underline-offset-2 decoration-zinc-500">@utkarsh-saxena271</span></Link>
          <Link href='https://www.linkedin.com/in/utkarsh-saxena271/' className="flex items-center gap-2 text-md text-zinc-400 hover:text-zinc-200 transition-colors duration-100 ease-in-out"><BsGithub/><span className="text-sm md:text-base underline decoration-dashed underline-offset-2 decoration-zinc-500">@utkarsh-saxena271</span></Link>
          </div>
        </div>
      </div>
      <p className="font-medium text-sm text-zinc-200/60">© 2026 Devium. Open source for developers, by Utkarsh.</p>
    </footer>
  )
}

