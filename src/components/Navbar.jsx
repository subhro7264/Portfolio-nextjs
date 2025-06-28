'use client';

import Link from "next/link";

const Navbar = () => {

  return (

    <>
 
        <nav className="fixed top-4 left-0 right-0 mx-auto z-50
                w-3/4 backdrop-blur-md bg-white/10 dark:bg-white/10
                border border-white/20 dark:border-white/20
                shadow-lg rounded-full px-6 py-3 flex justify-between items-center
                text-sm font-medium text-white">
  
 {/* ------------------------------------------Logo Left-------------------------------------------------- */}
  <Link href="/" className="text-lg font-bold text-indigo-300 hover:text-white transition">
    Subhro
  </Link>

 {/* ---------------------------------------Nav Links Right ----------------------------------------*/}
   <div className="flex gap-6">
    <Link href="/pages/about" className="hover:text-indigo-200 transition">
      About
    </Link>
    <Link href="/pages/project" className="hover:text-indigo-200 transition">
      Projects
    </Link>
    <Link href="/pages/mySkills" className="hover:text-indigo-200 transition">
      Myskills
    </Link>
   </div>

 </nav>

  </>
 
  );
};

export default Navbar;
