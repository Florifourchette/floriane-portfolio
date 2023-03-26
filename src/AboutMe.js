import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from "@mui/system/Unstable_Grid/Grid";
import "./style.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Education from "./Education";
import Experiences from "./Experiences";
import Skills from "./Skills";
import Languages from "./Languages";
import Hobbies from "./Hobbies";
import "./images/small_logo/email.png";

const About_me = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={1}></Grid>
        <Grid item xs={5}>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <div className="contactContainer">
                <img
                  className="contactLogo"
                  src={require("./images/small_logo/email.png")}
                  alt="email logo"
                />
                <p className="contactParagraph">
                  floriane.michelat@outlook.com
                </p>
              </div>
              <div className="contactContainer">
                <img
                  className="contactLogo"
                  src={require("./images/small_logo/github.png")}
                  alt="Contact logo"
                />
                <p className="contactParagraph">Florifourchette</p>
              </div>
              <div className="contactContainer">
                <img
                  className="contactLogo"
                  src={require("./images/small_logo/linkedin.png")}
                  alt="Linkedin logo"
                />
                <p className="contactParagraph">Floriane Michelat</p>
              </div>
              <div className="contactContainer">
                <img
                  className="contactLogo"
                  src={require("./images/small_logo/phone.png")}
                  alt="Phone logo"
                />
                <p className="contactParagraph">+49 162 74 89 056</p>
              </div>
              <div className="contactContainer">
                <img
                  className="contactLogo"
                  src={require("./images/small_logo/home.png")}
                  alt="Home logo"
                />
                <p className="contactParagraph">
                  Hainer Weg 4<br />
                  60599 Frankfurt am Main
                </p>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <img
            id="photoCV"
            src={require("./images/photoCV.jpg")}
            alt="photo CV"
          />
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
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <p className="presentationAboutMe">
              Through 5 years of experience in Marketing I have shown relevant
              skills and curiosity for project management and IT. This is the
              reason why I recently decided to expand my knowledge and continue
              my career path in IT. I started to learn Javascript, PHP and
              Mendix by myself but decided to start a complete coding course
              since January in order to gain all the relevant skills to become a
              web developer.
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Tabs>
        <TabList>
          <Tab>Education</Tab>
          <Tab>Experiences</Tab>
          <Tab>Skills & Tools</Tab>
          <Tab>Languages</Tab>
          <Tab>Hobbies</Tab>
        </TabList>
        <TabPanel>
          <Education />
        </TabPanel>
        <TabPanel>
          <Experiences />
        </TabPanel>
        <TabPanel>
          <Skills />
        </TabPanel>
        <TabPanel>
          <Languages />
        </TabPanel>
        <TabPanel>
          <Hobbies />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default About_me;
