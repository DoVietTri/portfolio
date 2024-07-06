import { socialNetworks } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="sm:container sm:mx-auto px-4">
      <div className="border-t border-t-slate-600 pt-14 pb-10">
        <h3 className="text-center mb-10 text-4xl">Follow Me</h3>
        <div className="flex justify-center mb-10 gap-5">
          {socialNetworks.map((social) => (
            <Link
              key={social.title}
              href={social.link}
              target="_blank"
              className="bg-slate-600 hover:bg-slate-500 duration-300 rounded-lg shadow-md p-3"
            >
              <Image
                src={social.icon}
                width={48}
                height={48}
                alt="social-icon"
              />
            </Link>
          ))}
        </div>
        <div className="text-center text-xl">
          © 2024. NextJS & Tailwind CSS Portfolio . Developed by TAYLOR
        </div>
      </div>
    </footer>
  );
};
