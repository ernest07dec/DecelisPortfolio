import React, { useEffect, useState } from "react";
import CorporateBG from "../../assets/playground_img/frontend_design/corporate-bg.jpg";
import CorporateBG2 from "../../assets/playground_img/frontend_design/corporate-2nd-bg.jpg";
import { FaChevronLeft } from "react-icons/fa";
import "./screendemo.css";
export const ScreenDemo = ({ design, palette }) => {
  const [form, setForm] = useState("signin");
  const [gradient1, setGradient1] = useState("");
  const [gradient2, setGradient2] = useState("");
  const [color, setColor] = useState("indigo");
  useEffect(() => {
    console.log(palette);
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
          "linear-gradient(rgba(0, 170, 30, 0.3), rgba(0, 120, 30, 0.3))"
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
          "linear-gradient(rgba(0, 0, 170, 0.8), rgba(0, 0, 165, 0.8))"
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
      className={`w-full h-full flex py-20 justify-start md:justify-center items-center overflow-y-auto md:overflow-hidden`}
      style={{
        backgroundImage: `${gradient1}, url(${CorporateBG})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="md:mx-10 h-full lg:mx-40 mx-5 flex flex-col md:grid grid-cols-12 ">
        <div
          className="col-span-8 h-full text-white p-10 md:p-16 flex flex-col justify-center rounded-t-3xl md:rounded-r-none md:rounded-l-3xl gap-5"
          style={{
            backgroundImage: `${gradient2}, url(${CorporateBG2})`,
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
        <div className="col-span-4 h-full bg-white p-20 md:p-6 lg:p-88 flex flex-col md:h-full justify-around rounded-b-3xl md:rounded-r-3xl md:rounded-l-none">
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
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:border-indigo-500"
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
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:border-indigo-500"
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
                  className={`bg-${color}-500 text-white py-2 px-8 rounded focus:outline-none animate duration-300 hover:px-9 hover:font-semibold  hover:shadow-xl`}
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
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-indigo-500"
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
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-indigo-500"
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
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-indigo-500"
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
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-indigo-500"
                    placeholder="Confirm your password"
                  />
                </div>
                <div className="w-full flex justify-center mt-4">
                  <button
                    type="submit"
                    className={`bg-${color}-500 text-white py-2 px-8 rounded focus:outline-none animate duration-300 hover:px-9 hover:font-semibold  hover:shadow-xl`}
                  >
                    {form === "signin" ? "Sign In" : "Register"}
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
