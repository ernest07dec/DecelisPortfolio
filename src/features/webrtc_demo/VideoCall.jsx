import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { RoomNameForm } from "./components/RoomNameForm";
import { RoomMembers } from "./components/RoomMembers";
import { useSocket } from "../../context/socket/SocketProvider";
import peer from "../../components/services/peer";

export const VideoCall = () => {
  const socket = useSocket();
  const [roomID, setRoomID] = useState("");
  const [roomMembers, setRoomMembers] = useState([]);
  const [myStream, setMyStream] = useState();
  const [remoteStream, setRemoteStream] = useState();
  const [roomIDInput, setRoomIDInput] = useState("");
  const [join, setJoin] = useState(false);
  const [incomingCall, setIncomingCall] = useState(null);
  const [remoteSocketId, setRemoteSocketId] = useState("");
  //   JOINING ROOM
  const joinRoom = () => {
    socket.emit("room:join", {
      room: roomIDInput,
    });
    // INITIALIZING LOCALSTREAM
    peer.peer.addEventListener("track", async (ev) => {
      const remoteStream = ev.streams;

      setRemoteStream(remoteStream[0]);
    });
    const initializeStream = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      setMyStream(stream);
    };
    initializeStream();
  };
  //   USERJOINED SIGNAL HANDLING
  const handleUserJoined = ({ room, members }) => {
    setRoomID(room);
    setRoomMembers(members);
  };
  //   INITIATE CALL
  const handleCallUser = async () => {
    const offer = await peer.getOffer();
    socket.emit("user:call", { to: remoteSocketId, offer });
    setJoin(true);
  };
  //   HANDLE INCOMING CALL
  const handleIncomingCall = (data) => {
    setIncomingCall(data);
  };
  const answerCall = async ({ from, offer }) => {
    const ans = await peer.getAnswer(offer);
    socket.emit("call:accepted", { to: from, ans });
    sendStreams();
    setJoin(true);
  };
  //   NEXT EVENTS AFTER CALL ACCEPTANCE
  const handleCallAccepted = ({ from, ans }) => {
    peer.setLocalDescription(ans);

    sendStreams();
  };
  //   SENDING OF STREAMS
  const sendStreams = () => {
    if (myStream) {
      for (const track of myStream.getTracks()) {
        peer.peer.addTrack(track, myStream);
      }
    }
  };
  //   USEEFFECT ON SOCKET LISTENING
  useEffect(() => {
    socket.on("user:joined", handleUserJoined);
    socket.on("incoming:call", handleIncomingCall);
    socket.on("call:accepted", handleCallAccepted);
    return () => {
      socket.off("user:joined", handleUserJoined);
      socket.off("incoming:call", handleIncomingCall);
      socket.off("call:accepted", handleCallAccepted);
    };
  }, [socket]);
  //   REMOTESOCKETID STATE
  useEffect(() => {
    const otherUser = roomMembers.find((el) => el !== socket?.id);
    if (otherUser) {
      setRemoteSocketId(otherUser);
    }
  }, [roomMembers]);
  return (
    <>
      <h3 className="text-white text-4xl font-semibold text-center pb-14">
        Web RTC Demo
      </h3>
      <div className="max-w-xl mx-auto py-2 px-4 border-2 border-indigo-900 rounded-xl">
        <h3 className="text-white text-3xl font-semibold text-center pb-5 pt-4">
          Video Chat App
        </h3>
        <p className="text-right text-white">
          ID:{socket?.id ? socket.id : "(Server is sleeping)"}
        </p>
        {roomID ? (
          <>
            <RoomMembers roomID={roomID} roomMembers={roomMembers} />
          </>
        ) : (
          <RoomNameForm
            roomIDInput={roomIDInput}
            setRoomIDInput={setRoomIDInput}
            joinRoom={joinRoom}
          />
        )}
        {roomMembers.length > 1 ? (
          !join ? (
            <div className="w-full h-[300px] flex flex-col justify-center items-center">
              {/* {incomingCall ? (
                <button
                  className="px-5 py-3 bg-slate-600"
                  onClick={() => answerCall(incomingCall)}
                >
                  Join Call
                </button>
              ) : (
                <button
                  className="px-5 py-3 bg-slate-600"
                  onClick={handleCallUser}
                >
                  Initiate Call
                </button>
              )} */}
              <h3 className="px-5 py-3 bg-slate-600">
                UNDER CONSTRUCTION. I AM SORRY FOR THE INCONVENIENCE
              </h3>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center gap-5">
              <div className="bg-red-500">
                <ReactPlayer
                  playing
                  muted
                  height="20vh"
                  width="20vw"
                  url={myStream}
                />
              </div>
              <div className="bg-red-500">
                <ReactPlayer
                  playing
                  muted
                  height="20vh"
                  width="20vw"
                  url={remoteStream}
                />
              </div>
            </div>
          )
        ) : (
          <div className="w-full h-[300px] flex flex-col justify-center items-center text-center text-white px-10">
            <h3 className="text-2xl">
              {/* Open a new tab or a new window to try this demo. */}
              UNDER CONSTRUCTION. I AM SORRY FOR THE INCONVENIENCE
            </h3>
            {/* <p>Join the same room with maximum of 2 members</p> */}
          </div>
        )}
      </div>
    </>
  );
};
