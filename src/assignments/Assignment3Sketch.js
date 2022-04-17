import React from "react";
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
