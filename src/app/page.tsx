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
import { ScrollButton } from "@/components/scroll-button";
import { Technologies } from "@/components/sections/technologies";
import { Parallex } from "@/components/sections/parallex";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className="sm:container sm:mx-auto px-4">
        <Parallex />
        <About />
        <Experiences />
        <Technologies />
        <Projects />
      </main>
      <Footer />
      <ScrollButton />
    </>
  );
};

export default Home;
