import React from "react";
import Card from "react-bootstrap/Card";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Greetings, I am <span className="purple">Shivoham Angal</span>.
          
            I am currently pursuing a Master's in Computer Science at the <span className="purple">University of Southern California</span>.      
            <br></br>
            Beyond the realm of academics, I am passionate about exploring innovative solutions and have a knack for problem-solving. 
            Whether it's something that I have worked with or something completely new to me, I thrive on the challenges that technology presents.
            My commitment to continuous learning is reflected in my active participation in extracurricular activities, showcasing not just technical skills but also effective collaboration and communication. 
            <br></br>
            As I navigate through the dynamic landscape of computer science, my aim is to contribute meaningfully to the ever-evolving world of technology.
            <br></br>
            Switching gears, here's a glimpse into some of my hobbies:
          </p>
          <ul>
            <li className="about-activity">
              <MdKeyboardDoubleArrowRight /> Skateboarding
            </li>
            <li className="about-activity">
              <MdKeyboardDoubleArrowRight /> Reading Novels and Manga
            </li>
            <li className="about-activity">
              <MdKeyboardDoubleArrowRight /> Gaming
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "There is no light for those who do not know darkness"{" "}
          </p>
          <footer className="blockquote-footer">Takuan, Vagabond</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
