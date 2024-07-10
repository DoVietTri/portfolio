"use client";
import React, { useEffect, useState } from "react";

export const ScrollButton: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.document.documentElement.scrollTop >= 500);
    };
    onScroll();
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className={`w-[64px] h-[64px] rounded-full flex justify-center items-center bg-indigo-500 hover:bg-indigo-400 transition-opacity ${
            visible ? "opacity-100" : "opacity-0"
          } ease-in-out delay-150 duration-300 shadow-2xl fixed right-5 bottom-5`}
        >
          <svg width={28} height={28} viewBox="0 0 256 256" fill="#ffffff">
            <path d="M222.138,91.475l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051s6.744,2.5,9.244,0L122,21.85  V249.6c0,3.535,2.466,6.4,6,6.4s6-2.865,6-6.4V21.85l78.881,78.676c1.25,1.25,2.992,1.875,4.629,1.875s3.326-0.625,4.576-1.875  C224.586,98.025,224.638,93.975,222.138,91.475z" />
          </svg>
        </button>
      )}
    </>
  );
};
