import React from "react";
import Sketch from "react-p5";

let t1_y = 15,
  c1_y = 65,
  s1_y = 15,
  c2_y = 65,
  t2_y = 15;

let t1_f = 1,
  c1_f = 1,
  s1_f = 1,
  c2_f = 1,
  t2_f = 1;

let startTime;

export default function MySketch(props) {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(750, 450).parent(canvasParentRef);
    startTime = new Date();
  };

  const draw = (p5) => {
    p5.background(0);
    p5.noStroke();

    p5.fill(p5.color(64, 226, 160));
    p5.triangle(20, t1_y + 105, 90, t1_y, 160, t1_y + 105);

    p5.fill(255, 102, 102);
    p5.ellipse(230, c1_y, 110);

    p5.fill(p5.color(124, 178, 232));
    p5.rect(320, s1_y, 105);

    p5.fill(255, 102, 102);
    p5.ellipse(515, c2_y, 110);

    p5.fill(p5.color(64, 226, 160));
    p5.triangle(580, t2_y + 105, 650, t2_y, 720, t2_y + 105);

    p5.textSize(32);
    p5.fill(0, 102, 153);
    p5.text('p5.js demo - Bouncing Shapes!', 160, 350)
    p5.fill(0, 102, 153, 90);
    p5.text('p5.js demo - Bouncing Shapes!', 160, 380)

    let elapsed = new Date() - startTime;

    t1_y += t1_f;
    if (elapsed > 500) c1_y += c1_f;
    if (elapsed > 1000) s1_y += s1_f;
    if (elapsed > 1500) c2_y += c2_f;
    if (elapsed > 2000) t2_y += t2_f;

    if(t1_y === 180) t1_f = -1; 
    if(c1_y === 230) c1_f = -1; 
    if(s1_y === 180) s1_f = -1; 
    if(c2_y === 230) c2_f = -1; 
    if(t2_y === 180) t2_f = -1; 

    if(t1_y === 15) t1_f = 1; 
    if(c1_y === 65) c1_f = 1; 
    if(s1_y === 15) s1_f = 1; 
    if(c2_y === 65) c2_f = 1; 
    if(t2_y === 15) t2_f = 1; 
  };

  return (
    <div>
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}
