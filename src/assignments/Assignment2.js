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
      <br />
      <table className="table">
        <thead>
          <tr className="table-light">
            <th scope="col">File Name</th>
            <th scope="col">Time</th>
            <th scope="col">Script</th>
            <th scope="col">Instructions</th>
            <th scope="col">Onscreen</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>title.mp4</td>
            <td>00:00-00:18</td>
            <td>
              Hi, my name is Harsh, and I will be presenting my BTH645
              Assignment 2. In this video, I will be promoting a wireless gaming
              mouse as a new and upcoming product. So, let's get started:
            </td>
            <td>Upbeat tone</td>
            <td>Title screen with name, equipment and editing programs used</td>
          </tr>
          <tr>
            <td>product.mp4</td>
            <td>00:19-00:28</td>
            <td>
              This is the G wireless gaming mouse; one of the best
              performance-oriented and budget friendly gaming mice that you can
              buy.
            </td>
            <td>Emphasize capability of product</td>
            <td>
              Panning shot of product on muted background. Make product stand
              out
            </td>
          </tr>
          <tr>
            <td>problem.mp4</td>
            <td>00:29-00:37</td>
            <td>
              Are you tired of wires getting in your way? Or do you find it
              difficult to use mice designed for right-handed people?
            </td>
            <td>Realistic scenario, address common frustrations</td>
            <td>Examples of common problem with similar products</td>
          </tr>
          <tr>
            <td>solution.mp4</td>
            <td>00:38-00:43</td>
            <td>
              Well then, the G mouse has a lot to offer without breaking the
              bank.
            </td>
            <td>
              Lighthearted suggestion of the product as the solution to the
              problem
            </td>
            <td>
              Knock away similar product and bring main product into frame, give
              a thumbs up to match the tone
            </td>
          </tr>
          <tr>
            <td>info.mp4</td>
            <td>00:44-01:00</td>
            <td>
              Weighing in at just 84 grams, along with 6 fully reprogrammable
              buttons, an ambidextrous design, on the fly sensitivity switching,
              and the latest and greatest optical sensor, say goodbye to
              limitations and maximize your accuracy.
            </td>
            <td>
              List out main features, maintain an informative tone, drive home
              the benefits of using the product
            </td>
            <td>
              360-degree view of product with dynamically appearing list of
              features on screen
            </td>
          </tr>
          <tr>
            <td>receiver.mp4</td>
            <td>01:01-01:14</td>
            <td>
              It comes with a 2.4Ghz wireless receiver in the box. It uses a
              USB-A interface which makes it easy to connect your peripheral to
              almost any computer without routing any cables.
            </td>
            <td>Clearly explain ease of use of product</td>
            <td>
              Product in background, close-up of accessory should be shown along
              with pointers of features
            </td>
          </tr>
          <tr>
            <td>plugin.mp4</td>
            <td>01:15-01:20</td>
            <td>
              Just plug the receiver into your computer, wait a moment for the
              drivers to install, and you're good to go!
            </td>
            <td>Reinforce ease of use of product, also demonstrate</td>
            <td>Close up on setting up product for use</td>
          </tr>
          <tr>
            <td>software.mp4</td>
            <td>01:21-01:33</td>
            <td>
              The G Customization software offers various quality of life
              features such as fine tuning of DPI sensitivity levels, custom
              power modes and polling rates, as well as manual assignments of
              button commands.
            </td>
            <td>
              List out main features, use keywords to highlight important
              technical specifications
            </td>
            <td>
              Screen recording of software being used and options being selected
            </td>
          </tr>
          <tr>
            <td>hardware.mp4</td>
            <td>01:34-01:45</td>
            <td>
              The mouse is powered by a double A battery which is included in
              the box. The mouse also has storage room for your receiver to
              carry on the go.
            </td>
            <td>
              Assure for a hassle-free customer experience and demonstrate
              convenient use cases
            </td>
            <td>Product being assembled along with its accessories</td>
          </tr>
          <tr>
            <td>longevity.mp4</td>
            <td>01:46-01:57</td>
            <td>
              With a lifespan of up to 10 million clicks per button and a
              battery life of up to 9 months, rest assured that this is the one
              and only gaming mouse you will ever need.
            </td>
            <td>
              Reinforce idea of longevity by providing real world statistics.
            </td>
            <td>Play footage of product being utilized</td>
          </tr>
          <tr>
            <td>usage.mp4</td>
            <td>01:58-02:20</td>
            <td>
              Using the mouse is simply a delight! The speed of the sensor and
              ergonomic design will help you hit your targets consistently and
              comfortably over long sessions.
            </td>
            <td>Explain pros of using the mouse in a cheerful tone</td>
            <td>
              Play b-roll footage from a different perspective, also showcase
              success using mouse
            </td>
          </tr>
          <tr>
            <td>purchasing.mp4</td>
            <td>02:21-02:31</td>
            <td>
              The G mouse starts at just $60 CAD and releases worldwide on the
              1st of August 2022. Preorders are now available on the official G
              website.
            </td>
            <td>
              Clearly specify price, followed by release date and how customers
              can purchase the product
            </td>
            <td>
              Play b-roll footage of product in an attractive shot in the
              background
            </td>
          </tr>
          <tr>
            <td>incentive.mp4</td>
            <td>02:32-02:39</td>
            <td>
              Be sure to sign up for our newsletter for a chance to win a
              limited-edition purple G mouse.
            </td>
            <td>
              Incentivize customers to sign up for newsletters to enter
              giveaways
            </td>
            <td>Showcase a high-quality image of limited-edition product</td>
          </tr>
          <tr>
            <td>oneliner.mp4</td>
            <td>02:40-02:47</td>
            <td>The G wireless mouse, your next gaming mouse.</td>
            <td>
              “Sell” the product in one line, confident and climactic tone
            </td>
            <td>
              Play b-roll footage of product in background, place focus on
              statement
            </td>
          </tr>
          <tr>
            <td>outro.mp4</td>
            <td>02:48-03:02</td>
            <td>
              Okay well I hope that was fun to watch and that I was able to
              convince you to buy the G mouse. But that's all from me, thank you
              for watching my presentation and have a great day!
            </td>
            <td>
              Conclude the presentation with a positive tone and a lighthearted
              joke
            </td>
            <td>
              Show outro screen thanking viewer for watching and list references
              used
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <h3>Reflection</h3>
      <p>
        I learned a lot of things from working on this assignment. Primarily, I
        got a ton more experience with video editing. Once again, I used a new
        editor for this project, called DaVinci Resolve 17. After having spent a
        few hours editing my presentation, I can safely say that this was the
        best editor I have used so far and something I will probably stick to
        for a while. For the most part, due to limited resources on hand, I was
        restricted to creating a video from home using my smartphone, which is
        the Samsung Galaxy S9+. I also used an old DSLR; Canon EOS 1300D for a
        few shots but since it is a more portrait image focused camera, the
        video output was not as impressive compared to my smartphone. Although
        it was useful in getting some stable close-up shots. To create a
        promotional presentation, I looked at the things I had on hand which had
        been a great purchase for my use cases. I ultimately decided to use my
        wireless gaming mouse as the focus for my presentation of an upcoming
        product from a company called G. Though I was also interested in
        creating a tour video of Seneca College since my smartphone camera has
        some great digital stabilization features. However, I live quite far
        away from the Newnham campus and I was unable to make time for the
        extensive commute required. To research my product of focus then, I used
        the official company's website to get my information, which is Logitech.
        I also watched some tutorials on how to record b-roll shots and mix
        multiple video and audio clips together. Overall, it was a fun
        experience working on this assignment but I do wish I had access to more
        tools and resources so I could have created something of even higher
        quality.
      </p>
      <br />
      <br />
      <br />
      <br />
      <Footer datetime="10/04/2022, 10:11:04 PM" />
    </div>
  );
}
