import React from "react";
import Table from "react-bootstrap/Table";

const Hobbies = () => {
  return (
    <div className="text-center d-flex justify-content-center">
      <Table size="sm" className="w-50">
        <tbody>
          <tr>Boulder</tr>
          <tr>Psychology</tr>
          <tr>Programming</tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Hobbies;
