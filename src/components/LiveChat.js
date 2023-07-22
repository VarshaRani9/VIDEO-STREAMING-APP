import React, { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      //API polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(35),
        })
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, index) => (
          <ChatMessages key={index} name={c.name} msg={c.message} />
        ))}
      </div>
      <form
        className="p-2 m-2 border border-black w-full rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name:"Varsha Rani",
            message : liveMessage
          }))
          setLiveMessage("")
        }}
      >
        <input
          className="px-2 w-80 border border-blue-200 rounded-lg"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-200">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
