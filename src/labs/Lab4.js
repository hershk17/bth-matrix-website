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
            width="400px"
            url="https://youtu.be/30IQR6eELPM"
            controls={true}
          />
        </div>
        <div className="video-desc">
          <h3>Discussion</h3>
          <p>
            For this lab, I used a video I had recorded of a penguin. I thought
            this video was funny since the penguin looked quite silly and
            confused. I used Shotcut to edit the video since it had more
            convenient support for vertical aspect ratio videos. I made a few
            cuts to shorten the duration of the video, added a title and end
            screen with transitions in between, a silly copyright-free
            background song, along with captions jokingly conveying the bird's
            thoughts throughout the video. The original video was recorded in
            4K60fps with a duration of around 1 minute and a size of 1.4 GB. I
            exported my edited video to an mp4 format at 1080p30fps with a size
            of around 80 MB, albeit at a noticeably lower quality and bitrate.
            But, I was fine with how the video looked in the browser and the
            final size was very reasonable compared to the original.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer datetime="11/03/2022, 06:02:29 PM" />
    </div>
  );
}
