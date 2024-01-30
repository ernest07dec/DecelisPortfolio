import React, { useState } from "react";
import { Link } from "react-router-dom";

export const MiniProjectCard = ({ project }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      {/* IMG BACKGROUND */}
      <div
        className=" grid w-full items-center overflow-hidden rounded-3xl bg-no-repeat bg-center bg-cover h-[260px]"
        style={{
          backgroundImage: `url(${project.img})`,
        }}
      >
        <div
          className="text-gray-200 h-[260px] grid-cols-1 px-5 py-10 flex flex-col justify-center grid-cols-1 hover:backdrop-blur-lg hover:backdrop-brightness-50 ease-in duration-300"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          {/* LINK AND DESCRIPTION */}
          {show && (
            <>
              <p>{project.description}</p>
              <Link to={`https://${project.link}`}>
                <p className="text-gray-100 hover:underline text-blue-300">
                  {project.link}
                </p>
              </Link>
            </>
          )}
        </div>
      </div>
      <h1 className="font-semibold text-2xl pt-5 pb-8">{project.title}</h1>
    </div>
  );
};
