import React from "react";

export const RoomMembers = ({ roomID, roomMembers }) => {
  return (
    <div className="flex w-full items-center justify-start my-5">
      <div className="flex items-center justify-start overflow-x-auto scroll-style">
        <h3 className="text-white text-lg bg-indigo-900 py-2 px-4 rounded-lg no-wrap text-nowrap">
          Room {roomID} :
        </h3>
        <ul className="text-white flex gap-2 px-2 flex-shrink-0">
          {roomMembers?.map((user, index) => (
            <li key={index} className="mb-1">
              <span className=""></span> {user},
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
