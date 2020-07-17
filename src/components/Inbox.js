import React from "react";
import "./Inbox.css";
import { data } from "../mock-data.json";

function Inbox() {
  const mockData = data.map((item) => {
    return item.profileImage;
  });

  const senderName = data.map((item) => {
    return item.username;
  });

  const messages = data.map((item) => {
    return item.message;
  });

  const recievedTime = data.map((item) => {
    return item.time;
  });

  return (
    <div className="inbox">
      <img src={mockData[0]} alt="" />
      <div className="inbox__messageText">
        <strong>{senderName[0]}</strong>
        <small>{messages[0]}</small>
      </div>
      <div className="inbox__time">
        <p>{recievedTime[0]}</p>
      </div>
    </div>
  );
}

export default Inbox;
