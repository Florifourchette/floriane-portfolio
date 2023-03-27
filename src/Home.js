import { Grid } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <p className="presentationAboutMe">
          Through 5 years of experience in Marketing I have shown relevant
          skills and curiosity for project management and IT. This is the reason
          why I recently decided to expand my knowledge and continue my career
          path in IT. I started to learn Javascript, PHP and Mendix by myself
          but decided to start a complete coding course since January in order
          to gain all the relevant skills to become a web developer.
        </p>
      </Grid>
      <Grid item xs={2} sx={{ border: "solid green" }}>
        <img id="photoCV" src={require("./images/photoCV.jpg")} alt="CV" />
        <div className="logo-container">
          <img
            className="ITlanguageLogo"
            src={require("./images/language_logo/JavaScript-logo.png")}
            alt="Javascript logo"
          />
          <img
            className="ITlanguageLogo"
            src={require("./images/language_logo/react-logo.png")}
            alt="react logo"
          />
          <img
            className="ITlanguageLogo"
            src={require("./images/language_logo/css-logo.png")}
            alt="css logo"
          />
          <img
            className="ITlanguageLogo"
            src={require("./images/language_logo/html-logo.png")}
            alt="html logo"
          />
          <img
            className="ITlanguageLogo"
            src={require("./images/language_logo/sql-logo.png")}
            alt="SQL logo"
          />
          <img
            className="ITlanguageLogo"
            src={require("./images/language_logo/nodejs-logo.png")}
            alt="Node logo"
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default Home;
