"use client"

import { Search, Text } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";

const Nav = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="flex items-center justify-between gap-8 md:gap-4 sm:gap-2 bg-gradient-to-l from-slate-100 via-violet-200 to-purple-400 h-14 w-5/6 rounded-3xl text-slate-900 font-semibold mt-4 absolute left-0 right-0 mx-auto">
      <div className="flex ml-12">
        logo
      </div>

      <ul className="flex gap-12 max-md:gap-6  max-sm:hidden">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </ul>

      <div className="flex gap-4">
        <Search className="mr-12 max-sm:mr-1" />
        <Text className="hidden max-sm:flex mr-6" 
            onClick={()=>setToggleMenu((prev => !prev))}
        />
        {toggleMenu && <ul className="hidden max-sm:flex flex-col items-center justify-start text-left absolute top-20 gap-2 bg-gradient-to-bl from-violet-300 to-purple-50 h-auto w-24 p-4 rounded-xl ">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </ul>}
      </div>
    </nav>
  );
};

export default Nav;
