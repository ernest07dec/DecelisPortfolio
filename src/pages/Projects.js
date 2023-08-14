import React, { useEffect } from "react";
import CargoPF from "../assets/cargopf.png";
import Nutrichef from "../assets/nutrichef.png";
import Cinezone2 from "../assets/cinezone2pf.png";
import Kodejobs from "../assets/kodejobs.png";
import Cinezone1 from "../assets/cinezonepf.png";
import Cargo from "../assets/cargo1pf.png";
import NewsGrid from "../assets/newsgrid.png";

import Music from "../assets/music.png";
import TicTacToe from "../assets/tictactoe.png";
import HTA from "../assets/hotelta.png";
import Kodeledger from "../assets/Kodeledger.png";
import Koderesto from "../assets/koderesto.png";
import Shopping from "../assets/shoppinglist.png";

import { useState, useRef } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
export const Projects = () => {
  const [title, setTitle] = useState("");
  const [display, setDisplay] = useState("CarGo Final");
  const [description, setDescription] = useState("");
  const [projLink, setProjLink] = useState("");
  const [projIMG, setprojIMG] = useState(CargoPF);
  const [animation, setAnimation] = useState("flip-left");
  const [scrollTop, setScrollTop] = useState(0);
  // console.log(window.location.path);
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const projectRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const executeScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop - 150,
      left: 0,
      behavior: "smooth",
    });
  };
  const changeDescription = (e) => {
    switch (e) {
      case "cargofinal":
        setDisplay("CarGo Final");
        setprojIMG(CargoPF);
        break;
      case "nutrichef":
        setDisplay("NutriChefHub");
        setprojIMG(Nutrichef);
        break;
      case "cinezone2":
        setDisplay("CineZone V2.0");
        setprojIMG(Cinezone2);
        break;
      case "kodejobs":
        setDisplay("KodeJobs");
        setprojIMG(Kodejobs);
        break;
      case "cinezone1":
        setDisplay("CineZone V1.0");
        setprojIMG(Cinezone1);
        break;
      case "cargo1":
        setDisplay("CarGo");
        setprojIMG(Cargo);
        break;
      case "newsgrid":
        setDisplay("NewsGrid");
        setprojIMG(NewsGrid);
        break;
    }
  };
  const displayDescription = (e) => {
    switch (display) {
      case "CarGo Final":
        setTitle("CarGo Final");
        setDescription(
          "So if you're looking for a reliable, affordable, and convenient car rental company for your next trip, look no further than us. Our commitment to customer satisfaction, coupled with our wide range of vehicles and flexible rental options, makes us the ideal choice for all your transportation needs."
        );

        setProjLink("capstone-cargo.vercel.app");
        break;

      default:
        setTitle("TITLE");
        setDescription("https://codepen.io/Ernest-Fortune-Decelis/pen/wvQYGXY");
        setProjLink("linklinklink");
        break;
    }
  };

  const clearDescription = () => {
    setTitle("");
    setDescription("");
    setProjLink("");
  };
  return (
    <>
      <section
        ref={projectRef}
        className="max-w-screen-xl mx-auto px-5 overflow-hidden rounded-l-3xl text-gray-200 pt-24 text-center"
      >
        <h2
          className="mb-7 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-duration="900"
        >
          My Recent Projects
        </h2>
        <div>
          <div
            className="grid h-full overflow-hidden w-full lg:grid-cols-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 p-5 border rounded-3xl border-indigo-900"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-duration="900"
          >
            <div
              className="grid overflow-hidden rounded-3xl w-full items-center col-span-2 brightness-90 bg-no-repeat bg-cover object-contain min-w-screen-md h-[380px] md:h-full"
              style={
                {
                  // backgroundImage: `url(${projIMG})`,
                }
              }
              onMouseEnter={displayDescription}
              onMouseLeave={clearDescription}
            >
              <img
                className="absolute w-full rounded-3xl"
                src={projIMG}
                data-aos={animation}
                data-aos-offset="300"
                data-aos-duration="900"
              />
              <div className="h-full w-full overflow-hidden rounded-3xl grid-cols-1 px-5 py-10 flex flex-col justify-center grid-cols-1 hover:backdrop-blur-lg hover:backdrop-brightness-50 hover:justify-between ease-in duration-300 z-40">
                <h1 className="mt-10  font-semibold text-5xl pb-5">{title}</h1>
                <p className="text-lg">{description}</p>
                <p className="mb-10 hover:cursor-pointer hover:underline">
                  {projLink}
                </p>
              </div>
            </div>
            <div
              id="projectlists"
              className="md:block flex flex-wrap items-center justify-center gap-5 md:gap-0 px-5 py-5 text-xl text-center font-bold hover:cursor-pointer"
              onClick={(e) => {
                if (e.target.parentElement.id === "projectlists") {
                  e.target.parentElement.previousElementSibling.classList.add(
                    "motion-safe:animate-bounce"
                  );
                  setTimeout(() => {
                    e.target.parentElement.previousElementSibling.classList.remove(
                      "motion-safe:animate-bounce"
                    );
                  }, 500);
                }
              }}
            >
              <h3
                className="border-b border-solid py-4  hover:saturate-200 hover:backdrop-brightness-150 hover:font-extrabold transition ease-out hover:cursor-pointer"
                onClick={(e) => {
                  changeDescription("cargofinal");
                }}
              >
                CARGO FINAL
              </h3>
              <h3
                className="border-b border-solid py-4 hover:saturate-200 hover:backdrop-brightness-150 hover:font-extrabold transition ease-out hover:cursor-pointer"
                onClick={(e) => changeDescription("nutrichef")}
              >
                NUTRICHEFHUB
              </h3>
              <h3
                className="border-b border-solid py-4  hover:saturate-200 hover:backdrop-brightness-150 hover:font-extrabold transition ease-out hover:cursor-pointer"
                onClick={(e) => changeDescription("cinezone2")}
              >
                CINEZONE V2.0
              </h3>
              <h3
                className="border-b border-solid py-4 hover:saturate-200 hover:backdrop-brightness-150 hover:font-extrabold transition ease-out hover:cursor-pointer"
                onClick={(e) => changeDescription("kodejobs")}
              >
                KODEJOBS
              </h3>
              <h3
                className="border-b border-solid py-4 hover:saturate-200 hover:backdrop-brightness-150 hover:font-extrabold transition ease-out hover:cursor-pointer"
                onClick={(e) => changeDescription("cinezone1")}
              >
                CINEZONE V1.0
              </h3>
              <h3
                className="border-b border-solid py-4 hover:saturate-200 hover:backdrop-brightness-150 hover:font-extrabold transition ease-out hover:cursor-pointer"
                onClick={(e) => changeDescription("cargo1")}
              >
                CARGO
              </h3>
              <h3
                className="border-b border-solid py-4 md:border-none  hover:saturate-200 hover:backdrop-brightness-150 hover:font-extrabold transition ease-out hover:cursor-pointer"
                onClick={(e) => changeDescription("newsgrid")}
              >
                NEWSGRID
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center text-gray-200 pt-20 pb-20 max-w-screen-xl mx-auto overflow-hidden">
        <h2
          className="mb-10 text-3xl font-bold text-dark sm:text-5xl md:text-[42px]"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-duration="900"
        >
          Mini Projects
        </h2>
        <div
          className="mx-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-duration="900"
        >
          <div
            className=" grid h-full w-full items-center overflow-hidden rounded-3xl bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url(${HTA})`,
            }}
          >
            <div
              className="text-gray-200 h-64 grid-cols-1 px-5 py-10 flex flex-col justify-center grid-cols-1 hover:backdrop-blur-lg hover:justify-between ease-in duration-300"
              onMouseEnter={displayDescription}
              onMouseLeave={clearDescription}
            >
              <h1 className=" font-semibold text-5xl">Hotel Team A</h1>
              <p>{description}</p>
            </div>
          </div>
          <div
            className=" grid h-full w-full items-center overflow-hidden rounded-3xl bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url(${TicTacToe})`,
            }}
          >
            <div
              className="text-gray-900 h-64 grid-cols-1 px-5 py-10 flex flex-col justify-center grid-cols-1 hover:backdrop-blur-lg hover:justify-between ease-in duration-300"
              onMouseEnter={displayDescription}
              onMouseLeave={clearDescription}
            >
              <h1 className=" font-semibold text-5xl">TicTacToe</h1>
              <p>{description}</p>
            </div>
          </div>
          <div
            className=" grid h-full w-full items-center overflow-hidden rounded-3xl bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url(${Kodeledger})`,
            }}
          >
            <div
              className="text-gray-100 h-64 grid-cols-1 px-5 py-10 flex flex-col justify-center grid-cols-1 hover:backdrop-blur-lg hover:justify-between ease-in duration-300"
              onMouseEnter={displayDescription}
              onMouseLeave={clearDescription}
            >
              <h1 className="font-semibold text-5xl">Kodeledger</h1>
              <p>{description}</p>
            </div>
          </div>
          <div
            className=" grid h-full w-full items-center overflow-hidden rounded-3xl bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url(${Koderesto})`,
            }}
          >
            <div
              className="text-gray-900 h-64 grid-cols-1 px-5 py-10 flex flex-col justify-center grid-cols-1 hover:backdrop-blur-lg hover:justify-between ease-in duration-300"
              onMouseEnter={displayDescription}
              onMouseLeave={clearDescription}
            >
              <h1 className="font-semibold text-5xl">KodeResto</h1>
              <p>{description}</p>
            </div>
          </div>

          <div
            className=" grid h-full w-full items-center overflow-hidden rounded-3xl bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url(${Music})`,
            }}
          >
            <div
              className="text-gray-200 h-64 grid-cols-1 px-5 py-10 flex flex-col justify-center grid-cols-1 hover:backdrop-blur-lg hover:justify-between ease-in duration-300"
              onMouseEnter={displayDescription}
              onMouseLeave={clearDescription}
            >
              <h1 className="font-semibold text-5xl">Music Preview</h1>
              <p>{description}</p>
            </div>
          </div>
          <div
            className=" grid h-full w-full items-center overflow-hidden rounded-3xl bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url(${Shopping})`,
            }}
          >
            <div
              className="text-gray-900 h-64 grid-cols-1 px-5 py-10 flex flex-col justify-center grid-cols-1 hover:backdrop-blur-lg hover:justify-between ease-in duration-300"
              onMouseEnter={displayDescription}
              onMouseLeave={clearDescription}
            >
              <h1 className="font-semibold text-5xl">Shopping List</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
