import React, { useEffect } from "react";
import { AnimatedPage } from "../../components/framermotion/AnimatedPage";

import { useState, useRef } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { ProjectShowcase } from "../../components/projectsshowcase/ProjectShowcase";
import { MiniProjects } from "../../components/projectsshowcase/MiniProjects";
export const Projects = () => {
  // console.log(window.location.path);
  useEffect(() => {
    AOS.init();
  }, []);
  const projectRef = useRef(null);
  return (
    <AnimatedPage>
      <>
        <section
          ref={projectRef}
          className="max-w-screen-xl mx-auto px-5 md:mt-0 pt-32 mt-20 overflow-hidden rounded-l-3xl  text-gray-200 text-center"
        >
          <h2
            className="mb-7 text-3xl font-semibold text-dark sm:text-4xl md:text-[42px]"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-duration="900"
          >
            My Recent Projects
          </h2>
          <ProjectShowcase />
        </section>
        <section className="text-center text-gray-200 pt-20 pb-20 max-w-screen-xl mx-auto overflow-hidden">
          <h2
            className="mb-10 text-3xl font-semibold text-dark sm:text-5xl md:text-[42px]"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-duration="900"
          >
            Mini Projects
          </h2>
          <MiniProjects />
        </section>
      </>
    </AnimatedPage>
  );
};
