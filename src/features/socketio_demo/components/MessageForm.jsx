import React from "react";
import { CirclesWithBar } from "react-loader-spinner";
import { HiMiniHandRaised } from "react-icons/hi2";

export const MessageForm = ({
  handleSendMessage,
  newMessage,
  setNewMessage,
  handleRaiseHand,
  raisedHands,
  userName,
}) => {
  return (
    <form onSubmit={handleSendMessage} className="flex items-center gap-2 h-20">
      <input
        type="text"
        className="flex-grow p-2 border rounded-md"
        placeholder="Type your message..."
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      {raisedHands.includes(userName) ? (
        <button className="border-2 border-indigo-700 text-indigo-300 rounded-xl px-4 py-4">
          <CirclesWithBar color="#36d7b7" height="18" width="18" />
        </button>
      ) : (
        <button
          className="border-2 border-indigo-700 text-indigo-300 rounded-xl px-4 py-4 hover:border-4"
          onClick={handleRaiseHand}
        >
          <HiMiniHandRaised />
        </button>
      )}

      <button
        type="submit"
        className="border-2 border-indigo-700 text-white px-4 py-2"
      >
        Send
      </button>
    </form>
  );
};
