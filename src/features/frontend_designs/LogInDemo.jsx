import React from "react";

export const LogInDemo = () => {
  const tabs = ["Minimalist", "Vintage", "Corporate", "Illustrative"];
  const colors = ["indigo", "red", "green", "blue"];
  return (
    <section className="max-w-screen-xl mx-auto mt-20">
      <div className="text-center mb-10">
        <h3 className="text-white text-4xl font-semibold">Frontend Demo</h3>
      </div>
      {/* TABS */}
      <div className="flex justify-between md:mx-10 mx-3 h-28">
        <ul className="flex items-end gap-1">
          {tabs.map((tab, index) => {
            return (
              <li
                className="text-gray-900 font-semibold bg-gray-300 px-2 py-2 border rounded-t-lg hover:cursor-pointer animate duration-300 hover:py-3 hover:bg-gray-100"
                key={index}
              >
                {tab}
              </li>
            );
          })}
        </ul>
        <ul className="flex items-end gap-2">
          <li className="text-white font-medium text-lg">Colors:</li>
          {colors.map((color, index) => {
            return (
              <li
                key={index}
                className={`bg-${color}-700 px-4 py-5 rounded-t-lg hover:cursor-pointer animate duration-300 hover:py-3 hover:bg-${color}-900`}
              ></li>
            );
          })}
        </ul>
      </div>
      <div
        id="frontend_demo_screen"
        className="w-full bg-black h-[500px] rounded-xl"
      >
        {/* DESIGN WINDOW */}
        <div></div>
      </div>
    </section>
  );
};
