import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaDiscord,
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
                  Emails: ernestfortunedecelisyahoo.com.ph,
                  ernestfortunedecelis@gmail.com
                </h3>
                <h3 className=" pb-1 ml-12 pl-1"></h3>
                <h1 className=" py-1 ">
                  Address: Franceville, Barangay Bulihan, Silang, Cavite,
                  Philippines
                </h1>
              </div>
            </div>
            <div className="col-span-1 flex justify-center items-end">
              <div className="text-center text-white">
                <p className=" py-3 flex gap-5 justify-center text-3xl">
                  <a
                    href="https://www.linkedin.com/in/ernest-fortune-decelis-613208262/"
                    target="_blank"
                    className="hover:animate-bounce"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://github.com/ernest07dec"
                    target="_blank"
                    className="hover:animate-bounce"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://facebook.com/ernest07dec/"
                    target="_blank"
                    className="hover:animate-bounce"
                  >
                    <FaFacebook />
                  </a>

                  <a
                    href="https://www.instagram.com/ernest07dec/"
                    target="_blank"
                    className="hover:animate-bounce"
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
          <p>
            Copyright © 2023 | Develop by Ernest | My Portfolio | All Rights
            Reserved
          </p>
        </div>
      </footer>
      {scrollTop >= 500 ? (
        <div
          className="fixed bottom-12 right-10 bg-gray-100 p-3 text-blue-900 rounded-full text-2xl opacity-70 hover:opacity-90 hover:cursor-pointer z-50"
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
