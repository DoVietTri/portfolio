"use client";
import React from "react";
import Image from "next/image";
import Avatar from "@/assets/images/avatar.jpg";

export const About: React.FC = () => {
  return (
    <section id="#about" className="w-full my-6">
      <h3 className="text-center text-4xl font-bold">About Me</h3>
      <div className="my-10 border-b border-b-slate-600" />
      <div className="w-full flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/3">
          <Image
            src={Avatar}
            className="max-w-full w-full h-auto"
            alt="avatar"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h4 className="text-3xl font-bold text-center">Information</h4>

          <div className="text-xl mt-6">
            <div className="mt-3 text-justify">
              Hello everyone! My name is Tri. I am a Web Developer. With over 3
              years of experience in this position, I have acquired the
              necessary skills and knowledge to contribute to successful
              projects. I consider myself a passionate and dedicated programmer.
              I enjoy every step of the process involved in creating software,
              from idea generation to planning, requirement analysis, and
              implementation. What brings me the most satisfaction is seeing the
              software product running smoothly and benefiting my clients.
            </div>
            <div className="mt-5">
              <span className="inline-block min-w-[210px] font-bold">
                English name{" "}
              </span>
              <span>Taylor Do</span>
            </div>
            <div className="mt-3">
              <span className="inline-block min-w-[210px] font-bold">
                Vietnamese name{" "}
              </span>
              <span>Đỗ Viết Trí</span>
            </div>
            <div className="mt-3">
              <span className="inline-block min-w-[210px] font-bold">
                Date of birth{" "}
              </span>
              <span>27-09-1999</span>
            </div>
            <div className="mt-3">
              <span className="inline-block min-w-[210px] font-bold">
                Born in{" "}
              </span>
              <span>Thieu Hop - Thieu Hoa - Thanh Hoa</span>
            </div>
            <div className="mt-3">
              <span className="inline-block min-w-[210px] font-bold">
                Live in{" "}
              </span>
              <span>Nam Tu Liem - Ha Noi</span>
            </div>
            <div className="mt-3">
              <span className="inline-block min-w-[210px] font-bold">
                University{" "}
              </span>
              <span>HaNoi University of Science and Technology</span>
            </div>
            <div className="mt-3">
              <span className="inline-block min-w-[210px] font-bold">
                Major{" "}
              </span>
              <span>Software Technology</span>
            </div>
            <div className="mt-3">
              <span className="inline-block min-w-[210px] font-bold">
                Year of Graduation{" "}
              </span>
              <span>2021</span>
            </div>
            <div className="mt-3">
              <span className="inline-block min-w-[210px] font-bold">
                Degree Classification{" "}
              </span>
              <span>Good</span>
            </div>
            <div className="mt-3">
              <span className="inline-block min-w-[210px] font-bold">
                Gmail{" "}
              </span>
              <span>tri.dv270999@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
