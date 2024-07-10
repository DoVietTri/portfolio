"use client";

import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { TimelineElement } from "../timeline-element";
import { experiences } from "@/data";
import Link from "next/link";
import Image from "next/image";

export const Experiences: React.FC = () => {
  return (
    <section id="experiences" className="w-full my-20">
      <h3 className="text-center text-4xl font-bold">Experiences</h3>
      <div className="my-10 border-b border-b-slate-600" />
      <div className="">
        <VerticalTimeline>
          {experiences.map((ex) => {
            return (
              <TimelineElement
                {...ex.elProps}
                iconStyle={{ background: "#ffffff" }}
                icon={
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src={ex.elProps?.icon as string}
                      fill
                      style={{ objectFit: "contain" }}
                      alt={ex.info.companyName}
                    />
                  </div>
                }
                key={ex.info.companyName}
              >
                <h1 className="vertical-timeline-element-title font-bold text-xl">
                  {ex.info.companyName}
                </h1>
                <div className="vertical-timeline-element-subtitle">
                  <Link
                    href={ex.info.companySite}
                    target="_blank"
                    className="hover:text-indigo-500 duration-300"
                  >
                    {ex.info.companySite}
                  </Link>
                </div>
                <div className="mt-3">Role: {ex.info.role}</div>
              </TimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
};
