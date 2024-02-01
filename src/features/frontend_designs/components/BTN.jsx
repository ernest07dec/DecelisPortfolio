import React from "react";
import "../screendemo.css";

export const BTN = ({ string, design, color }) => {
  return (
    <button
      type="submit"
      className={` py-2 px-8 focus:outline-none ${
        design === "Corporate"
          ? `text-white rounded animate duration-300 hover:px-9 hover:font-semibold  hover:shadow-xl `
          : ""
      }${
        design === "Minimalist"
          ? `border-2 text-${color}-800 font-semibold hover:text-gray-800 hover:border-4 h-12`
          : ""
      }${
        design === "Vintage"
          ? ` font-semibold text-2xl hover:text-gray-300 text-gray-100 underline hover:no-underline h-12`
          : ""
      }`}
      style={{
        backgroundColor: `${
          design === "Corporate"
            ? color === "indigo"
              ? "rgb(99 102 241)"
              : color === "green"
              ? "rgb(34 197 94)"
              : color === "red"
              ? "rgb(239 68 68)"
              : color === "blue"
              ? "rgb(29 78 216)"
              : "rgb(99 102 241)"
            : design === "Minimalist"
            ? ""
            : ""
        }`,
        borderColor: `${
          design === "Minimalist"
            ? color === "indigo"
              ? "rgb(99 102 241)"
              : color === "green"
              ? "rgb(34 197 94)"
              : color === "red"
              ? "rgb(239 68 68)"
              : color === "blue"
              ? "rgb(29 78 216)"
              : "rgb(99 102 241)"
            : ""
        }`,
      }}
    >
      {string}
    </button>
  );
};
