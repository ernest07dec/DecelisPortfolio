import React from "react";

export const UsernameForm = ({ userNameSet, setUserNameSet, updateUser }) => {
  return (
    <div className="flex items-center py-2">
      <label htmlFor="username" className="text-white pr-3">
        Username:
      </label>
      <input
        type="text"
        className="flex-grow p-2 border rounded-md mr-2"
        name="username"
        placeholder="Type your message..."
        value={userNameSet}
        onChange={(e) => setUserNameSet(e.target.value)}
      />
      <button
        type="button"
        className="border-2 border-indigo-700 text-white px-4 py-2"
        onClick={() => updateUser()}
      >
        Update
      </button>
    </div>
  );
};
