import { projects } from "@/data";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../3d-card";
import Image from "next/image";

export const Projects = () => {
  return (
    <section id="projects" className="w-full my-6">
      <h3 className="text-center text-4xl font-bold">Projects Portfolio</h3>
      <div className="my-10 border-b border-b-slate-600" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <CardContainer key={project.index} className="inter-var">
            <CardBody className="w-full flex flex-col justify-between p-6 border bg-slate-600 border-slate-700 rounded-lg shadow-lg min-h-[500px]">
              <div>
                <CardItem translateZ="100" className="w-full">
                  <Image
                    src={project.image}
                    className="w-full object-contain rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem translateZ="50" className="mt-5">
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  <p className="">{project.description}</p>
                  <div className="mt-2">
                    <a
                      href={project.domain}
                      target="_blank"
                      className="hover:text-indigo-500 duration-300"
                    >
                      {project.domain}
                    </a>
                  </div>
                </CardItem>
              </div>
              <CardItem translateZ="50" className="mt-5 min-h-[75px]">
                <div className="flex gap-2 flex-wrap">
                  {project.techStacks.map((tech, index) => (
                    <div
                      key={`${tech.title}+${index}`}
                      className={`px-2 py-1 rounded-md shadow-lg`}
                      style={{ background: tech.bgColor }}
                    >
                      {tech.title}
                    </div>
                  ))}
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
};
