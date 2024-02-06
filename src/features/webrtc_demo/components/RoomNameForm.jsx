import React from "react";

export const RoomNameForm = ({ roomIDInput, setRoomIDInput, joinRoom }) => {
  return (
    <div className="flex items-center py-2">
      <label htmlFor="roomname" className="text-white pr-3">
        RoomID:
      </label>
      <input
        type="text"
        className="flex-grow p-2 border rounded-md mr-2"
        name="roomname"
        placeholder="Type your roomname..."
        value={roomIDInput}
        onChange={(e) => setRoomIDInput(e.target.value)}
      />
      <button
        type="button"
        className="border-2 border-indigo-700 text-white px-4 py-2"
        onClick={() => joinRoom()}
      >
        Join
      </button>
    </div>
  );
};
