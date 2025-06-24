import React from "react";
import { Table } from "react-bootstrap";
import "./RobotTable.css";

const RobotTable = ({ robots, onSelectRobot, language, selectedRobotId }) => {
  return (
    <div className="robot-table-container">
      <Table striped bordered hover responsive className="robot-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>{language === "es" ? "Nombre" : "Name"}</th>
            <th>{language === "es" ? "Modelo" : "Model"}</th>
            <th>{language === "es" ? "Empresa Fabricante" : "Manufacturer"}</th>
          </tr>
        </thead>
        <tbody>
          {robots.map((robot) => (
            <tr
              key={robot.id}
              onClick={() => onSelectRobot(robot)}
              className={selectedRobotId === robot.id ? "selected-row" : ""}
            >
              <td>{robot.id}</td>
              <td className="robot-name">{robot.name}</td>
              <td>{robot.model}</td>
              <td>{robot.company}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default RobotTable;
