// FRAMERMOTION
import { useRef } from "react";
import { AnimatedPage } from "../../components/framermotion/AnimatedPage";
import { FrontendDemo } from "../../features/frontend_designs/FrontendDemo";
import { Profile } from "../../features/profile/Profile";

import { FaChevronCircleRight } from "react-icons/fa";
import { ChatApp } from "../../features/socketio_demo/ChatApp";
export const PlayGround = () => {
  const frontendDesignsRef = useRef(null);
  const executeScroll = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 100,
        left: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <AnimatedPage>
      {/* PROFILE */}
      <section>
        <Profile />
      </section>
      {/* WELCOME */}
      <section className="max-w-screen-xl mx-auto mt-10 lg:px-0 px-5 sm:px-10 text-gray-100 flex flex-col gap-5 text-center">
        <h3 className="text-4xl">Welcome to my Play Ground!</h3>
        <div>
          <p className="text-lg">
            Greetings! I'm Ernest, a passionate developer exploring the vast
            realms of web technologies and design. This digital playground
            serves as a showcase of my skills and creativity, featuring a
            variety of projects and demos.
          </p>
          <p>What You'll Find Here: Frontend Designs:</p>
          <ul className="px-32 text-left flex flex-col gap-3 justify-center py-5 font-semibold">
            <li className="flex items-center gap-2">
              <FaChevronCircleRight />
              Dive into visually appealing and responsive frontend designs that
              showcase my design sensibilities.{" "}
            </li>
            <li className="flex items-center gap-2">
              <FaChevronCircleRight />
              Interactive Demos: Experience the magic of real-time communication
              with demos highlighting technologies like Socket.IO and WebRTC.{" "}
            </li>
            <li className="flex items-center gap-2">
              <FaChevronCircleRight className="text-xl" />
              Get to know more about me, my skills, and the enthusiasm I bring
              to every project. Feel free to explore, click around, and witness
              the fusion of code and creativity with both Frontend and Backend
              technologies.
            </li>
          </ul>
          <p>
            Ready to embark on a journey through the digital landscape? Let's
            start the adventure!
          </p>
        </div>
        <div className="h-20">
          <div className="w-full h-full flex justify-center items-center">
            <button
              className="py-2 px-5 border-2 border-indigo-800 duration-500 hover:border-4 text-xl hover:font-semibold hover:animate-ping"
              onClick={() => executeScroll(frontendDesignsRef)}
            >
              Let's Start!
            </button>
          </div>
        </div>
      </section>
      {/* FRONTEND DEMO */}
      <section className="mt-32" ref={frontendDesignsRef}>
        <FrontendDemo />
      </section>
      <section className="mt-32" ref={frontendDesignsRef}>
        <ChatApp />
      </section>
    </AnimatedPage>
  );
};
