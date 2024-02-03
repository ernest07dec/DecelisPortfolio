import React, { useEffect, useRef } from "react";

import "../css/styles.css";

export const ConversationView = ({ userName, messages }) => {
  const scroll = useRef();
  useEffect(() => {
    setTimeout(() => {
      scroll.current?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  }, [messages]);
  return (
    <div
      className="border rounded-md p-5 my-5 bg-gray-200 mb-4 overflow-x-hidden scroll-style "
      style={{ height: "300px", overflowY: "auto" }}
    >
      {messages.map((message, index) => (
        <div
          key={index}
          ref={scroll}
          className={`mb-2 flex flex-col gap-1  ${
            message.sender === userName
              ? "text-right items-end"
              : "text-left items-start"
          }`}
        >
          {message.sender !== userName && <p>{message.sender}:</p>}

          <span
            className={`px-2 py-2 rounded-md ${
              message.sender === userName ? "bg-blue-500" : "bg-gray-300"
            }`}
          >
            {message.text}
          </span>
        </div>
      ))}
    </div>
  );
};
