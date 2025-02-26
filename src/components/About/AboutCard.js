import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Lorenzo Ricci </span>
            from <span className="purple"> Florence, Italy.</span>
            <br />
            I am currently pursuing a Master's degree in Computer Engineering at the Politecnico di Torino, specializing in Software Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              ♟️ Challenging myself in chess
            </li>
            <li className="about-activity">
              ⚽ I love playing football 
            </li>
            <li className="about-activity">
              ✈️ Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Follia..."{" "}
          </p>
          <footer className="blockquote-footer">LorenzoRicci</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
