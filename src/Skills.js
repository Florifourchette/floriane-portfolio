import React from "react";
import Table from "react-bootstrap/Table";

const Skills = () => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Programming Skills</th>
          <th>Tools</th>
          <th>Soft Skills</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>JavaScript</td>
          <td>Mendix</td>
          <td>Intercultural Comunication</td>
        </tr>
        <tr>
          <td>React</td>
          <td>Wordpress</td>
          <td>Project Management</td>
        </tr>
        <tr>
          <td>NodesJS</td>
          <td>Ahrefs</td>
          <td>Adaptability</td>
        </tr>
        <tr>
          <td>CSS</td>
          <td>Google Ads</td>
          <td></td>
        </tr>
        <tr>
          <td>HTML</td>
          <td>Google Analytics</td>
          <td></td>
        </tr>
        <tr>
          <td>SQL</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Skills;
