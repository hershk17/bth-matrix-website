import React from "react";
import ReactPlayer from "react-player";
import Footer from "../Footer";

export default function Lab4() {
  return (
    <div>
      <div className="video-grid">
        <div className="video-player">
          <ReactPlayer
            height="500px"
            width="auto"
            url="/assets/video/penguin.MP4"
            controls={true}
          />
        </div>
        <div className="video-desc">
          <h3>Discussion</h3>
          <p>
            Text goes here
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer datetime="11/03/2022, 04:01:29 PM" />
    </div>
  );
}
