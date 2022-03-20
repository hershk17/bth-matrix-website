import React from "react";
import Footer from "../Footer";

import ReactAudioPlayer from "react-audio-player";
import ReactPlayer from "react-player";

export default function Assignment1() {
  return (
    <div>
      <div className="video-grid">
        <div>
          <h2>Video</h2>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=eueDDmDkQDY"
            controls={true}
          />
        </div>
        <div className="transcript-section">
          <h2>Transcript</h2>
          <ReactAudioPlayer src="/assets/audio/a1audio.mp3" controls />
          <p>
            Muhammad Ali was born in Kentucky, USA on January 17, 1942. He was
            an American former heavyweight champion boxer and one of the
            greatest sporting figures of the 20th century. He became an Olympic
            gold medalist and the first fighter to capture the heavyweight title
            three times, Ali won 56 fights in his 21-year long professional
            career. Born Cassius Clay Jr., he changed his name to Muhammad Ali
            after converting to Islam in 1964. He refused military induction and
            was stripped of his heavyweight championship and banned from boxing
            for three years during the prime of his career. He took an estimated
            29,000 punches to the head and earned nearly $57 million in his
            professional career. President Bush awarded Ali with the
            “Presidential Medal of Freedom” award in 2005. He battled
            Parkinson's disease for 3 decades but remained active as a
            humanitarian and goodwill ambassador. He passed away at age 74 on
            June 3, 2016.
          </p>
        </div>
      </div>
      <br />
      <br />
      <h2>Reflection</h2>
      <p>
        <b>Q. The steps to create the video</b>
        <p>
          To create the video, I first did some research on the topic I had
          chosen, which was the legendary boxer Muhammad Ali. I found some
          interesting facts about his life, made a 1-minute-long script then
          recorded myself speaking. I then searched for a free to use background
          song which would fit the tone of the video. Then, after all the edits
          to my audio were completed, I looked for images that would relate to
          each point I was covering. Once all the images, audio, transitions,
          music, title, credit, and end screens were put together, I double
          checked all the timings, exported to an h.265 MP4 format and uploaded
          my video to YouTube, then finally linked it to my website.
        </p>
        <b>
          Q. The difficulties, thoughts, considerations, and other issues you've
          encountered.
        </b>
        <p>
          For this assignment, I chose to use OpenShot to edit my video instead
          of Shotcut, which is what I had used for Lab 4. I found setting up
          transitions to be very frustrating with OpenShot. It might be because
          I'm unfamiliar with the tool, but I was having an issue where the
          image fading out would flicker once before the new image would start
          fading in. This was happening because the transitions I had set on
          each image was overlapping. I fixed this by adding a black screen for
          a split second between each transition. To edit the images, I used a
          photo editing tool called PicsArt on my phone. I chose to use an app
          on my phone because I was most familiar with it and the tool did
          exactly what I wanted with little effort. Lastly, finding a background
          song whose tempo and tone matched the video appropriately was also
          quite challenging. The song I had chosen had a very long
          intro/build-up, but I thought it fit well so I decided to perform some
          edits and adjusted its timings by cutting out repeating sequences in
          the intro and outro.
        </p>
        <b>
          Q. Rate the difficulty of this assignment from 1-10, where 1 is
          easiest.
        </b>
        <p>
          I would rate this assignment a 4 on difficulty. Personally, the major
          difficulty was in figuring out which topic I wanted to cover in around
          a minute. I initially thought of doing a fairy tale but felt very
          underwhelmed by what the result would have been. So, I decided to look
          up someone iconic and presented a brief story about their life.
        </p>
      </p>
      <br />
      <br />
      <br />
      <br />
      <Footer datetime="19/03/2022, 10:00:19 PM" />
    </div>
  );
}
