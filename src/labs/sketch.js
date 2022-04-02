import React from "react";
import Sketch from "react-p5";

let t1_y = 120, c1_y = 175, s1_y = 120, c2_y = 175, t2_y = 120;
let t1_f = 1, c1_f = 1, s1_f = 1, c2_f = 1, t2_f = 1;
let startTime;
let img1, img2;

export default function MySketch(props) {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(1050, 380).parent(canvasParentRef);
    startTime = new Date();
    img1 = p5.loadImage('/assets/img/basketball.jpg');
    img2 = p5.loadImage('/assets/img/shapes.webp');
  };

  const draw = (p5) => {
    p5.background(0);

    p5.fill('white');
    p5.stroke(126);
    p5.line(430,45,750,45);
    p5.line(750,0,750,380);

    p5.noStroke();
    p5.textSize(28);
    p5.textFont('Comic Sans MS');

    p5.fill('darkgrey');
    p5.text('p5.js demo - Bouncing Shapes!', 20, 40)
    p5.fill(255, 255, 255, 50);
    p5.text('p5.js demo - Bouncing Shapes!', 20, 68)
    p5.fill(0, 102, 153);

    p5.noStroke();

    p5.fill(p5.color(64, 226, 160));
    p5.triangle(20, t1_y + 105, 90, t1_y, 160, t1_y + 105);

    p5.fill(255, 102, 102);
    p5.ellipse(230, c1_y, 105);

    p5.fill(p5.color(124, 178, 232));
    p5.rect(320, s1_y, 105);

    p5.fill(255, 102, 102);
    p5.ellipse(515, c2_y, 105);

    p5.fill(p5.color(64, 226, 160));
    p5.triangle(580, t2_y + 105, 650, t2_y, 720, t2_y + 105);

    p5.fill('grey');
    p5.rect(20, 345, 700, 345);

    p5.fill(255, 255, 255, 200);
    p5.image(img1, 800, 20, img1.width/3, img1.height/3);
    p5.image(img2, 800, 240, img1.width/3, img2.height/4.15);

    let elapsed = new Date() - startTime;

    t1_y += t1_f;
    if (elapsed > 300) c1_y += c1_f;
    if (elapsed > 600) s1_y += s1_f;
    if (elapsed > 900) c2_y += c2_f;
    if (elapsed > 1200) t2_y += t2_f;

    if(t1_y === 240) t1_f = -1; 
    if(c1_y === 295) c1_f = -1; 
    if(s1_y === 240) s1_f = -1; 
    if(c2_y === 295) c2_f = -1; 
    if(t2_y === 240) t2_f = -1; 

    if(t1_y === 120) t1_f = 1; 
    if(c1_y === 175) c1_f = 1; 
    if(s1_y === 120) s1_f = 1; 
    if(c2_y === 175) c2_f = 1; 
    if(t2_y === 120) t2_f = 1; 
  };

  return (
    <div>
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}
