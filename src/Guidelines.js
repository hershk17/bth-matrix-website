import React from "react";
import { ListGroup } from "react-bootstrap";
import Footer from "./Footer";

export default function Guidelines() {
  return (
    <div>
      <h2>Web Usability Guidelines</h2>
      <ListGroup as="ol" numbered>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Homepage</div>
            Arguably the most important aspect of a website. It's the first
            thing users see when they visit a webpage. If users find the
            homepage confusing, they will likely leave the website. Home page
            should be designed to attract the user to further explore the
            website.
          </div>
        </ListGroup.Item>

        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Inner Page</div>
            This is the part where all of the content of the page resides. It is
            essential to create a logical flow of content which is organized
            using best practices. Splitting sections into containers, organizing
            data into tables, appropriate whitespacing to create an overall easy
            to use experience for the user.
          </div>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Background</div>
            The background can depict the tone of the website. A well suited
            background will enhance content consumption for the user. Should be
            set according to relative aesthetic with appropriate contrast ratio
            for readability.
          </div>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Layout</div>
            Content organization determins how easy it is for the user to
            understand the website's purpose. Should be designed to only include
            necessary or relevant information, effectively utilize whitespace,
            headings/titles, and provide links to background information instead
            of on the website.
          </div>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Navigation</div>
            Ease of navigation will help reduce the amount of time the user
            spends trying to find what they are looking for. Should be designed
            with an appropriate hierarchy, have readily accessible back buttons,
            navigation bar(s), and buttons and links in expected locations.
          </div>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Context</div>
            Context is crucial in presenting content in an easy to digest form.
            The user should look at a certain page or section and know exactly
            what the website is trying to convey. Should be designed to section
            all the content into pieces rather than continuous back-to-back
            information.
          </div>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Text</div>
            One of the most important aspects of a website. Text size, spacing,
            font style, font weight are all factors which contribute to the
            readability of a website. Should be sized and space appropriately
            with good contrast ratio to the background, be sized proper
            title-subtitle-content hierarchy levels, and not presented in large
            paragraph blocks.
          </div>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Multimedia</div>
            Images, Videos, and graphics can certainly enhance user experience.
            It can serve as a secondary means of communicating the message of
            the website to the user. Should be utilized sparingly to not
            overwhelm the user, be high quality, and relevant to content.
          </div>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Colours</div>
            Colours are essential in representing the tone and feel of the
            website. Attractive material design colours will give the website a
            modern feel. Should be utilized in complimentary sets with
            sufficient contrast ratios to account for general accessibility
            standards.
          </div>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Accessibility</div>
            Visuals are certainly important, but functionality is just as if not
            more important. The website should have labels for each element for
            users requiring screen reading software, have easy links to navigate
            the website, options to request help and support, be usable on
            devices with varying screen sizes, resolutions, and operating
            systems.
          </div>
        </ListGroup.Item>
      </ListGroup>
      <br /> <br /> <br /> <br /> <br /> <br />
      <Footer datetime="28/01/2022, 07:17:52 PM"/>
    </div>
  );
}
