import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";

export default function Hero() {
    return (
        <div className="grid grid-cols-6 w-full h-fit gap-0 md:mask-r-from-90% md:mask-r-to-100% md:mask-l-from-85% md:mask-l-to-100% mask-b-from-90% mask-b-to-100% mask-t-from-90% mask-t-to-100%">
            {/* Vertical grid lines */}
            {/* Vertical lines (ONLY 2, aligned to grid boundaries) */}
            
            {/* circles */}
            {/* <div className="absolute left-[16.666%] top-[44%] -translate-x-1/2 hidden xl:block rounded-full w-20 h-20 border border-t-transparent border-dashed border-neutral-400/40 rotate-45 animate-opc" />
            <div className="absolute left-[83.333%] bottom-[17%] -translate-x-1/2 hidden xl:block rounded-full w-20 h-20 border border-l-transparent rotate-45 border-dashed border-neutral-400/40 animate-opc" /> */}



            {/* Grids */}

            {/* top section */}
            <div className="col-span-1 h-10 animate-opc" />
            <div className="relative col-span-4 h-10 border-l border-r border-dashed border-neutral-400/40 animate-opc" >
            <div className="absolute left-0 h-screen  w-px border-l border-dashed border-white animate-line-v [animation-delay:200ms]" />
            <div className="absolute right-0 h-full  w-px border-l border-dashed border-white animate-line-v [animation-delay:200ms]" />
            </div>
            <div className="col-span-1 h-10 animate-opc" />

            {/* first animation line */}
            <div className="col-span-6 relative">
                <div className="absolute inset-0 flex items-start pointer-events-none">
                    <div className="w-full h-px border-t border-dashed border-white animate-line-h [animation-delay:200ms]"></div>
                </div>
            </div>

            {/* first section */}
            <div className="relative col-span-1 border-t border-b border-l border-dashed border-neutral-400/40 animate-opc">
            <div className="absolute left-full md:top-[84%] lg:top[85%] -translate-x-1/2 hidden md:block rounded-full w-20 h-20 border border-r-transparent rotate-45 border-dashed border-neutral-400/40 animate-opc" />
            </div>
            <h1 className="text-zinc-50 col-span-5 border border-dashed border-neutral-400/40 flex items-center justify-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-15 px-5 animate-opc">Learn development through real experiences and projects.</h1>

            {/* second animation line */}
            <div className="col-span-6 relative">
                <div className="absolute inset-0 flex items-start pointer-events-none">
                    <div className="w-full h-px border-t border-dashed border-white animate-line-h [animation-delay:200ms]"></div>
                </div>
            </div>


            <div className="col-span-1 border-l border-dashed border-neutral-400/40 animate-opc" />
            <div className="relative text-zinc-300/80 col-span-4 border-l border-r border-dashed border-neutral-400/40 text-sm md:text-base  lg:text-lg flex items-start justify-center px-5 py-10 animate-opc">
                <span>A platform with learning paths, dev resources, and real developer experiences
                    <span className="text-zinc-100"> in one free and open source platform.</span></span>
                <div className="absolute right-0 top-0 h-screen w-px border-l border-dashed border-white animate-line-v [animation-delay:400ms]" />
            </div>
            <div className="col-span-1 border-r  border-dashed border-neutral-400/40 animate-opc" />

            {/* third animation line */}
            <div className="col-span-6 relative">
                <div className="absolute inset-0 flex items-start pointer-events-none">
                    <div className="w-full h-px border-t border-dashed border-white animate-line-h [animation-delay:200ms]"></div>
                </div>
            </div>

            <div className="col-span-1 border-l  border-t border-b border-dashed border-neutral-400/40 animate-opc" />
            <div className="flex flex-col lg:flex-row items-center justify-center gap-5 col-span-4 border border-dashed border-neutral-400/40 py-6 px-3 animate-opc">
                <Link href='/learn' className="bg-zinc-50 hover:bg-zinc-400 text-xs md:text-sm  lg:text-lg text-zinc-900 cursor-pointer flex items-center gap-2  px-4 py-2 rounded-md hover:shadow-lg border border-zinc-500  hover:border-1 hover:border-zinc-800 hover:shadow-zinc-500/40 transition-color ease-in-out duration-150 ring-3 ring-zinc-500 hover:ring-zinc-200">
                    Start learning
                    <FiArrowUpRight />
                </Link>
                <Link href='/devlogs' className="text-xs md:text-sm  lg:text-lg text-zinc-200 cursor-pointer flex items-center gap-2 border border-zinc-600/60 px-4 py-2 rounded-md hover:text-white hover:shadow-lg hover:shadow-zinc-500/40 hover:border-zinc-300/50 transition-color ease-in-out duration-150">
                    Read logs
                    <FiArrowUpRight />
                </Link>
                <Link href='https://github.com/utkarsh-saxena271/utkarsh-open-devlogs' target="_blank" className="text-xs md:text-sm  lg:text-lg text-zinc-200 cursor-pointer flex items-center gap-2 border border-zinc-600/60 px-4 py-2 rounded-md hover:text-white hover:shadow-lg hover:shadow-zinc-500/40 hover:border-zinc-300/50 transition-color ease-in-out duration-150">
                    <BsGithub />
                    Explore Repository
                </Link>
            </div>
            <div className="relative col-span-1  border-dashed border-r border-t border-b border-neutral-400/40 animate-opc">
            <div className="absolute md:right-[34%] lg:right-[56%] md:bottom-[60%] lg:bottom[85%] -translate-x-1/2 hidden lg:block rounded-full w-20 h-20 border border-l-transparent rotate-45 border-dashed border-neutral-400/40 animate-opc" />
            </div>


            {/* fourth animation line */}
            <div className="col-span-6 relative">
                <div className="absolute inset-0 flex items-start pointer-events-none">
                    <div className="w-full h-px border-t border-dashed border-white animate-line-h [animation-delay:200ms]"></div>
                </div>
            </div>

            <div className="col-span-1 h-10  border-dashed   border-neutral-400/40" />
            <div className="col-span-4 h-10 border-l border-r border- border-dashed border-neutral-400/40 animate-opc" />
            <div className="col-span-1 h-10  border-dashed   border-neutral-400/40" />
        </div>
    )
}



// <div className="absolute inset-0 pointer-events-none">

//                 {/* Left boundary of main content (between col 1 and col 2/3/4/5/6) */}
//                 <div className="absolute top-0 bottom-0 left-[16.666%] w-px border-l border-dashed border-white animate-line-v" />

//                 {/* Right boundary of main content */}
//                 {/* TOP PART */}
//                 <div className="absolute top-0 bottom-0 left-[83.333%] w-px border-l border-dashed border-white animate-line-v " />
//                 <div className="absolute z-20 top-10 bottom-[50%] md:bottom-[50%]  left-[83.333%] w-px bg-black animate-hiden" />
//                 {/* GAP = no element here  bottom-68*/}

//                 {/* BOTTOM PART
//                 <div className="absolute bottom-0 left-[83.333%] w-px h-68 border-l border-dashed border-white animate-line-v [animation-delay:400ms]" /> */}
//             </div>