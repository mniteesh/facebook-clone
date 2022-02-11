import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import db from "../../firebase/firebase";
import "./Feed.css";
import MessageSender from "./messagesender/MessageSender";
import Post from "./post/Post";
import StoryReel from "./StoryReel";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // db.collection("posts").onSnapshot((snapshot) => {
    //   setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    // });

    getDocs(collection(db, "posts")).then((snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          image={post.data.image}
          username={post.data.username}
          timestamp={post.data.timestamp}
          message={post.data.message}
        />
      ))}
    </div>
  );
};

export default Feed;
