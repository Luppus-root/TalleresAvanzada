import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./RobotDetail.css";

const RobotDetail = ({ robot, language }) => {
  return (
    <div className="robot-detail-container">
      <Card className="robot-card">
        <div className="image-container">
          <Card.Img variant="top" src={robot.image} alt={robot.name} />
        </div>
        <Card.Body>
          <Card.Title className="robot-title">{robot.name}</Card.Title>
          <ListGroup variant="flush" className="robot-details">
            <ListGroup.Item>
              <strong>{language === "es" ? "Modelo:" : "Model:"}</strong>{" "}
              {robot.model}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>
                {language === "es" ? "Año de fabricación:" : "Year:"}
              </strong>{" "}
              {robot.year}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>{language === "es" ? "Procesador:" : "CPU:"}</strong>{" "}
              {robot.cpu}
            </ListGroup.Item>
            <ListGroup.Item className="personality">
              <strong>
                {language === "es" ? "Personalidad:" : "Personality:"}
              </strong>{" "}
              {robot.features}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RobotDetail;
