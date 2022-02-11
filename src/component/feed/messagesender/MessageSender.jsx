import { InsertEmoticon, PhotoLibrary, Videocam } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useStateValue } from "../../../context/StateProvider";
import { collection, doc, setDoc, Timestamp } from "firebase/firestore";
import "./MessageSender.css";
import db from "../../../firebase/firebase";

const MessageSender = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const handleSubmit = (e) => {
    e.preventDefault();

    setDoc(doc(collection(db, "posts")), {
      image: imageUrl,
      message: input,
      profilePic: user.photoURL,
      timeStamp: Timestamp.fromDate(new Date()),
      username: user.displayName,
    });

    setInput("");
    setImageUrl("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender_top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            className="messageSender_input"
            type="text"
            placeholder={`Whats on your mind, ${user.displayName} ? `}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            type="text"
            placeholder="image URL (Optional)"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />

          <button onClick={handleSubmit} type="submit">
            Hidden
          </button>
        </form>
      </div>
      <div className="messageSender_bottom">
        <div className="messageSender_option">
          <Videocam style={{ color: "red" }} />
          <h3>Live Video </h3>
        </div>

        <div className="messageSender_option">
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Video </h3>
        </div>
        <div className="messageSender_option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
