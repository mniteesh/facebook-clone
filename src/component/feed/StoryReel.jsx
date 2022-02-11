import React from "react";
import Story from "./story/Story";
import "./StoryReel.css";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="https://i.pinimg.com/564x/ee/a5/53/eea553f5c6c56ba349d8c0e7d11e57b4.jpg"
        profileSrc="https://i.pinimg.com/564x/38/fa/b9/38fab9d6b8a9d43ebe11e78d74f6b833.jpg"
        title="avengers"
      />
      <Story
        image="https://i.pinimg.com/564x/46/93/50/4693505b2ef0413b2770f998108280cf.jpg"
        profileSrc="https://i.pinimg.com/564x/ad/af/29/adaf299f8c55cbb8e3f168db34397426.jpg"
        title="avengers"
      />
      <Story
        image="https://i.pinimg.com/564x/46/93/50/4693505b2ef0413b2770f998108280cf.jpg"
        profileSrc="https://i.pinimg.com/564x/ad/af/29/adaf299f8c55cbb8e3f168db34397426.jpg"
        title="avengers"
      />
      <Story
        image="https://i.pinimg.com/564x/92/62/5d/92625db028460fd2cc4f9d35b88ef1e7.jpg"
        profileSrc="https://i.pinimg.com/564x/ad/af/29/adaf299f8c55cbb8e3f168db34397426.jpg"
        title="avengers"
      />
      <Story
        image="https://i.pinimg.com/564x/83/e6/5c/83e65c147dfcfc99b31c0bcbf6af792a.jpg"
        profileSrc="https://i.pinimg.com/564x/ad/af/29/adaf299f8c55cbb8e3f168db34397426.jpg"
        title="avengers"
      />
    </div>
  );
};

export default StoryReel;
