import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>

      {/* Calendario per l'account lorericci */}
      <Col md={6} style={{ textAlign: "center" }}>
        <h2>lorericci</h2>
        <GitHubCalendar
          username="lorericci"
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
        />
      </Col>

      {/* Calendario per l'account LorenzoRicci26 */}
      <Col md={6} style={{ textAlign: "center" }}>
        <h2>LorenzoRicci26</h2>
        <GitHubCalendar
          username="LorenzoRicci26"
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
        />
      </Col>
    </Row>
  );
}

export default Github;
