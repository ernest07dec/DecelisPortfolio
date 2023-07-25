import React, { useEffect } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import About1 from "../assets/about1.jpg";
import About2 from "../assets/about2.jpg";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto pt-20">
      <div className="text-center text-gray-200">
        <section className="">
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
            </div>
            <div className="grid grid-cols-3 h-[400px] gap-5">
              <div
                className="h-full rounded-3xl col-span-1 col-start-3 overflow-hidden bg-no-repeat bg-cover bg-center"
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
            </div>
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
            </div>
          </div>
          <div className="col-span-2 text-left flex flex-col justify-between py-4">
            {/* <p className="text-2xl  indent-10">
              Welcome to my portfolio website! I'm thrilled to have you here.
              Allow me to introduce myself; I am a passionate and creative
              full-stack web developer on a mission to turn ideas into stunning
              digital realities. From an early age, I found myself captivated by
              the infinite possibilities that technology could offer. This
              fascination led me to embark on a journey to become a skilled
              developer, and now I am proud to call myself a full-stack expert.
              With a strong foundation in both front-end and back-end
              development, I enjoy building robust and user-friendly web
              applications that leave a lasting impact. My development journey
              began with an insatiable curiosity for programming languages and
              frameworks. As the years passed, I immersed myself in various
              technologies, including HTML, CSS, JavaScript, Python, Node.js,
              React, and more. Each project I tackled honed my skills and
              deepened my understanding of software development. But being a web
              developer is not just about writing code; it's about translating
              visions into tangible solutions. I believe in the power of
              collaboration and open communication to ensure that the end
              product exceeds expectations. By working closely with clients and
              teams, I can deliver results that not only meet technical
              requirements but also resonate with the target audience. One
              aspect that sets me apart as a developer is my dedication to
              continuous learning and improvement. Technology is constantly
              evolving, and I eagerly embrace new trends and innovations to stay
              at the forefront of the industry. This adaptability allows me to
              provide modern, future-proof solutions for every project I
              undertake. In addition to my technical skills, I have a keen eye
              for design and aesthetics. I understand that user experience is
              paramount in today's digital landscape, and I take pride in
              crafting intuitive interfaces that engage and delight users.
              Throughout my portfolio, you'll find a diverse range of projects
              that showcase my versatility as a full-stack web developer.
              Whether it's building dynamic e-commerce platforms, creating
              interactive web applications, or optimizing websites for peak
              performance, I pour my heart and soul into every line of code.
              Thank you for visiting my portfolio website; I hope you enjoy
              exploring my work. If you have any questions or would like to
              collaborate on an exciting project, feel free to reach out. Let's
              bring your ideas to life together!
            </p>
            <p className="text-2xl mt-3 indent-10">
              "Embrace the winds of change, for in the realm of technology,
              continuous learning is the compass that guides us through the
              ever-evolving landscape."
            </p> */}
          </div>
        </section>
      </div>
    </div>
  );
};
