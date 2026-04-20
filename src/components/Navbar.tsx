import Link from "next/link";
import NavLinks from "./NavLinks";



// fetch GitHub stars (server-side)
const getGithubStars = async () => {
  try {
    const res = await fetch(
      "https://api.github.com/repos/utkarsh-saxena271/devium",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return 0;
    const data = await res.json();
    return data.stargazers_count ?? 0;
  } catch {
    return 0;
  }
};


export default async function Navbar(){
   const stars = await getGithubStars();


  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-3 border-b border-b-zinc-400/40 backdrop-blur-lg">
      <Link href='/' className="cursor-pointer text-3xl font-thin tracking-wide text-white hover:text-zinc-400 text-shadow-zinc-300/40 text-shadow-xs">Devium</Link>
      <NavLinks stars = {stars}/>
    </nav>
  );
};


// import { Roboto, Montserrat } from "next/font/google";
// import Link from "next/link";
// import { BsGithub, BsStarFill } from "react-icons/bs";

// const roboto = Roboto({ subsets: ["latin"] });
// const montserrat = Montserrat({ subsets: ["latin"] });

// // fetch GitHub stars (server-side)
// const getGithubStars = async () => {
//   try {
//     const res = await fetch(
//       "https://api.github.com/repos/utkarsh-saxena271/devium",
//       { next: { revalidate: 3600 } }
//     );
//     if (!res.ok) return 0;
//     const data = await res.json();
//     return data.stargazers_count ?? 0;
//   } catch {
//     return 0;
//   }
// };

// const Navbar = async () => {
//   const stars = await getGithubStars();

//   return (
//     <nav
//       className={`${roboto.className} flex justify-between items-center bg-slate-900 px-6 h-20 shadow-sm`}
//     >
//       {/* Logo */}
//       <Link
//         href="/"
//         className={`${montserrat.className} cursor-pointer font-extralight text-3xl text-white hover:text-slate-400 transition-colors`}
//       >
//         Utkarsh-ODL
//       </Link>

//       {/* Navigation Links */}
//       <div className="flex items-center gap-4 md:gap-6 text-white">
//         <Link
//           href="/devlogs"
//           className="px-4 py-2 rounded-md bg-slate-700 hover:bg-slate-600 text-lg transition-colors"
//         >
//           Devlogs
//         </Link>

//         <Link
//           href="/learn"
//           className="px-4 py-2 rounded-md bg-slate-700 hover:bg-slate-600 text-lg transition-colors"
//         >
//           Learn
//         </Link>

//         <Link
//           href="https://github.com/utkarsh-saxena271/devium"
//           target="_blank"
//           className="flex items-center gap-2 px-4 py-2 rounded-md bg-green-600 hover:bg-green-500 text-lg transition-colors"
//         >
//           <BsGithub size={20} />
//           Star on GitHub
//           <span className="flex flex-row items-center gap-1 ml-2 bg-green-800/30 px-2 py-1 rounded text-md">
//             <BsStarFill size={16} />
//             {stars}
//           </span>
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;