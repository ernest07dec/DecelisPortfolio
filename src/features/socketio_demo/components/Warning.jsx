import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";

export const Warning = ({ warning, setWarning }) => {
  // Add a class to the body element to disable scrolling
  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Remove the class when the component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="inset-0 fixed z-50 backdrop-blur-lg flex justify-center items-center">
      <div className="bg-gray-900 flex flex-col justify-start p-3 rounded-3xl max-w-xs">
        {/* CLOSE */}
        <div className="flex justify-end text-right">
          <p
            className="text-red-700 p-2 rounded-xl text-xl hover:bg-gray-700 hover:text-red-500 hover:cursor-pointer"
            onClick={() => setWarning("")}
          >
            <IoMdClose />
          </p>
        </div>
        {/* WARNING CONTENT */}
        <div className="text-gray-200 text-lg flex justify-center items-center p-4 text-center">
          <p className="max-w-full overflow-wrap break-word">{warning}</p>
        </div>
      </div>
    </div>
  );
};
