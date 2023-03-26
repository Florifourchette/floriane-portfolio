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
              src={require("./images/language_logo/French.png")}
              alt="French logo"
            />
          </td>
          <td>Native speaker</td>
        </tr>
        <tr>
          <td>
            <img
              className="languageLogo"
              src={require("./images/language_logo/English.png")}
              alt="English logo"
            />
          </td>
          <td>Highly proficient - C1</td>
        </tr>
        <tr>
          <td>
            <img
              className="languageLogo"
              src={require("./images/language_logo/german.png")}
              alt="German logo"
            />
          </td>
          <td>Intermediate - B1/B2</td>
        </tr>
        <tr>
          <td>
            <img
              className="languageLogo"
              src={require("./images/language_logo/spanish.png")}
              alt="Spanish logo"
            />
          </td>
          <td>Intermediate - B2</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Languages;
