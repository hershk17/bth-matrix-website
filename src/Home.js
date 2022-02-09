import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Link to="guidelines">
        <Button>View Web Usability Guidelines</Button>
      </Link>
      <br />
      <br />
      <br />
      <br />
      <p>
        I declare that this is wholly my own work in accordance with Seneca
        Academic Policy. No part of this work has been copied manually or
        electronically from any other source (including web sites) or
        distributed to other students.
        <br />
        <br /> Name <b>Harsh K</b>
        <br /> Student ID <b>127318194</b>
      </p>
      <Footer datetime="28/01/2022, 07:17:52 PM"/>
    </div>
  );
}
