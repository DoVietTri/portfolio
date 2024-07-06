import { NextPage } from "next";
import React from "react";
import Image from "next/image";
import DownloadIcon from "@/assets/icons/download.svg";
import Developer from "@/assets/images/developer.svg";
import { Header } from "@/components/header";
import { Projects } from "@/components/sections/projects";
import { Footer } from "@/components/footer";
import { About } from "@/components/sections/about";
import { Experiences } from "@/components/sections/experiences";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className="sm:container sm:mx-auto px-4">
        <section className="w-full flex flex-col md:flex-row gap-4 md:gap-0 my-10">
          <div className="w-full md:w-1/3 md:flex md:flex-col md:justify-center">
            <h1 className="text-center md:text-start uppercase text-3xl font-bold">
              Hi, I am Taylor Do
            </h1>
            <h2 className="text-center md:text-start text-xl">
              A Frontend Developer & Design Enthusiast{" "}
            </h2>

            <div className="flex items-center justify-center md:justify-start mt-6">
              <button className="bg-gray-400 hover:bg-gray-300 px-4 py-2 rounded-md duration-300 shadow-sm flex gap-2">
                <Image
                  src={DownloadIcon}
                  alt="download-icon"
                  width={24}
                  height={24}
                />
                <span>Download CV</span>
              </button>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <Image
              src={Developer}
              className="max-w-full w-full h-auto"
              alt="developer"
            />
          </div>
        </section>

        <About />
        <Experiences />
        <Projects />
      </main>
      <Footer />
    </>
  );
};

export default Home;
