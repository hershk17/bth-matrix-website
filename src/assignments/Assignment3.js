import React from "react";
import Footer from "../Footer";
import A3Sketch from "./Assignment3Sketch";
import SyntaxHighLighter from "react-syntax-highlighter";

export default function Assignment3() {
  return (
    <div>
      <h1>Assignment 3</h1>
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
      <h3>My Sketch</h3>
      <br />
      <A3Sketch />
      <br />
      <br />
      <h3>Reflection</h3>
      <p>
        I learned a couple of things and got some good practice with the p5.js
        library after completing this assignment. I had already created an
        animation for lab 5 so creating another one had been much more straight
        forward. This time I created a car, which was a reasonably complicated
        design with various shapes and colours involved. I chose to create a
        moving car animation because I wanted to experiment with creating a
        complex and detailed design (the car itself), rotational motion
        (wheels), out of sync motion (clouds), and also user interaction (speed
        of the car). By doing so, I was able to tackle a lot of different aspect
        of animations using p5.js. In my previous attempt at creating an
        animation using p5.js, I had used a ton of variables to keep track of
        the y-coordinates of all the shapes. This made the code very hard to
        read, keep track of, and maintain. When doing this assignment, I
        realized that I only needed to keep track of a single variable for one
        type/speed of motion. I then applied that variable to every shape
        corresponding to that motion. Instead of incrementing the x-coordinate
        of each shape used in the car, I add a factor to all their
        x-coordinates. Then by incrementing this variable, the entire car moves
        along the x-axis. In total, I use 3 factors to keep track of the
        differing motion speeds (car and clouds). I also created an input
        spinner for the user to click to adjust the speed of the car. This input
        spinner would update the motion factor used in the x-coordinates of the
        shapes used in the car. The most challenging part about this assignment
        was definitely the manual effort required in designing the car. The lack
        of a GUI required me to constantly update co-ordinates and refresh to
        see whether the changes were accurate. I also needed to do a decent
        amount of mental math to figure out the co-ordinates required for each
        shape. The main sources I had used when doing this assignment were the
        official p5js.org website as well as a few tutorials on Geeks4Geeks.
        Overall, it was fun working on the assignment. I was able to greatly
        optimize speed and readability in my animation compared to my previous
        attempt and I am quite happy with my design.
      </p>
      <br />
      <br />
      <h3>Assignment3Sketch.js:</h3>
      <SyntaxHighLighter language="javascript">
        {`import React from "react";
import Sketch from "react-p5";
import InputSpinner from "react-bootstrap-input-spinner";

// variables to keep track of media and movements factors
let imgRoad, clouds1, clouds2;
let factor = 0, factor2 = 0, factor3 = 0, modifier = 1;

export default function MySketch(props) {

  // sets up the canvas and loads in assets to be used for drawing
  const setup = (p5, canvasParentRef) => {

    // creates an 810 x 410 canvas
    p5.createCanvas(810, 410).parent(canvasParentRef);

    // loads an image of a road and 2 clouds
    imgRoad = p5.loadImage("/assets/img/road.jpg");
    clouds1 = p5.loadImage("/assets/img/clouds1.png");
    clouds2 = p5.loadImage("/assets/img/clouds2.png");
  };

  // main drawing loop, keeps executing and drawing new elements on the canvas
  const draw = (p5) => {
    // sets background colour to 0
    p5.background(0);

    // movements factors (factor, factor2, factor3) are added to x-coordinates for the below drawings
    // to dynamically increase or decrease x coordinates each time canvas is redrawn

    // places images on screen
    p5.image(imgRoad, 5, 5, 800, 400);
    p5.image(clouds1, 30 + factor2, 10, clouds1.width / 3.5, clouds1.height / 3.5);
    p5.image(clouds2, 480 + factor3, 10, clouds2.width / 10, clouds2.height / 10);

    // draws 24pt comic sans text for the title and subtitle of the canvas
    p5.textSize(24);
    p5.noStroke();
    p5.textFont("Comic Sans MS");
    p5.fill("black");
    p5.text("Driving on the highway!", 20, 40);
    p5.fill(64, 64, 64, 150); 
    p5.text("try speeding up!", 20, 68);

    p5.fill(112, 128, 144); 
    p5.stroke(1);

    // draws the main body and roof of the car (rectangle and quadrilateral)
    p5.rect(10 + factor, 270, 200, 35); // body
    p5.quad(55 + factor, 240, 120 + factor, 240, 155 + factor, 270, 45 + factor, 270); // roof

    // draws the cutouts of the door on the main body (lines)
    p5.line(45 + factor, 270, 45 + factor, 290); // door cutout left
    p5.line(155 + factor, 270, 155 + factor, 286); // door cutout right

    // draws the window section of the car (quadrilateral and line)
    p5.fill("lightgrey");
    p5.quad(58 + factor, 244, 118 + factor, 244, 149 + factor, 270, 49 + factor, 270); // windows
    p5.line(70 + factor, 245, 70 + factor, 270); // window cutout

    // draws the headlights and taillights of the car (rectangles)
    p5.fill("white");
    p5.rect(200 + factor, 275, 10, 5); // headlights
    p5.fill("red");
    p5.rect(10 + factor, 270, 5, 10); // taillights

    // draws the inner section of the car behind the wheels (arcs)
    p5.fill(64, 64, 64);
    p5.arc(50 + factor, 305, 42, 40, p5.PI, p5.TWO_PI); // inner car left
    p5.arc(160 + factor, 305, 42, 40, p5.PI, p5.TWO_PI); // inner car right

    // draws the wheels of the car (ellipses)
    p5.fill("black");
    p5.ellipse(50 + factor, 305, 35); // wheel left
    p5.ellipse(160 + factor, 305, 35); // wheel right

    // draws the inner frame / plate of the wheel (ellipses)
    p5.stroke("grey");
    p5.ellipse(50 + factor, 305, 32); // wheel left inner
    p5.ellipse(160 + factor, 305, 32); // wheel right inner

    // draws the pattern on the left wheel plate (lines)
    // rotates these lines by a 'factor' everytime canvas is redrawn
    p5.translate(50 + factor, 305);
    p5.rotate(factor / 20);
    p5.translate(-50 - factor, -305);
    p5.line(50 + factor, 290, 50 + factor, 320);
    p5.line(34.5 + factor, 305, 65 + factor, 305);
    p5.line(39.25 + factor, 294.5, 60.5 + factor, 315.5);
    p5.line(60.75 + factor, 294.5, 39.5 + factor, 315.5);

    // pops previous transformation to begin new transformation for other set of wheels 
    p5.pop();
    p5.push();

    // draws the pattern on the right wheel plate (lines)
    // rotates these lines by a 'factor' everytime canvas is redrawn
    p5.translate(160 + factor, 305);
    p5.rotate(factor / 20);
    p5.translate(-160 - factor, -305);
    p5.line(160 + factor, 290, 160 + factor, 320);
    p5.line(144.5 + factor, 305, 175 + factor, 305);
    p5.line(149.25 + factor, 294.5, 170.5 + factor, 315.5);
    p5.line(170.75 + factor, 294.5, 149.5 + factor, 315.5);

    // Since x-coordinates of drawings are bound to this factor,
    // modifying it will modify the x-coordinate position of the drawings, 
    // allowing the simulation of motion
    factor = factor + modifier; // simulates motion of car
    factor2 = factor2 - 0.1; // simulates motion of first cloud
    factor3 = factor3 - 0.3; // simulates motion of second cloud
    
    // if factor reaches a certain point, resets to 0 
    // this happens when the car reaches the end of the road, 
    // resetting the position of the drawings (original x-coordinates)
    if (factor >= 580) { 
      factor = factor2 = factor3 = 0;
    }
  };

  return (
    <div>
      <Sketch setup={setup} draw={draw} />
      <div className="myspinner">
        Modify Speed:

        {/* input spinner to modify 'factor', which determines the speed of the car */}
        <InputSpinner
          type={"real"}
          max={5}
          min={1}
          step={1}
          value={1}
          onChange={n => modifier = n}
          variant={"dark"}
          size="sm"
        />
      </div>
    </div>
  );
}
`}
      </SyntaxHighLighter>
      <br />
      <br />
      <br />
      <br />
      <Footer datetime="16/04/2022, 10:27:44 PM" />
    </div>
  );
}
