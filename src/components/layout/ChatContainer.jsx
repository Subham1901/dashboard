import React, { useState } from "react";
import UserList from "./UserList";
import useFetch from "../hooks/useFetch";
import { Avatar } from "@mui/material";
import { RxDotFilled } from "react-icons/rx";
import { BsChatRight } from "react-icons/bs";
const ChatContainer = () => {
  const [toggle, setToggle] = useState(false);
  const { data } = useFetch();
  console.log(data);
  return (
    <>
      <button
        className={!toggle ? "open-button" : "close-button"}
        onClick={(e) => setToggle((prev) => !prev)}
      >
        <BsChatRight size={26} className="chat" /> Chats
      </button>
      <div className={toggle ? "chat-popup-display" : "chat-popup"}>
        <button
          className="button-full"
          onClick={(e) => setToggle((prev) => !prev)}
        >
          <BsChatRight size={26} className="chat" /> Chats
        </button>
        {data &&
          data.map((data) => (
            <div className="list-online" key={data?.id}>
              <div className="list">
                <Avatar src={data?.profilepicture} />
                <p>{data?.name}</p>
              </div>
              <p>
                <RxDotFilled
                  size={25}
                  color={data?.name.includes("Le") ? "#008000" : "#d0d0d0"}
                />
              </p>
            </div>
          ))}
      </div>
    </>
  );
};

export default ChatContainer;
