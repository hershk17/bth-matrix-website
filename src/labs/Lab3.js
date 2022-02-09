import React from "react";
import Footer from "../Footer";

import ReactAudioPlayer from "react-audio-player";

export default function Lab3() {
  return (
    <div>
      <div className="image-grid">
        <div>
          <h1>Original</h1>
          <br />
          <ReactAudioPlayer src="/assets/audio/original.mp3" controls />
        </div>
        <div>
          <h1>Edited</h1>
          <br />
          <ReactAudioPlayer src="/assets/audio/edited.mp3" controls />
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div>
        <h3>Discussion</h3>
        1) the reason of choosing the file format when creating your audio
        <br />
        A: I used .mp3 since that is the most commonly used and compatible audio
        format. It is also compressed enough to be of a small enough size to
        justify being utilized on webpages, where the user's bandwidth can
        affect the latency and playability of some audio files. Formats such as
        .wav are out of the question as they can be significantly larger and use
        much more of the user's bandwidth.
        <br />
        <br />
        2) the use of audio on your website regarding usability
        <br />
        A: The audio files are placed in an easy to find/see location. The audio
        files have the necessary media controls to play, pause, adjust volume,
        playback speed, and download. The audio files are also not intrusive
        since they don't autoplay on page load which can feel jarring and
        annoying to users that don't want to listen to the audio files.
        <br />
        <br />
        3) any thoughts on different audio file formats, e.g., cons, pros, when
        to use.
        <br />
        A: .mp3 - pro: small size, con: low quality / lossy compression = good to
        use for websites
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;.wav - pro: lossless quality, con: very large file size = good for music
        and high quality media creation
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;.ogg - pro: even smaller size, con: much lower quality = good to use for
        websites and bulk recordings
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;flac - pro: lossless quality, con: extremely large file size = good for
        music and high quality media creation
        <br />
        <br />
        4) description of your editing on the file, e.g., cutting, assembly,
        fadein, fadeout, etc
        <br />
        A: I cut out my attempts at an intro in which I stuttered or got stuck
        while speaking. I remember I forgot to intro myself, so I decided to do
        it at the end then merged it with the edited intro. I spoke a sentence
        really slow which was then sped up as well as the pauses being cut out.
        I also spoke a sentence really quickly which was then slowed down with
        fake pauses add in between. I also added a noise reduction filter to the
        entire clip and amplified the volume.
        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer datetime="09/02/2022, 06:17:26 PM" />
    </div>
  );
}
