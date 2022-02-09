import React from "react";
import Footer from "../Footer";

import ReactAudioPlayer from "react-audio-player";
import { Image } from "react-bootstrap";

export default function Lab3() {
  return (
    <div>
      <ReactAudioPlayer src="" controls />
      <Image src="../assets/controller.jfif"/>
      <Footer datetime="09/02/2022, 01:32:16 PM" />
    </div>
  );
}
