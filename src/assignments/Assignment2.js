import React from "react";
import Footer from "../Footer";

import ReactPlayer from "react-player";

export default function Assignment2() {
  return (
    <div>
      <h1>Assignment 2</h1>
      <p>
        I declare that this is wholly my own work in accordance with Seneca
        Academic Policy. No part of this work has been copied manually or
        electronically from any other source (including web sites) or
        distributed to other students.
        <br />
        <br />
        Name <b>Harsh K</b> <br />
        Student ID <b>127318194</b>
      </p>
      <br />
      <ReactPlayer url="https://youtu.be/MgaF6KuCLmo" controls={true} />
      <br />
      <br />
      <h3>Script</h3>
      <p>Script goes here</p>
      <br />
      <h3>Reflection</h3>
      <p>Reflection goes here</p>
      <br />
      <br />
      <br />
      <br />
      <Footer datetime="10/04/2022, 08:57:52 PM" />
    </div>
  );
}
