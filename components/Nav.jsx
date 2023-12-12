"use client";

import { Search, Text } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="flex items-center justify-between gap-8 md:gap-4 sm:gap-2 bg-gradient-to-r from-blue-500 to-purple-500 h-14 w-5/6 rounded-3xl text-slate-50 font-bold text-base mt-4 absolute left-0 right-0 mx-auto bg-transparent backdrop-blur-md shadow-xl">
      <div className="flex ml-12">logo</div>

      <ul className="flex gap-12 max-md:gap-6  max-md:hidden ">
        <Link className=" hover:text-slate-300 ease-in duration-200 " href="/">
          Home
        </Link>
        <Link
          className="hover:text-slate-300 ease-in duration-200 "
          href="/about"
        >
          About
        </Link>
        <Link
          className="hover:text-slate-300 ease-in duration-200 "
          href="/services"
        >
          Services
        </Link>
        <Link
          className="hover:text-slate-300 ease-in duration-200 "
          href="/contact"
        >
          Contact
        </Link>
        <Link
          className="hover:text-slate-300 ease-in duration-200 "
          href="/blog"
        >
          Blog
        </Link>
      </ul>

      {/* mobile navigation */}

      <div className="flex gap-4">
        <Search className="mr-12 max-md:mr-1 hover:text-slate-50 ease-in duration-200 cursor-pointer" />
        <Text
          className="hidden max-md:flex mr-6"
          onClick={() => setToggleMenu((prev) => !prev)}
        />
        {toggleMenu && (
          <ul className="hidden max-md:flex flex-col items-center justify-start text-left absolute top-20 gap-2 bg-gradient-to-r from-blue-500 to-purple-500 h-auto w-24 p-4 rounded-xl z-30">
            <Link
              className="hover:text-slate-300 ease-in duration-200 "
              href="/"
            >
              Home
            </Link>
            <Link
              className="hover:text-slate-300 ease-in duration-200 "
              href="/about"
            >
              About
            </Link>
            <Link
              className="hover:text-slate-300 ease-in duration-200 "
              href="/services"
            >
              Services
            </Link>
            <Link
              className="hover:text-slate-300 ease-in duration-200 "
              href="/contact"
            >
              Contact
            </Link>
            <Link
              className="hover:text-slate-300 ease-in duration-200 "
              href="/blog"
            >
              Blog
            </Link>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
