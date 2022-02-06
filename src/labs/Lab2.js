import React from "react";
import Footer from "../Footer";

export default function Lab2() {
  return (
    <div>
      <div className="image-grid">
        <div>
          <h3>1. Original </h3>
          <img
            className="lab2-img"
            src={require("../img/controller.jfif")}
            alt="controller.jfif"
          />
        </div>
        <div>
          <h3>2. Modified </h3>
          <img
            className="lab2-img"
            src={require("../img/controller-modified.jpg")}
            alt="controller.jfif"
          />
        </div>
        <div>
          <h3>3. Created </h3>
          <img
            className="lab2-img"
            src={require("../img/controller-drawing.jpg")}
            alt="controller.jfif"
          />
        </div>
      </div>
      <br />
      <br />
      <div>
        <h3>QnA</h3>
        1) What's your image modification? Any thoughts (why)? Steps? <br />
        A: Updated some issues with the controller. It looks uncomfortable and
        incomplete, has unnecessary features, so I replaced them with something
        more reasonable or practical.
        <br />
        <br />
        2) What are the differences you notice from the modification (e.g., file
        size change? Quality change? etc.) <br />
        A: The file size increased for my modification and slightly reduced for
        my drawing (but still higher than the original). This is probably
        because of the differing file extensions and lack of compression on my
        images. The image quality is roughly the same for my modification but
        reduced greatly for my drawing since it is a rough mockup and utilizes a
        smaller canvas resolution.
        <br />
        <br />
        3) Is there any special consideration when you created/ drew the new
        image(s)? What were the steps? <br />
        The steps were to fix the main issues and add new more comfortable and
        quality of life features. I looked at what works and what doesn't work,
        then filtered those in and out accordingly.
        <br />
      </div>
      <br />
      <br />
      <div>
        <h3>Reflection</h3>
        Q. How hard do you rate this lab in a range 1-10, where 1 is easiest, 10
        is the hardest? <br />
        I would rate this lab a 1/10 for difficulty.
        <br />
        <br />
        Q. What's the difficulty? <br />
        The lab was not very difficult.
        <br />
        <br />
        Q. How did you solve it? <br />
        I solved it by looking at some objects around me and what I could do to
        improve them.
        <br />
        <br />
        Q. Is it Fun? <br />
        It was okay, to be perfectly honest I would prefer a bigger focus on
        programming, but this was fine.
        <br />
        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer datetime="06/02/2022, 03:56:44 PM" />
    </div>
  );
}
