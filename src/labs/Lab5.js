import React from "react";
import Footer from "../Footer";
import MySketch from "./sketch";
import SyntaxHighLighter from "react-syntax-highlighter";
export default function Lab5(props) {
  return (
    <div>
      <h3>My Sketch</h3>
      <br />
      <MySketch />
      <br />
      <br />
      <h3>Reflection</h3>
      <p>
        I learned quite a few things about the p5.js library after doing this
        lab. I found that it is very powerful and offers a lot of functionality
        and flexiblity. Originally, I wanted to create a single complex object
        which was composed of various other shapes. I changed my mind later on
        because I wanted to try a simple motion animation and a complex shape
        would require maintaining a ton of coordinate variables. I created 5
        colourful shapes then made it so they had a perpetual bouncing
        animation. I built this using an internal timer which tells each shape
        to move along its y axis until it reaches an endpoint, after which its
        direction of motion is reversed. This allowed me to simulate a bouncing
        animation for the shapes with different timings. I could also make it so
        each shape has a different speed at which they move i.e. fall and bounce
        back up. There are a lot of customization and tweaking options possible
        and what I have implemented is still very simple compared to what the
        library offers. One issue I have is that it is a lot of manual work to
        create something attractive. I was constantly adjusting coordinates to
        move something a few inches to one place or another. I think ideally a
        GUI which allows manually creating some elements would allow me to
        utilize the library to a greater extent. The main sources I used for
        finding the syntax, and general functionality information was from the
        official p5js.org website as well as a few tutorials on Geeks4Geeks.
        Overall, it was fun working on this lab and I can definitely imagine
        some creative use cases for this library in my future web projects.
      </p>
      <br />
      <br />
      <h3>sketch.js:</h3>
      <SyntaxHighLighter language="javascript">
        {`import React from "react";\nimport Sketch from "react-p5";\n\nlet t1_y = 120, c1_y = 175, s1_y = 120, c2_y = 175, t2_y = 120;\nlet t1_f = 1, c1_f = 1, s1_f = 1, c2_f = 1, t2_f = 1;\nlet startTime;\nlet img1, img2;\n\nexport default function MySketch(props) {\n    const setup = (p5, canvasParentRef) => {\n        p5.createCanvas(1050, 380).parent(canvasParentRef);\n        startTime = new Date();\n        img1 = p5.loadImage('/assets/img/basketball.jpg');\n        img2 = p5.loadImage('/assets/img/shapes.webp');\n    };\n\n    const draw = (p5) => {\n        p5.background(0);\n        p5.fill('white');\n        p5.stroke(126);\n        p5.line(430,45,750,45);\n        p5.line(750,0,750,380);\n        \n        p5.noStroke();\n        p5.textSize(28);\n        p5.textFont('Comic Sans MS');\n        \n        p5.fill('darkgrey');\n        p5.text('p5.js demo - Bouncing Shapes!', 20, 40)\n        p5.fill(255, 255, 255, 50);\n        p5.text('p5.js demo - Bouncing Shapes!', 20, 68)\n        p5.fill(0, 102, 153);\n        \n        p5.noStroke();\n        \n        p5.fill(p5.color(64, 226, 160));\n        p5.triangle(20, t1_y + 105, 90, t1_y, 160, t1_y + 105);\n        \n        p5.fill(255, 102, 102);\n        p5.ellipse(230, c1_y, 105);\n        \n        p5.fill(p5.color(124, 178, 232));\n        p5.rect(320, s1_y, 105);\n        \n        p5.fill(255, 102, 102);\n        p5.ellipse(515, c2_y, 105);\n        \n        p5.fill(p5.color(64, 226, 160));\n        p5.triangle(580, t2_y + 105, 650, t2_y, 720, t2_y + 105);\n        \n        p5.fill('grey');\n        p5.rect(20, 345, 700, 345);\n        \n        p5.fill(255, 255, 255, 200);\n        p5.image(img1, 800, 20, img1.width/3, img1.height/3);\n        p5.image(img2, 800, 240, img1.width/3, img2.height/4.15);\n        \n        let elapsed = new Date() - startTime;\n        \n        t1_y += t1_f;\n        if (elapsed > 300) c1_y += c1_f;\n        if (elapsed > 600) s1_y += s1_f;\n        if (elapsed > 900) c2_y += c2_f;\n        if (elapsed > 1200) t2_y += t2_f;\n        \n        if(t1_y === 240) t1_f = -1; \n        if(c1_y === 295) c1_f = -1; \n        if(s1_y === 240) s1_f = -1; \n        if(c2_y === 295) c2_f = -1; \n        if(t2_y === 240) t2_f = -1; \n        \n        if(t1_y === 120) t1_f = 1; \n        if(c1_y === 175) c1_f = 1; \n        if(s1_y === 120) s1_f = 1; \n        if(c2_y === 175) c2_f = 1; \n        if(t2_y === 120) t2_f = 1; \n    };\n\n    return (\n        <div>\n            <Sketch setup={setup} draw={draw} />\n        </div>\n    );\n}`}
      </SyntaxHighLighter>
      <br />
      <br />
      <br />
      <br />
      <Footer datetime="02/04/2022, 05:09:33 PM" />
    </div>
  );
}
