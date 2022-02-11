import { AccountCircle, ChatBubbleOutline, KeyboardArrowDown, NearMe, ThumbUp } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import moment from "moment";
import React from "react";
import "./Post.css";

const Post = ({ profilePic, image, username, timestamp,message }) => {
  return (
    <div className="post">
      <div className="post_top">
        <Avatar src={profilePic} className="post_avatar" />
        <div className="post_topInfo">
          <h3>{username}</h3>
          <p>{moment().startOf(timestamp).fromNow() }</p>
        </div>
      </div>
      <div className="post_bottom">
        <p>{message}</p>
      </div>
      <div className="post_image">
        <img src={image} alt="" />
      </div>
      <div className="post_options">
        <div className="post_option">
            <ThumbUp />
            <p>Like</p>
        </div>
        <div className="post_option">
            <ChatBubbleOutline />
            <p>Comment</p>
        </div>
        <div className="post_option">
            <NearMe />
            <p>Share</p>
        </div>
        <div className="post_option">
            <AccountCircle />
            <KeyboardArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Post;
