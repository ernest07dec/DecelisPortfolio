import { NavLink, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa";

export const Header = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNav = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);

    setMobileMenuOpen(false); // Close the mobile menu after clicking a link
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 ${
        scrollTop > 200
          ? "bg-indigo-950 border-b border-1 border-gray-800 opacity-80"
          : "bg-indigo-950 sm:bg-transparent"
      } text-white`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center" onClick={handleNav}>
          <span className="self-center text-3xl font-semibold whitespace-nowrap">
            Ernest
          </span>
        </Link>
        <div className="flex md:order-2">
          <a
            href="https://drive.google.com/file/d/1FpaQCOyq8fI6w8RlaFozpyxs55keDEdD/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="text-white flex ring-2 ring-blue-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
            >
              <FaDownload className="mr-2 text-lg" />
              Resume
            </button>
          </a>
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 text-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 pl-3 pr-4 border-b border-solid"
                    : "block py-2 pl-3 pr-4 hover:border-b hover:border-solid"
                }
                onClick={handleNav}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 pl-3 pr-4 border-b border-solid"
                    : "block py-2 pl-3 pr-4 hover:border-b hover:border-solid"
                }
                onClick={handleNav}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 pl-3 pr-4 border-b border-solid"
                    : "block py-2 pl-3 pr-4 hover:border-b hover:border-solid"
                }
                onClick={handleNav}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/playground"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 pl-3 pr-4 border-b border-solid"
                    : "block py-2 pl-3 pr-4 hover:border-b hover:border-solid"
                }
                onClick={handleNav}
              >
                PlayGround
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
