import Hero from "../assets/hero2.mp4";
import CargoPF from "../assets/cargopf.png";
import Nutrichef from "../assets/nutrichef.png";
import Cinezone2 from "../assets/cinezone2pf.png";
import Kodejobs from "../assets/kodejobs.png";
import Cinezone1 from "../assets/cinezonepf.png";
import Cargo from "../assets/cargo1pf.png";
import NewsGrid from "../assets/newsgrid.png";

import Bootstrap from "../assets/bootstrap.png";
import Express from "../assets/express.png";
import Github from "../assets/github.png";
import Laravel from "../assets/laravel.png";
import Mongodb from "../assets/mongdb.png";
import Nodejs from "../assets/nodejs.png";
import Php from "../assets/phpphp.png";
import Reactlogo from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import About1 from "../assets/about1.jpg";
import About2 from "../assets/about2.jpg";
import { FaDownload, FaPhone, FaFolder } from "react-icons/fa";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export const Home = () => {
  const [projIMG, setprojIMG] = useState(CargoPF);
  const [title, setTitle] = useState("");
  const [display, setDisplay] = useState("CarGo Final");
  const [description, setDescription] = useState("");
  const [projLink, setProjLink] = useState("");
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
        setDescription("DESCRIPTION DESCRIPTION");
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
    <div>
      <div className="text-center text-gray-200">
        <section>
          <div className="">
            <div
              className="h-screen w-full absolute flex flex-col text-center md:text-left justify-center"
              data-aos="fade-right"
            >
              <h1 className="lg:text-8xl md:text-6xl text-5xl px-20">Hello!</h1>
              <h1 className="lg:text-8xl md:text-6xl text-5xl px-20">
                I'm Ernest,
              </h1>
              <h1 className="lg:text-8xl md:text-6xl text-5xl px-20">
                web developer.
              </h1>
              <p className="px-20 pt-16 md:text-2xl">
                I am a Full-stack Web Developer living in Cavite, Philippines. I
                enjoy building and debugging web development projects.
              </p>
              <p className="px-20 md:text-2xl">
                Great Projects, All about myself, and ways to connect with me.
              </p>
              <div className="px-24 lg:mt-10 mt-20 text-2xl flex flex-col md:flex-row gap-5">
                <button
                  onClick={() => executeScroll(projectRef.current)}
                  type="button"
                  className="text-white flex justify-center ring-2 ring-blue-200 hover:ring-4 hover:ring-blue-300 font-medium text-sm px-4 py-2 text-center mr-3 md:mr-0 text-xl z-40"
                >
                  Projects
                  <FaFolder className="ml-5 mt-1 text-lg" />
                </button>
                <button
                  type="button"
                  className="text-white justify-center flex ring-2 ring-blue-200 hover:ring-4 hover:ring-blue-300 font-medium text-sm px-4 py-2 text-center mr-3 md:mr-0 text-xl z-40"
                >
                  About
                  <FaDownload className="ml-5 mt-1 text-lg" />
                </button>
                <button
                  type="button"
                  className="text-white flex justify-center ring-2 ring-blue-200 hover:ring-4 hover:ring-blue-300 font-medium text-sm px-4 py-2 text-center mr-3 md:mr-0 text-xl z-40"
                >
                  Contact
                  <FaPhone className="ml-5 mt-1 text-lg" />
                </button>
              </div>
            </div>
            {/* <img
              className="h-screen overlow-hidden w-full object-cover"
              src={Hero}
            ></img> */}
            <video
              className="h-screen overlow-hidden w-full object-cover"
              autoPlay
              loop
              muted
            >
              <source src={Hero} type="video/mp4" />
            </video>
          </div>
        </section>
        <div className="flex hidden md:inline-block justify-center z-40 relative bottom-28 pt-10">
          <div
            className="bg-gray-950 rounded-full  text-7xl border border-solid border-4 border-indigo-950 py-10 px-16"
            data-aos="zoom-in-up"
          >
            Welcome!
          </div>
        </div>
        <section
          ref={projectRef}
          className="max-w-screen-xl mx-auto px-5 md:mt-0 mt-20 overflow-hidden rounded-l-3xl"
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
              className="grid h-full overflow-hidden w-full lg:grid-cols-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 border-2 border-solid border-indigo-800 rounded-3xl p-5"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-duration="900"
            >
              <div
                className="text-white  grid overflow-hidden rounded-3xl w-full items-center col-span-2 brightness-90 bg-no-repeat bg-cover h-[400px] md:h-full"
                style={{
                  backgroundImage: `url(${projIMG})`,
                }}
                onMouseEnter={displayDescription}
                onMouseLeave={clearDescription}
              >
                <div className="h-full w-full overflow-hidden rounded-3xl grid-cols-1 px-5 py-10 flex flex-col justify-center grid-cols-1 hover:backdrop-blur-lg hover:backdrop-brightness-50 hover:justify-between ease-in duration-300">
                  <h1 className="mt-10 text-white font-semibold text-5xl pb-5">
                    {title}
                  </h1>
                  <p className="text-lg">{description}</p>
                  <p className="mb-10 hover:cursor-pointer hover:underline">
                    {projLink}
                  </p>
                </div>
              </div>
              <div className="md:block flex flex-wrap items-center justify-center gap-5 md:gap-0 px-5 py-5 text-xl text-center font-bold hover:cursor-pointer">
                <h3
                  className="border-b border-solid py-6  hover:saturate-200 hover:backdrop-brightness-150 hover:font-extrabold transition ease-out hover:cursor-pointer"
                  onClick={(e) => changeDescription("cargofinal")}
                >
                  CARGO FINAL
                </h3>
                <h3
                  className="border-b border-solid py-6 hover:saturate-200 hover:backdrop-brightness-150 hover:font-extrabold transition ease-out hover:cursor-pointer"
                  onClick={(e) => changeDescription("nutrichef")}
                >
                  NUTRICHEFHUB
                </h3>
                <h3
                  className="border-b border-solid py-6  hover:saturate-200 hover:backdrop-brightness-150 hover:font-extrabold transition ease-out hover:cursor-pointer"
                  onClick={(e) => changeDescription("cinezone2")}
                >
                  CINEZONE V2.0
                </h3>
                <h3
                  className="border-b border-solid py-6 hover:saturate-200 hover:backdrop-brightness-150 hover:font-extrabold transition ease-out hover:cursor-pointer"
                  onClick={(e) => changeDescription("kodejobs")}
                >
                  KODEJOBS
                </h3>
                <h3
                  className="border-b border-solid py-6 hover:saturate-200 hover:backdrop-brightness-150 hover:font-extrabold transition ease-out hover:cursor-pointer"
                  onClick={(e) => changeDescription("cinezone1")}
                >
                  CINEZONE V1.0
                </h3>
                <h3
                  className="border-b border-solid py-6 hover:saturate-200 hover:backdrop-brightness-150 hover:font-extrabold transition ease-out hover:cursor-pointer"
                  onClick={(e) => changeDescription("cargo1")}
                >
                  CARGO
                </h3>
                <h3
                  className="py-6 border-b border-solid py-6 md:border-none  hover:saturate-200 hover:backdrop-brightness-150 hover:font-extrabold transition ease-out hover:cursor-pointer"
                  onClick={(e) => changeDescription("newsgrid")}
                >
                  NEWSGRID
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section className=" pt-20 pb-8 max-w-screen-xl mx-auto overflow-hidden">
          <h2
            className="mb-10 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-duration="900"
          >
            My StartUp Projects
          </h2>
          <div
            className="mx-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-duration="900"
          >
            <div
              className="text-white grid h-full w-full items-center overflow-hidden rounded-3xl bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${NewsGrid})`,
              }}
            >
              <div
                className="h-64 grid-cols-1 px-5 py-10 flex flex-col justify-center grid-cols-1 hover:backdrop-blur-lg hover:justify-between ease-in duration-300"
                onMouseEnter={displayDescription}
                onMouseLeave={clearDescription}
              >
                <h1 className="text-white font-semibold text-5xl">
                  CarGo Final
                </h1>
                <p className="text-gray-300">{description}</p>
                <p className="text-gray-300">KINDACODE.COM</p>
              </div>
            </div>
            <div
              className="text-white grid h-full w-full items-center overflow-hidden rounded-3xl bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${NewsGrid})`,
              }}
            >
              <div
                className="h-64 grid-cols-1 px-5 py-10 flex flex-col justify-center grid-cols-1 hover:backdrop-blur-lg hover:justify-between ease-in duration-300"
                onMouseEnter={displayDescription}
                onMouseLeave={clearDescription}
              >
                <h1 className="text-white font-semibold text-5xl">
                  CarGo Final
                </h1>
                <p className="text-gray-300">{description}</p>
                <p className="text-gray-300">KINDACODE.COM</p>
              </div>
            </div>
            <div
              className="text-white grid h-full w-full items-center overflow-hidden rounded-3xl bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${NewsGrid})`,
              }}
            >
              <div
                className="h-64 grid-cols-1 px-5 py-10 flex flex-col justify-center grid-cols-1 hover:backdrop-blur-lg hover:justify-between ease-in duration-300"
                onMouseEnter={displayDescription}
                onMouseLeave={clearDescription}
              >
                <h1 className="text-white font-semibold text-5xl">
                  CarGo Final
                </h1>
                <p className="text-gray-300">{description}</p>
                <p className="text-gray-300">KINDACODE.COM</p>
              </div>
            </div>
            <div
              className="text-white grid h-full w-full items-center overflow-hidden rounded-3xl bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${NewsGrid})`,
              }}
            >
              <div
                className="h-64 grid-cols-1 px-5 py-10 flex flex-col justify-center grid-cols-1 hover:backdrop-blur-lg hover:justify-between ease-in duration-300"
                onMouseEnter={displayDescription}
                onMouseLeave={clearDescription}
              >
                <h1 className="text-white font-semibold text-5xl">
                  CarGo Final
                </h1>
                <p className="text-gray-300">{description}</p>
                <p className="text-gray-300">KINDACODE.COM</p>
              </div>
            </div>
            <div
              className="text-white grid h-full w-full items-center overflow-hidden rounded-3xl bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${NewsGrid})`,
              }}
            >
              <div
                className="h-64 grid-cols-1 px-5 py-10 flex flex-col justify-center grid-cols-1 hover:backdrop-blur-lg hover:justify-between ease-in duration-300"
                onMouseEnter={displayDescription}
                onMouseLeave={clearDescription}
              >
                <h1 className="text-white font-semibold text-5xl">
                  CarGo Final
                </h1>
                <p className="text-gray-300">{description}</p>
                <p className="text-gray-300">KINDACODE.COM</p>
              </div>
            </div>
            <div
              className="text-white grid h-full w-full items-center overflow-hidden rounded-3xl bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${NewsGrid})`,
              }}
            >
              <div
                className="h-64 grid-cols-1 px-5 py-10 flex flex-col justify-center grid-cols-1 hover:backdrop-blur-lg hover:justify-between ease-in duration-300"
                onMouseEnter={displayDescription}
                onMouseLeave={clearDescription}
              >
                <h1 className="text-white font-semibold text-5xl">
                  CarGo Final
                </h1>
                <p className="text-gray-300">{description}</p>
                <p className="text-gray-300">KINDACODE.COM</p>
              </div>
            </div>
          </div>
          <div className="py-5 px-5 flex justify-end">
            <button
              type="button"
              className="text-white flex ring-2 ring-blue-200 hover:ring-4 hover:ring-blue-300 font-medium text-sm px-4 py-2 text-center mt-7 md:mr-0 text-xl"
            >
              See More
            </button>
          </div>
        </section>
        <section>
          <div className="mt-20 pb-8 max-w-screen-xl mx-auto px-5">
            <div className="grid grid-cols-3 h-[400px] gap-5">
              <div
                className="h-full rounded-3xl col-span-1 overflow-hidden bg-no-repeat bg-cover bg-center"
                style={{
                  backgroundImage: `url(${About2})`,
                }}
              >
                <div
                  className="h-full bg-no-repeat bg-cover bg-center hover:opacity-0 transition duration-500"
                  style={{
                    backgroundImage: `url(${About1})`,
                  }}
                ></div>
              </div>
              <div className="col-span-2 text-left flex flex-col justify-between py-4">
                <p className="text-2xl  indent-10">
                  One aspect that sets me apart as a developer is my dedication
                  to continuous learning and improvement. Technology is
                  constantly evolving, and I eagerly embrace new trends and
                  innovations to stay at the forefront of the industry. This
                  adaptability allows me to provide modern, future-proof
                  solutions for every project I undertake.
                </p>
                <p className="text-2xl mt-3 indent-10">
                  "Embrace the winds of change, for in the realm of technology,
                  continuous learning is the compass that guides us through the
                  ever-evolving landscape."
                </p>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="text-white flex ring-2 ring-blue-200 hover:ring-4 hover:ring-blue-300 font-medium text-sm px-4 py-2 text-center mt-4 text-xl"
                  >
                    See More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-20 pb-8 max-w-screen-xl mx-auto">
          <div
            className="flex flex-col"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="900"
          >
            <div className="w-full">
              <h2 className="mb-10 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]">
                Tech Stack
              </h2>
            </div>
            <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-y-10">
              <div className="flex h-44 w-44 justify-center items-center bg-gray-200 rounded-3xl mx-auto p-1">
                <img src={Mongodb} />
              </div>
              <div className="flex h-44 w-44 justify-center items-center bg-gray-200 rounded-3xl mx-auto p-1">
                <img className="h-32" src={Express} />
              </div>
              <div className="flex h-44 w-44 justify-center items-center bg-gray-200 rounded-3xl mx-auto p-1">
                <img src={Reactlogo} />
              </div>
              <div className="flex h-44 w-44 justify-center items-center bg-gray-200 rounded-3xl mx-auto p-1">
                <img src={Nodejs} />
              </div>
              <div className="flex h-44 w-44 justify-center items-center bg-gray-200 rounded-3xl mx-auto p-1">
                <img src={Tailwind} />
              </div>
              <div className="flex h-44 w-44 justify-center items-center bg-gray-200 rounded-3xl mx-auto p-1">
                <img src={Bootstrap} />
              </div>
              <div className="flex h-44 w-44 justify-center items-center bg-gray-200 rounded-3xl mx-auto p-1">
                <img src={Laravel} />
              </div>
              <div className="flex h-44 w-44 justify-center items-center bg-gray-200 rounded-3xl mx-auto p-1">
                <img src={Php} />
              </div>
              <div className="flex h-44 w-44 justify-center items-center bg-gray-200 rounded-3xl mx-auto p-1">
                <img src={Github} />
              </div>
              <div className="flex w-44 justify-center items-center bg-gray-200 rounded-3xl mx-auto p-1">
                <img className="h-32" src={javascript} />
              </div>
              <div className="flex w-44 justify-center items-center bg-gray-200 rounded-3xl mx-auto p-2">
                <img className="h-32" src={html} />
              </div>
              <div className="flex w-44 justify-center items-center bg-gray-200 rounded-3xl mx-auto p-5">
                <img className="h-32" src={css} />
              </div>
            </div>
          </div>
        </section>

        {/* <div
          id="custom-controls-gallery"
          className="relative w-full"
          data-carousel="slide"
        >
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            <div className="hidden duration-900 ease-in-out" data-carousel-item>
              <div className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <div className="mx-10 grid lg:grid-cols-4 grid-cols-2 gap-y-10 gap-x-5 p-7">
                  <div className="flex justify-center items-center bg-gray-100 rounded-3xl p-2">
                    <img src={Mongodb} />
                  </div>
                  <div className="flex justify-center items-center bg-gray-100 rounded-3xl p-2">
                    <img className="h-32" src={Express} />
                  </div>
                  <div className="flex justify-center items-center bg-gray-100 rounded-3xl p-2">
                    <img src={Reactlogo} />
                  </div>
                  <div className="flex justify-center items-center bg-gray-100 rounded-3xl p-2">
                    <img src={Nodejs} />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="hidden duration-900 ease-in-out"
              data-carousel-item="active"
            >
              <div className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <div className="mx-10 grid lg:grid-cols-4 grid-cols-2 gap-y-10 gap-x-5 p-7">
                  <div className="flex h-44 w-44 justify-center items-center bg-gray-100 rounded-3xl p-2">
                    <img src={Tailwind} />
                  </div>
                  <div className="flex h-44 w-44 justify-center items-center bg-gray-100 rounded-3xl p-2">
                    <img className="h-32" src={Bootstrap} />
                  </div>
                  <div className="flex h-44 w-44 justify-center items-center bg-gray-100 rounded-3xl p-2">
                    <img src={Laravel} />
                  </div>
                  <div className="flex h-44 w-44 justify-center items-center bg-gray-100 rounded-3xl p-2">
                    <img src={Php} />
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden duration-900 ease-in-out" data-carousel-item>
              <div className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <div className="mx-10 grid lg:grid-cols-4 grid-cols-2 gap-y-10 gap-x-5 p-7">
                  <div className="flex w-44 justify-center items-center bg-gray-100 rounded-3xl p-2">
                    <img className="h-36" src={javascript} />
                  </div>
                  <div className="flex w-44 justify-center items-center bg-gray-100 rounded-3xl p-3">
                    <img className="h-36" src={html} />
                  </div>
                  <div className="flex w-44 justify-center items-center bg-gray-100 rounded-3xl p-6">
                    <img className="h-36" src={css} />
                  </div>
                  <div className="flex w-44 justify-center items-center bg-gray-100 rounded-3xl p-2">
                    <img className="h-36" src={Github} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center pt-4">
            <button
              type="button"
              className="flex justify-center items-center mr-4 h-full cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 5H1m0 0 4 4M1 5l4-4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="flex justify-center items-center h-full cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};
