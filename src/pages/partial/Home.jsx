import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
// FRAMERMOTION
import { AnimatedPage } from "../../components/framermotion/AnimatedPage";
// ICONS
import { FaPhone, FaFolder, FaUser } from "react-icons/fa";
// IMAGES AND VIDEO
import Hero from "../../assets/hero2.mp4";
import About1 from "../../assets/about1.jpg";
import About2 from "../../assets/about2.jpg";
// ANIMATE ON SCROLL
import AOS from "aos";
import "aos/dist/aos.css";
// COMPONENTS
import EmailForm from "../../components/emailjs/EmailForm";
import { ProjectShowcase } from "../../components/projectsshowcase/ProjectShowcase";
import { TechStacks } from "../../components/techstacks/TechStacks";
export const Home = () => {
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    // AOS
    AOS.init();
    // SCROLL EVENT
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    // CLEARING
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // SCROLL REFS
  const projectRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  // SCROLL TO REFS
  const executeScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop - 150,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <AnimatedPage>
      <main className="text-center text-gray-200">
        {/* HERO SECTION */}
        <section>
          <div className="">
            <div
              className="h-screen w-full absolute flex flex-col text-center md:text-left justify-center"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              <h1 className="lg:text-5xl md:text-4xl text-3xl px-20">Hello!</h1>
              <h1 className="lg:text-8xl md:text-6xl text-5xl px-20">
                I'm Ernest
              </h1>
              <h1 className="lg:text-5xl md:text-4xl text-3xl px-20">
                Full-stack web developer
              </h1>
              <p className="px-20 pt-16 md:text-2xl">
                Based from Cavite, Philippines. I enjoy creating and debugging
                exciting web projects.
              </p>
              <p className="px-20 md:text-2xl">
                Check out the projects I've worked on, know more about me and
                connect.
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
                  onClick={() => executeScroll(aboutRef.current)}
                  type="button"
                  className=" justify-center flex ring-2 ring-blue-200 hover:ring-4 hover:ring-blue-300 font-medium text-sm px-4 py-2 text-center mr-3 md:mr-0 text-xl z-40"
                >
                  About
                  <FaUser className="ml-5 mt-1 text-lg" />
                </button>
                <button
                  onClick={() => executeScroll(contactRef.current)}
                  type="button"
                  className=" flex justify-center ring-2 ring-blue-200 hover:ring-4 hover:ring-blue-300 font-medium text-sm px-4 py-2 text-center mr-3 md:mr-0 text-xl z-40"
                >
                  Contact
                  <FaPhone className="ml-5 mt-1 text-lg" />
                </button>
              </div>
            </div>
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
        {/* PROJECTS SHOWCASE */}
        <section
          ref={projectRef}
          className="max-w-screen-xl mx-auto px-5 md:mt-0 mt-20 rounded-l-3xl"
        >
          <h2
            className="mb-7 text-3xl font-semibold text-dark sm:text-4xl md:text-[42px]"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-duration="900"
          >
            My Recent Projects
          </h2>
          {/* SHOWCASE */}
          <ProjectShowcase />
          <div className="flex justify-end items-end max-w-screen-xl mx-auto px-6">
            <Link to="/projects">
              <button
                type="button"
                onClick={(e) =>
                  setTimeout(function () {
                    window.scrollTo(0, 0);
                  }, 500)
                }
                className="ring-2 ring-blue-200 hover:ring-4 hover:ring-blue-300 font-medium text-sm px-4 py-2 text-center mt-7 md:mr-0 text-lg"
              >
                See More
              </button>
            </Link>
          </div>
        </section>
        {/* ABOUT INTRO */}
        <section ref={aboutRef} data-aos="fade-right" data-aos-duration="900">
          <div className="mt-20 pb-8 max-w-screen-xl mx-auto px-5">
            <div className="grid  grid-cols-1 md:grid-cols-3 h-full md:h-[400px] gap-5">
              <div
                className="h-[450px] md:h-full rounded-3xl col-span-1 overflow-hidden bg-no-repeat bg-cover bg-center"
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
                <div className="flex justify-center pt-10 md:justify-end">
                  <Link to="/about">
                    <button
                      type="button"
                      onClick={(e) =>
                        setTimeout(function () {
                          window.scrollTo(0, 0);
                        }, 500)
                      }
                      className=" flex ring-2 ring-blue-200 text-lg hover:ring-4 hover:ring-blue-300 font-medium text-sm px-4 py-2 text-center mt-4"
                    >
                      See More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* TECH STACKS */}
        <section className="mt-20 pb-8 max-w-screen-xl mx-auto">
          <div
            className="flex flex-col"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <div className="w-full">
              <h2 className="mb-10 text-3xl font-semibold text-dark sm:text-4xl md:text-[42px]">
                Tech Stack
              </h2>
            </div>
            <TechStacks />
          </div>
        </section>
        {/* EMAIL JS */}
        <section
          ref={contactRef}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="900"
          className="mt-20 pb-8 max-w-screen-xl px-10 mx-auto"
        >
          <EmailForm />
        </section>
      </main>
    </AnimatedPage>
  );
};
