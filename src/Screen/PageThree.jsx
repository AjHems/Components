import React from "react";
import bgVideo from "../Asset/videos/bg-video.mp4";

const PageThree = () => {
  return (
    <div>
      <video className=" h-screen max-w-[100%]" autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
        <h1
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
          }}
        >
          Hello, World!
        </h1>
      </video>
    </div>
  );
};

export default PageThree;
