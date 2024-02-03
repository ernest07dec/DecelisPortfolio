import React, { useEffect, useState } from "react";

import { Grid } from "react-loader-spinner";
import { MainProjectsList } from "../jsonfiles/MainProjectsList";

export const ProjectShowcase = () => {
  const [display, setDisplay] = useState("");
  const [projIMG, setprojIMG] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projLink, setProjLink] = useState("");
  const [animation, setAnimation] = useState("flip-left");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const projects = MainProjectsList;
  // DISPLAY CHANGES
  useEffect(() => {
    setLoading(true);
    const changeDisplay = () => {
      const project = projects.find((el) => el.display === display)
        ? projects.find((el) => el.display === display)
        : projects[0];

      setprojIMG(project.img);
      setTitle(project.title);
      setDescription(project.description);
      setProjLink(
        <a target="_blank" href={`http://${project.link}/`}>
          {project.link}
        </a>
      );
    };
    changeDisplay();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [display]);

  return (
    <section>
      <div
        className="grid h-full overflow-hidden w-full lg:grid-cols-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 p-5 border rounded-3xl border-indigo-900"
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-duration="900"
      >
        <div
          className="grid overflow-hidden rounded-3xl w-full items-center col-span-2 brightness-90 bg-no-repeat bg-cover object-contain min-w-screen-md h-[380px] md:h-full"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          {loading ? (
            <div className="w-full h-full flex justify-center items-center">
              {/* LOADING */}
              <Grid
                visible={true}
                height="80"
                width="80"
                color="#5632a8"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{}}
                wrapperClass="grid-wrapper"
              />
            </div>
          ) : (
            <>
              {/* DISPLAY IMAGE AND DESCRIPTION */}
              <img
                className="absolute w-full rounded-3xl"
                src={projIMG}
                data-aos={animation}
                data-aos-offset="300"
                data-aos-duration="900"
              />
              <div
                className={`h-full w-full overflow-hidden rounded-3xl grid-cols-1 px-5 py-10 flex flex-col justify-center hover:backdrop-blur-lg hover:backdrop-brightness-50 hover:justify-between ease-in duration-300 z-40 ${
                  show ? "" : "hidden"
                }`}
              >
                <h1 className="mt-10  font-semibold text-5xl pb-5">{title}</h1>
                <p className="text-lg">{description}</p>
                <p className="mb-10 hover:cursor-pointer underline">
                  {projLink}
                </p>
              </div>
            </>
          )}
        </div>
        <div className="md:block flex flex-wrap items-center justify-center gap-5 md:gap-0 px-5 py-5 text-xl text-center font-bold hover:cursor-pointer">
          {/* PROJECT LISTS */}
          {projects.map((project, index) => {
            return (
              <h3
                key={index}
                className="border-b border-solid py-4  hover:saturate-200 hover:backdrop-brightness-150 hover:font-extrabold transition ease-out hover:cursor-pointer"
                onClick={() => {
                  setDisplay(project.display);
                }}
              >
                {project.title}
              </h3>
            );
          })}
        </div>
      </div>
    </section>
  );
};
