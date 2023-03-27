import React from "react";

const Languages = () => {
  return (
    <div className="languageTableContainer">
      <div className="languageTable">
        <tbody>
          <tr>
            <td className="flagColumn">
              <img
                className="languageLogo"
                src={require("./images/language_logo/French.png")}
                alt="French logo"
              />
            </td>
            <td className="levelColumn">Native speaker</td>
          </tr>
          <tr>
            <td className="flagColumn">
              <img
                className="languageLogo"
                src={require("./images/language_logo/English.png")}
                alt="English logo"
              />
            </td>
            <td className="levelColumn">Highly proficient - C1</td>
          </tr>
          <tr>
            <td className="flagColumn">
              <img
                className="languageLogo"
                src={require("./images/language_logo/german.png")}
                alt="German logo"
              />
            </td>
            <td className="levelColumn">Intermediate - B1/B2</td>
          </tr>
          <tr>
            <td className="flagColumn">
              <img
                className="languageLogo"
                src={require("./images/language_logo/spanish.png")}
                alt="Spanish logo"
              />
            </td>
            <td className="levelColumn">Intermediate - B2</td>
          </tr>
        </tbody>
      </div>
    </div>
  );
};

export default Languages;
