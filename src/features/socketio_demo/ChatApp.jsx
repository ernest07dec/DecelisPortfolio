import React, { useEffect, useRef, useState } from "react";
import { useSocket } from "../../context/socket/SocketProvider";
import { ConversationView } from "./components/ConversationView";
import { MessageForm } from "./components/MessageForm";
import { UsernameForm } from "./components/UsernameForm";
import { RaisedHandsDisplay } from "./components/RaisedHandsDisplay";
import { Warning } from "./components/Warning";
export const ChatApp = () => {
  const [userNameSet, setUserNameSet] = useState("");
  const [userName, setUserName] = useState("");
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [activeUsers, setActiveUsers] = useState([]);
  const [raisedHands, setRaisedHands] = useState([]);
  const [warning, setWarning] = useState("");
  // SOCKET
  const socket = useSocket();
  // GENERATING RANDOM USERNAME
  const randomUser = "user" + Math.floor(Math.random() * 100000).toString();

  useEffect(() => {
    // LISTENING TO ACTIVE USERS
    socket.on("chatroom:active-users", (data) => {
      setActiveUsers(data);
    });
    // LISTENING TO RECEIVE MESSAGE
    socket.on("chatroom:receive", handleReceiveMessage);
    // LISTENING TO RAISE HAND
    socket.on("chatroom:hand-raised", handleHandRaised);
    //  SETTING RANDOM USER TO VARIABLES
    setUserName(randomUser);
    setUserNameSet(randomUser);
    // SENDING GENERATED USERNAME TO SOCKET
    socket.emit("chatroom:new-user-add", randomUser);
    // CLEARING AFTER DISMOUNT
    return () => {
      socket.off("chatroom:active-users", (data) => {
        setActiveUsers(data);
      });
      socket.off("chatroom:receive", handleReceiveMessage);
      socket.off("chatroom:hand-raised", handleHandRaised);
    };
  }, []);

  // SEND MESSAGE
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() !== "") {
      if (activeUsers.length > 0) {
        try {
          socket.emit("chatroom:send", {
            text: newMessage,
            sender: userName,
          });
        } catch (error) {
          console.log(error);
        }
        setMessages([...messages, { text: newMessage, sender: userName }]);
        setNewMessage("");
      } else {
        // WARN SOCKET IS ASLEEP
        setWarning(
          "Oops, the server is sleeping, please refresh the page or comebacks in a few minutes. (The server is in free hosting) Thank you!"
        );
      }
    } else {
      // WARN FOR NO INPUT
    }
  };
  // RECEIVE MESSAGE
  const handleReceiveMessage = (data) => {
    if (data) {
      setMessages((prevMessages) => [...prevMessages, data]);
    }
  };
  // UPDATE USER
  const updateUser = () => {
    if (userNameSet.trim() !== "") {
      if (activeUsers.find((el) => el.username === userNameSet)) {
        setUserNameSet(userName);
        // WARN FOR EXISTING USERNAME
      } else {
        socket.emit("chatroom:update-username", userNameSet);
        setUserName(userNameSet);
      }
    }
  };
  // RAISE HAND
  const handleRaiseHand = () => {
    if (activeUsers.length > 0) {
      socket.emit("chatroom:raise-hand", userName);
    } else {
      // WARN SOCKET INACTIVE
      setWarning(
        "Oops, the server is sleeping, please refresh the page or comebacks in a few minutes. (The server is in free hosting) Thank you!"
      );
    }
  };
  // RECEIVE RAISE HAND
  const handleHandRaised = (data) => {
    setRaisedHands((prevHands) => [...prevHands, data.username]);

    // Remove the user after 5 seconds
    setTimeout(() => {
      setRaisedHands((prevHands) =>
        prevHands.filter((handUser) => handUser !== data.username)
      );
    }, 5000);
  };

  return (
    <>
      <h3 className="text-white text-4xl font-semibold text-center pb-14">
        Socket IO Demo
      </h3>
      <div className="max-w-xl mx-auto py-2 px-4 border-2 border-indigo-900 rounded-xl">
        <h3 className="text-white text-3xl font-semibold text-center pb-5 pt-4">
          Chat Room App
        </h3>
        <UsernameForm
          userNameSet={userNameSet}
          setUserNameSet={setUserNameSet}
          updateUser={updateUser}
        />
        {raisedHands.length > 0 && (
          <RaisedHandsDisplay raisedHands={raisedHands} />
        )}
        <ConversationView messages={messages} userName={userName} />
        <MessageForm
          handleSendMessage={handleSendMessage}
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          handleRaiseHand={handleRaiseHand}
          raisedHands={raisedHands}
          userName={userName}
        />
      </div>
      {warning && <Warning warning={warning} setWarning={setWarning} />}
    </>
  );
};
