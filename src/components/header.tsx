import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "@/assets/images/logo.png";
import MenuIcon from "@/assets/icons/menu.svg";

export const Header: React.FC = () => {
  return (
    <nav className="sm:container sm:mx-auto px-4">
      <div className="flex justify-between py-6">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-1">
            <Image src={Logo} width={48} height={48} alt="logo" />
            <span className="text-3xl font-bold">Taylor</span>
          </Link>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-2xl">
          <Link href="#about" className="hover:text-indigo-500 duration-300">
            About Me
          </Link>
          <Link
            href="#experiences"
            className="hover:text-indigo-500 duration-300"
          >
            Experiences
          </Link>
          <Link href="#projects" className="hover:text-indigo-500 duration-300">
            Projects
          </Link>
        </div>
        <div className="hidden sm:flex items-center">
          <button className="bg-indigo-500 hover:bg-indigo-400 px-4 py-2 rounded-md duration-300 shadow-sm text-2xl">
            Hire Me
          </button>
        </div>

        <div className="flex items-center sm:hidden">
          <button>
            <Image src={MenuIcon} width={32} height={32} alt="logo" />
          </button>
        </div>
      </div>
    </nav>
  );
};
