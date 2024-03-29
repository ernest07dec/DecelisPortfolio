import React, { useEffect } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaFacebookMessenger,
  FaArrowUp,
} from "react-icons/fa";
import { useState } from "react";

export const Footer = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <footer className="bg-gray-800 border-t border-gray-600 px-10 z-20 opacity-80">
        <div className="container max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 py-5 gap-5 sm:grid:cols-1 md:grid-cols-1 lg:grid-cols-2">
            <div className="col-span-1 md:text-center sm:text-center lg:text-left text-center">
              <div className="text-white">
                <h2 className="text-3xl pb-5 dark:text-dmode-lightolive font-semibold">
                  Contacts :
                </h2>
                <h3 className=" py-1 ">Phone Number: (+63) 977 338 2547</h3>
                <h3 className=" pt-1 ">
                  Emails: ernestfortunedecelisyahoo.com.ph
                </h3>
                <h3 className=" pb-1 ml-12 pl-1"></h3>
                <h1 className=" py-1 ">
                  Address: Franceville, Barangay Bulihan, Silang, Cavite,
                  Philippines
                </h1>
              </div>
            </div>
            <div className="col-span-1 flex justify-center items-end">
              <div className="text-center text-white flex flex-col justify-center items-center">
                <p className=" py-3 flex gap-5 justify-center items-end text-3xl">
                  <a
                    href="https://www.linkedin.com/in/ernest-fortune-decelis-613208262/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animate duration-200 hover:text-5xl"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://github.com/ernest07dec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animate duration-200 hover:text-5xl"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://facebook.com/ernest07dec/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animate duration-200 hover:text-5xl"
                  >
                    <FaFacebook />
                  </a>

                  <a
                    href="https://www.instagram.com/ernest07dec/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animate duration-200 hover:text-5xl"
                  >
                    <FaInstagram />
                  </a>
                </p>
                <h2 className="text-2xl text- pb-5">
                  Ernest Fortune J. Decelis
                </h2>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className=" border-t border-gray-800 text-center text-white text-sm py-2">
          <p>| Ernest | My Portfolio |</p>
        </div>
      </footer>
      <a
        href="http://m.me/ernest07dec"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-12 right-24 bg-gray-100 p-3 text-blue-900 rounded-full text-2xl opacity-70 hover:opacity-90 hover:cursor-pointer z-40"
      >
        <FaFacebookMessenger />
      </a>
      {scrollTop >= 500 ? (
        <div
          className="fixed bottom-12 right-10 bg-gray-100 p-3 text-blue-900 rounded-full text-2xl opacity-70 hover:opacity-90 hover:cursor-pointer z-40"
          onClick={() => window.scroll(0, 0)}
        >
          <FaArrowUp />
        </div>
      ) : (
        ""
      )}
    </>
  );
};
