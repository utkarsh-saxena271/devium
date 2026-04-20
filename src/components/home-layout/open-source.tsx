import Link from "next/link";
import { BsGithub } from "react-icons/bs";

export default function OpenSource() {
    return (
        <div className="w-[60%] h-fit flex flex-col justify-center items-center gap-10">
            <h1 className="text-zinc-50 font-bold text-3xl lg:text-4xl flex flex-col md:flex-row items-center md:items-end justify-center gap-3">Open source<span className="text-zinc-300/80 font-thin text-sm md:text-lg xl:text-xl text-center"> Built in public.</span></h1>

            <div className="flex flex-col items-start justify-center">
                <p className="text-lg font-thin text-zinc-300/80">
                    Devium is fully open source.<span className="text-zinc-100"> You can explore the code, track the commits, contribute to it, and watch it evolve over time.
                    </span>
                </p>
                <p className="text-lg font-thin text-zinc-100">
                    I build in public by sharing progress, lessons, and best practices so others can grow, learn and get inspired to build more.
                </p>
            </div>
            <div className="flex items-center justify-center gap-5">
                <Link href='https://github.com/utkarsh-saxena271/devium' target="_blank" className="text-xs md:text-sm  lg:text-lg text-zinc-200 cursor-pointer flex items-center gap-2 border border-zinc-600/60 px-4 py-2 rounded-md hover:text-white hover:shadow-lg hover:shadow-zinc-500/40 hover:border-zinc-300/50 transition-color ease-in-out duration-150">
                    <BsGithub />
                    Explore Repository
                </Link>

                <Link href='https://x.com/404not_utkarsh' className="text-xs md:text-sm  lg:text-lg text-zinc-200 cursor-pointer flex items-center gap-2 border border-zinc-600/60 px-4 py-2 rounded-md hover:text-white hover:shadow-lg hover:shadow-zinc-500/40 hover:border-zinc-300/50 transition-color ease-in-out duration-150">
                    Follow the Journey
                </Link>
                
            </div>
        </div>
    )
}