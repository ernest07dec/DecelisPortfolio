import React from "react";
import Bootstrap from "../../assets/bootstrap.png";
import Express from "../../assets/express.png";
import Github from "../../assets/github.png";
import Laravel from "../../assets/laravel.png";
import Mongodb from "../../assets/mongdb.png";
import Nodejs from "../../assets/nodejs.png";
import Php from "../../assets/phpphp.png";
import Reactlogo from "../../assets/react.png";
import Tailwind from "../../assets/tailwind.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";

export const TechStacks = () => {
  return (
    <>
      <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-y-10">
        <div className="flex h-44 w-44 justify-center items-center bg-gray-200 rounded-3xl mx-auto p-1">
          <img src={Mongodb} />
        </div>
        <div className="flex h-44 w-44 justify-center items-center bg-gray-200 rounded-3xl mx-auto p-1">
          <img className="h-32" src={Express} />
        </div>
        <div className="flex h-44 w-44 justify-center items-center bg-gray-200 rounded-3xl mx-auto p-1">
          <img src={Reactlogo} />
        </div>
        <div className="flex h-44 w-44 justify-center items-center bg-gray-200 rounded-3xl mx-auto p-1">
          <img src={Nodejs} />
        </div>
        <div className="flex h-44 w-44 justify-center items-center bg-gray-200 rounded-3xl mx-auto p-1">
          <img src={Tailwind} />
        </div>
        <div className="flex h-44 w-44 justify-center items-center bg-gray-200 rounded-3xl mx-auto p-1">
          <img src={Bootstrap} />
        </div>
        <div className="flex h-44 w-44 justify-center items-center bg-gray-200 rounded-3xl mx-auto p-1">
          <img src={Laravel} />
        </div>
        <div className="flex h-44 w-44 justify-center items-center bg-gray-200 rounded-3xl mx-auto p-1">
          <img src={Php} />
        </div>
        <div className="flex h-44 w-44 justify-center items-center bg-gray-200 rounded-3xl mx-auto p-1">
          <img src={Github} />
        </div>
        <div className="flex w-44 justify-center items-center bg-gray-200 rounded-3xl mx-auto p-1">
          <img className="h-32" src={javascript} />
        </div>
        <div className="flex w-44 justify-center items-center bg-gray-200 rounded-3xl mx-auto p-2">
          <img className="h-32" src={html} />
        </div>
        <div className="flex w-44 justify-center items-center bg-gray-200 rounded-3xl mx-auto p-5">
          <img className="h-32" src={css} />
        </div>
      </div>
    </>
  );
};
