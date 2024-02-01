import React, { useEffect, useState } from "react";
import CorporateBG from "../../assets/playground_img/frontend_design/corporate-bg.jpg";
import CorporateBG2 from "../../assets/playground_img/frontend_design/corporate-2nd-bg.jpg";
import MinimalistBG from "../../assets/playground_img/frontend_design/minimalist-bg.jpg";
import { FaChevronLeft } from "react-icons/fa";
import "./screendemo.css";
export const ScreenDemo = ({ design, palette }) => {
  const [color, setColor] = useState("indigo");
  const [form, setForm] = useState("signin");
  const [gradient1, setGradient1] = useState("");
  const [gradient2, setGradient2] = useState("");
  useEffect(() => {
    setColor(palette);
    switch (design) {
      case "Corporate":
        break;
      case "Minimalist":
        break;
      case "Vintage":
        break;
      case "Illustrative":
        break;

      default:
        break;
    }
    switch (palette) {
      case "indigo":
        setGradient1(
          "linear-gradient(rgba(63, 81, 181, 0.5), rgba(63, 81, 181, 0.5))"
        );
        setGradient2(
          "linear-gradient(rgba(0, 9, 109, 0.8), rgba(0, 0, 109, 0.8))"
        );
        break;
      case "red":
        setGradient1(
          "linear-gradient(rgba(255, 0, 20, 0.3), rgba(255, 0, 20, 0.3))"
        );
        setGradient2(
          "linear-gradient(rgba(100, 0, 0, 0.8), rgba(100, 0, 0, 0.8))"
        );

        break;
      case "green":
        setGradient1(
          "linear-gradient(rgba(0, 100, 30, 0.5), rgba(0, 100, 30, 0.5))"
        );
        setGradient2(
          "linear-gradient(rgba(0, 90, 0, 0.8), rgba(0, 91, 0, 0.8))"
        );
        break;
      case "blue":
        setGradient1(
          "linear-gradient(rgba(0, 0, 60, 0.3), rgba(0, 0, 60, 0.3))"
        );

        setGradient2(
          "linear-gradient(rgba(0, 50, 140, 0.8), rgba(0, 50, 145, 0.8))"
        );
        break;

      default:
        setGradient1(
          "linear-gradient(rgba(63, 81, 181, 0.5), rgba(63, 81, 181, 0.5))"
        );
        setGradient2(
          "linear-gradient(rgba(0, 9, 99, 0.8), rgba(0, 0, 99, 0.8))"
        );
        break;
    }
  }, [design, palette]);
  return (
    <div
      className={`w-full h-full flex justify-start md:justify-center items-center overflow-y-auto md:overflow-hidden ${
        design === "Corporate" && "py-20 md:px-10 lg:px-40 px-5"
      } ${design === "Minimalist" && "minimalist"} ${
        design === "Vintage" && ""
      } ${design === "Illustrative" && ""}`}
      style={{
        backgroundImage:
          design === "Corporate"
            ? `${gradient1}, url(${CorporateBG})`
            : design === "Minimalist"
            ? `url(${MinimalistBG})`
            : "",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" h-full flex flex-col md:grid grid-cols-12 ">
        <div
          className={`col-span-8 h-full p-10 md:p-16 flex flex-col gap-5 ${
            design === "Corporate" &&
            "rounded-t-3xl md:rounded-r-none md:rounded-l-3xl text-white justify-center"
          } ${design === "Minimalist" && `text-${color}-900`} ${
            design === "Vintage" && ""
          } ${design === "Illustrative" && ""}`}
          style={{
            backgroundImage:
              design === "Corporate"
                ? `${gradient2}, url(${CorporateBG2})`
                : design === "Minimalist"
                ? ``
                : "",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h3 className="text-5xl">Welcome!</h3>
          <p className="text-xl">This is a frontend designs demo.</p>
          <p className="text-xl">
            Feel free to explore and click the designs and colors that you
            desire. Have a great day ahead!
          </p>
        </div>
        <div
          className={`col-span-4 h-full p-20 md:p-6 lg:p-88 flex flex-col md:h-full justify-around ${
            design === "Corporate" &&
            "bg-white rounded-b-3xl md:rounded-r-3xl md:rounded-l-none"
          } ${design === "Minimalist" && ""} ${design === "Vintage" && ""} ${
            design === "Illustrative" && ""
          }`}
        >
          {form === "signin" && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <h2 className="text-3xl text-center font-semibold mb-4">
                Sign In
              </h2>
              <p className="mb-4">
                Didn't have account?{" "}
                <span
                  className="text-blue-700 hover:underline hover:cursor-pointer"
                  onClick={() => setForm("signup")}
                >
                  Register
                </span>
              </p>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-600 text-sm font-medium mb-1"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className={`w-full px-3 py-2 border rounded focus:outline-none focus:border-${color}-500`}
                  placeholder="Enter your username"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-gray-600 text-sm font-medium mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className={`w-full px-3 py-2 border rounded focus:outline-none focus:border-${color}-500`}
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-4 mt-1 w-full flex justify-end">
                <span className="text-blue-700 text-sm hover:underline hover:cursor-pointer">
                  Forgot Password?
                </span>
              </div>
              <div className="w-full flex justify-center">
                <button
                  type="submit"
                  className={`text-white py-2 px-8 rounded focus:outline-none animate duration-300 hover:px-9 hover:font-semibold  hover:shadow-xl`}
                  style={{
                    backgroundColor: `${
                      color === "indigo"
                        ? "rgb(99 102 241)"
                        : color === "green"
                        ? "rgb(34 197 94)"
                        : color === "red"
                        ? "rgb(239 68 68)"
                        : color === "blue"
                        ? "rgb(29 78 216)"
                        : "rgb(99 102 241)"
                    }`,
                  }}
                >
                  Sign In
                </button>
              </div>
            </form>
          )}
          {form === "signup" && (
            <>
              <div className="w-full flex">
                <p
                  className="hover:cursor-pointer p-2 rounded-full hover:bg-gray-300"
                  onClick={() => setForm("signin")}
                >
                  <FaChevronLeft />
                </p>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="flex flex-col w-full gap-2"
              >
                <h2 className="text-3xl text-center font-semibold mb-4">
                  Sign Up
                </h2>
                <p className="mb-1">
                  Didn't have account?{" "}
                  <span
                    className="text-blue-700 hover:underline hover:cursor-pointer"
                    onClick={() => setForm("signup")}
                  >
                    Register
                  </span>
                </p>
                <div className="">
                  <label
                    htmlFor="username"
                    className="block text-gray-600 text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className={`w-full px-3 py-2 border rounded focus:outline-none focus:border-${color}-500`}
                    placeholder="Enter your email"
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="username"
                    className="block text-gray-600 text-sm font-medium mb-1"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className={`w-full px-3 py-2 border rounded focus:outline-none focus:border-${color}-500`}
                    placeholder="Enter your username"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-gray-600 text-sm font-medium mb-1"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className={`w-full px-3 py-2 border rounded focus:outline-none focus:border-${color}-500`}
                    placeholder="Enter your password"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-gray-600 text-sm font-medium mb-1"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmpassword"
                    name="confirmpassword"
                    className={`w-full px-3 py-2 border rounded focus:outline-none focus:border-${color}-500`}
                    placeholder="Confirm your password"
                  />
                </div>
                <div className="w-full flex justify-center mt-4">
                  <button
                    type="submit"
                    className={`text-white py-2 px-8 rounded focus:outline-none animate duration-300 hover:px-9 hover:font-semibold  hover:shadow-xl`}
                    style={{
                      backgroundColor: `${
                        color === "indigo"
                          ? "rgb(99 102 241)"
                          : color === "green"
                          ? "rgb(34 197 94)"
                          : color === "red"
                          ? "rgb(239 68 68)"
                          : color === "blue"
                          ? "rgb(29 78 216)"
                          : "rgb(99 102 241)"
                      }`,
                    }}
                  >
                    Register
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
