import React from "react";
import Table from "react-bootstrap/Table";

const Languages = () => {
  return (
    <Table striped bordered hover size="sm">
      <tbody>
        <tr>
          <td>
            <img
              className="languageLogo"
              src="./images/language_logo/French.png"
            />
          </td>
          <td>Native speaker</td>
        </tr>
        <tr>
          <td>
            <img
              className="languageLogo"
              src="./images/language_logo/English.png"
            />
          </td>
          <td>Highly proficient - C1</td>
        </tr>
        <tr>
          <td>
            <img
              className="languageLogo"
              src="./images/language_logo/german.png"
            />
          </td>
          <td>Intermediate - B1/B2</td>
        </tr>
        <tr>
          <td>
            <img
              className="languageLogo"
              src="./images/language_logo/spanish.png"
            />
          </td>
          <td>Intermediate - B2</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Languages;
