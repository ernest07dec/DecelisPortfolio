import React, { useEffect } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import { useState } from "react";
import NewsGrid from "../assets/newsgrid.png";
import { Link } from "react-router-dom";

export const Projects = () => {
  const [title, setTitle] = useState("");
  const [display, setDisplay] = useState("CarGo Final");
  const [description, setDescription] = useState("");
  const [projLink, setProjLink] = useState("");
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
    <section className="text-center text-gray-200 pt-20 pb-8 max-w-screen-xl mx-auto overflow-hidden">
      <h2 className="mb-10 text-3xl font-bold text-dark sm:text-5xl md:text-[42px]">
        Projects
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
            backgroundImage: `url(${NewsGrid})`,
          }}
        >
          <div
            className="h-64 grid-cols-1 px-5 py-10 flex flex-col justify-center grid-cols-1 hover:backdrop-blur-lg hover:justify-between ease-in duration-300"
            onMouseEnter={displayDescription}
            onMouseLeave={clearDescription}
          >
            <h1 className=" font-semibold text-5xl">CarGo Final</h1>
            <p className="text-gray-300">{description}</p>
            <p className="text-gray-300">KINDACODE.COM</p>
          </div>
        </div>
        <div
          className=" grid h-full w-full items-center overflow-hidden rounded-3xl bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${NewsGrid})`,
          }}
        >
          <div
            className="h-64 grid-cols-1 px-5 py-10 flex flex-col justify-center grid-cols-1 hover:backdrop-blur-lg hover:justify-between ease-in duration-300"
            onMouseEnter={displayDescription}
            onMouseLeave={clearDescription}
          >
            <h1 className=" font-semibold text-5xl">CarGo Final</h1>
            <p className="text-gray-300">{description}</p>
            <p className="text-gray-300">KINDACODE.COM</p>
          </div>
        </div>
        <div
          className=" grid h-full w-full items-center overflow-hidden rounded-3xl bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${NewsGrid})`,
          }}
        >
          <div
            className="h-64 grid-cols-1 px-5 py-10 flex flex-col justify-center grid-cols-1 hover:backdrop-blur-lg hover:justify-between ease-in duration-300"
            onMouseEnter={displayDescription}
            onMouseLeave={clearDescription}
          >
            <h1 className=" font-semibold text-5xl">CarGo Final</h1>
            <p className="text-gray-300">{description}</p>
            <p className="text-gray-300">KINDACODE.COM</p>
          </div>
        </div>
        <div
          className=" grid h-full w-full items-center overflow-hidden rounded-3xl bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${NewsGrid})`,
          }}
        >
          <div
            className="h-64 grid-cols-1 px-5 py-10 flex flex-col justify-center grid-cols-1 hover:backdrop-blur-lg hover:justify-between ease-in duration-300"
            onMouseEnter={displayDescription}
            onMouseLeave={clearDescription}
          >
            <h1 className=" font-semibold text-5xl">CarGo Final</h1>
            <p className="text-gray-300">{description}</p>
            <p className="text-gray-300">KINDACODE.COM</p>
          </div>
        </div>
        <div
          className=" grid h-full w-full items-center overflow-hidden rounded-3xl bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${NewsGrid})`,
          }}
        >
          <div
            className="h-64 grid-cols-1 px-5 py-10 flex flex-col justify-center grid-cols-1 hover:backdrop-blur-lg hover:justify-between ease-in duration-300"
            onMouseEnter={displayDescription}
            onMouseLeave={clearDescription}
          >
            <h1 className=" font-semibold text-5xl">CarGo Final</h1>
            <p className="text-gray-300">{description}</p>
            <p className="text-gray-300">KINDACODE.COM</p>
          </div>
        </div>
        <div
          className=" grid h-full w-full items-center overflow-hidden rounded-3xl bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${NewsGrid})`,
          }}
        >
          <div
            className="h-64 grid-cols-1 px-5 py-10 flex flex-col justify-center grid-cols-1 hover:backdrop-blur-lg hover:justify-between ease-in duration-300"
            onMouseEnter={displayDescription}
            onMouseLeave={clearDescription}
          >
            <h1 className=" font-semibold text-5xl">CarGo Final</h1>
            <p className="text-gray-300">{description}</p>
            <p className="text-gray-300">KINDACODE.COM</p>
          </div>
        </div>
        <div
          className=" grid h-full w-full items-center overflow-hidden rounded-3xl bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${NewsGrid})`,
          }}
        >
          <div
            className="h-64 grid-cols-1 px-5 py-10 flex flex-col justify-center grid-cols-1 hover:backdrop-blur-lg hover:justify-between ease-in duration-300"
            onMouseEnter={displayDescription}
            onMouseLeave={clearDescription}
          >
            <h1 className=" font-semibold text-5xl">CarGo Final</h1>
            <p className="text-gray-300">{description}</p>
            <p className="text-gray-300">KINDACODE.COM</p>
          </div>
        </div>
        <div
          className=" grid h-full w-full items-center overflow-hidden rounded-3xl bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${NewsGrid})`,
          }}
        >
          <div
            className="h-64 grid-cols-1 px-5 py-10 flex flex-col justify-center grid-cols-1 hover:backdrop-blur-lg hover:justify-between ease-in duration-300"
            onMouseEnter={displayDescription}
            onMouseLeave={clearDescription}
          >
            <h1 className=" font-semibold text-5xl">CarGo Final</h1>
            <p className="text-gray-300">{description}</p>
            <p className="text-gray-300">KINDACODE.COM</p>
          </div>
        </div>
        <div
          className=" grid h-full w-full items-center overflow-hidden rounded-3xl bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${NewsGrid})`,
          }}
        >
          <div
            className="h-64 grid-cols-1 px-5 py-10 flex flex-col justify-center grid-cols-1 hover:backdrop-blur-lg hover:justify-between ease-in duration-300"
            onMouseEnter={displayDescription}
            onMouseLeave={clearDescription}
          >
            <h1 className=" font-semibold text-5xl">CarGo Final</h1>
            <p className="text-gray-300">{description}</p>
            <p className="text-gray-300">KINDACODE.COM</p>
          </div>
        </div>
        <div
          className=" grid h-full w-full items-center overflow-hidden rounded-3xl bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${NewsGrid})`,
          }}
        >
          <div
            className="h-64 grid-cols-1 px-5 py-10 flex flex-col justify-center grid-cols-1 hover:backdrop-blur-lg hover:justify-between ease-in duration-300"
            onMouseEnter={displayDescription}
            onMouseLeave={clearDescription}
          >
            <h1 className=" font-semibold text-5xl">CarGo Final</h1>
            <p className="text-gray-300">{description}</p>
            <p className="text-gray-300">KINDACODE.COM</p>
          </div>
        </div>
        <div
          className=" grid h-full w-full items-center overflow-hidden rounded-3xl bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${NewsGrid})`,
          }}
        >
          <div
            className="h-64 grid-cols-1 px-5 py-10 flex flex-col justify-center grid-cols-1 hover:backdrop-blur-lg hover:justify-between ease-in duration-300"
            onMouseEnter={displayDescription}
            onMouseLeave={clearDescription}
          >
            <h1 className=" font-semibold text-5xl">CarGo Final</h1>
            <p className="text-gray-300">{description}</p>
            <p className="text-gray-300">KINDACODE.COM</p>
          </div>
        </div>
        <div
          className=" grid h-full w-full items-center overflow-hidden rounded-3xl bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${NewsGrid})`,
          }}
        >
          <div
            className="h-64 grid-cols-1 px-5 py-10 flex flex-col justify-center grid-cols-1 hover:backdrop-blur-lg hover:justify-between ease-in duration-300"
            onMouseEnter={displayDescription}
            onMouseLeave={clearDescription}
          >
            <h1 className=" font-semibold text-5xl">CarGo Final</h1>
            <p className="text-gray-300">{description}</p>
            <p className="text-gray-300">KINDACODE.COM</p>
          </div>
        </div>
      </div>
    </section>
  );
};
