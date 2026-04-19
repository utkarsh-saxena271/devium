"use client";
import { BsGithub, BsList, BsStarFill, BsX } from "react-icons/bs";
import Link from "next/link";
import { useState } from "react";

export default function NavLinks({ stars }: { stars: number }) {
  const [open, setOpen] = useState(false);

  // Helper to close the menu
  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-between gap-7 text-sm text-zinc-400">
        <Link href="/learn" className="cursor-pointer hover:text-zinc-200 hover:scale-105 transition-all ease-in-out duration-150">
          Learn
        </Link>
        <Link href="/devlogs" className="cursor-pointer hover:text-zinc-200 hover:scale-105 transition-all ease-in-out duration-150">
          Devlogs
        </Link>
        <Link 
          href="https://github.com/utkarsh-saxena271/utkarsh-open-devlogs" 
          className="cursor-pointer flex items-center justify-center gap-2 border border-zinc-600/60 px-3 py-1 rounded-md hover:text-zinc-200 hover:border-zinc-300/50 group transition-color ease-in-out duration-150"
        >
          <span className="cursor-pointer flex items-center justify-center gap-2"> <BsGithub/> Star on Github</span>
          <span className="cursor-pointer bg-zinc-800/60 text-xs py-1 px-2 rounded-md flex items-center justify-center gap-1 group-hover:bg-zinc-400/30 transition-color ease-in-out duration-150">
            <BsStarFill/>{stars}
          </span>
        </Link>
      </div>

      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setOpen(!open)} 
        className="md:hidden text-3xl text-zinc-400 hover:text-zinc-200 transition-colors"
      >
        {open ? <BsX /> : <BsList />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute flex flex-col items-start justify-center gap-6 rounded-md right-4 top-16 md:hidden border border-zinc-400/40 bg-zinc-950 px-5 py-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <Link 
            href="/learn" 
            onClick={closeMenu}
            className="w-full cursor-pointer text-zinc-400 hover:text-zinc-200 hover:scale-105 transition-all ease-in-out duration-150"
          >
            Learn
          </Link>
          <Link 
            href="/devlogs" 
            onClick={closeMenu}
            className="w-full cursor-pointer text-zinc-400 hover:text-zinc-200 hover:scale-105 transition-all ease-in-out duration-150"
          >
            Devlogs
          </Link>
          <Link 
            href="https://github.com/utkarsh-saxena271/utkarsh-open-devlogs" 
            onClick={closeMenu}
            className="cursor-pointer flex items-center justify-center gap-7 border border-zinc-600/60 px-3 py-1 rounded-md text-zinc-400 hover:text-zinc-200 hover:border-zinc-300/50 transition-color ease-in-out duration-150"
          >
            <span className="flex items-center justify-center gap-2"> <BsGithub/> Star</span>
            <span className="bg-zinc-800/60 text-xs py-1 px-2 rounded-md flex items-center justify-center gap-1">
              <BsStarFill/>{stars}
            </span>
          </Link>
        </div>
      )}
    </>
  );
}