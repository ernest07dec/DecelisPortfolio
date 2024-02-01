import React, { useState } from "react";
import { ScreenDemo } from "./ScreenDemo";

export const FrontendDemo = () => {
  const [design, setDesign] = useState("Corporate");
  const [palette, setPalette] = useState("indigo");
  const tabs = ["Corporate", "Minimalist", "Vintage", "Illustrative"];
  const colors = ["indigo", "red", "green", "blue"];
  return (
    <section className="max-w-screen-xl mx-auto mt-20 lg:px-0 px-5 sm:px-10">
      <div className="text-center">
        <h3 className="text-white text-4xl font-semibold">Frontend Designs</h3>
      </div>
      {/* TABS */}
      <div className="flex justify-between md:mx-10 mx-3 h-24">
        <ul className="flex items-end gap-1">
          {tabs.map((tab, index) => {
            return (
              <li
                className={`text-gray-900 font-semibold px-2 rounded-t-lg hover:cursor-pointer animate duration-300 hover:py-3 hover:bg-gray-200 ${
                  design === tab ? "py-4 bg-gray-200" : "py-2 bg-gray-400"
                }`}
                key={index}
                onClick={() => {
                  setDesign(tab);
                }}
              >
                {tab}
              </li>
            );
          })}
        </ul>
        <ul className="flex items-end gap-2">
          {design !== "Vintage" &&
            colors.map((color, index) => {
              return (
                <li
                  key={index}
                  className={`bg-${color}-700 px-4 rounded-t-lg hover:cursor-pointer animate duration-300 hover:py-3 hover:bg-${color}-900 ${
                    palette === color ? "py-2" : "py-5"
                  }`}
                  onClick={() => {
                    setPalette(color);
                  }}
                ></li>
              );
            })}
        </ul>
      </div>
      <div
        id="frontend_demo_screen"
        className="w-full h-[700px] max-h-[90vh] rounded-xl overflow-hidden border-2 border-indigo-900"
      >
        {/* DESIGN WINDOW */}
        <div className="flex items-center justify-center h-full w-full bg-black">
          <ScreenDemo design={design} palette={palette} />
        </div>
      </div>
    </section>
  );
};
