import { techs } from "@/data";
import React from "react";

export const Technologies: React.FC = () => {
  return (
    <section id="technologies">
      <h3 className="text-center text-4xl font-bold">Technologies</h3>
      <div className="my-10 border-b border-b-slate-600" />
      <div className="flex flex-row flex-wrap justify-center gap-10"></div>
    </section>
  );
};
