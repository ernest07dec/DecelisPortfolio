import React from "react";
import "../css/styles.css";
export const RaisedHandsDisplay = ({ raisedHands }) => {
  return (
    <div className="flex w-full items-center justify-start">
      <div className="flex items-center justify-start overflow-x-auto scroll-style">
        <h3 className="text-white text-lg bg-indigo-900 py-2 px-4 rounded-lg no-wrap text-nowrap">
          Raised Hands
        </h3>
        <ul className="text-white flex gap-2 flex-shrink-0">
          {raisedHands.map((user, index) => (
            <li key={index} className="mb-1">
              <span className="">👋</span> {user}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
