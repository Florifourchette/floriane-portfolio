import React from "react";
import Table from "react-bootstrap/Table";

const Education = () => {
  return (
    <Table striped bordered hover size="sm">
      <tbody>
        <tr>
          <td>Jan – May 2023</td>
          <td>Full-Stack Web & App development bootcamp</td>
          <td>WBS Coding School</td>
          <td>
            Intensive course to become a certified full-stack web developer,
            Learning Javascript, React, SQL, NodeJS
          </td>
        </tr>
        <tr>
          <td>2014 - 2018</td>
          <td>Master’s degree in Management</td>
          <td>ICN Business School</td>
          <td>Major: Marketing</td>
        </tr>
        <tr>
          <td>2011 – 2014</td>
          <td>
            Preparatory class for the highest ranked French Business School
          </td>
          <td>Carnot High School</td>
        </tr>
        <tr>
          <td>2011</td>
          <td>Baccalaureate Scientific Section</td>
          <td>Nodier High School</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Education;
