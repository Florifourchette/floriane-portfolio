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
                  src="./images/small_logo/email.png"
                />
                <p className="contactParagraph">
                  floriane.michelat@outlook.com
                </p>
              </div>
              <div className="contactContainer">
                <img
                  className="contactLogo"
                  src="./images/small_logo/github.png"
                />
                <p className="contactParagraph">Florifourchette</p>
              </div>
              <div className="contactContainer">
                <img
                  className="contactLogo"
                  src="./images/small_logo/linkedin.png"
                />
                <p className="contactParagraph">Floriane Michelat</p>
              </div>
              <div className="contactContainer">
                <img
                  className="contactLogo"
                  src="./images/small_logo/phone.png"
                />
                <p className="contactParagraph">+49 162 74 89 056</p>
              </div>
              <div className="contactContainer">
                <img
                  className="contactLogo"
                  src="./images/small_logo/home.png"
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
          <img id="photoCV" src="./images/photoCV.jpg" />
          <div className="logo-container">
            <img
              className="ITlanguageLogo"
              src="./images/language_logo/JavaScript-logo.png"
            />
            <img
              className="ITlanguageLogo"
              src="./images/language_logo/react-logo.png"
            />
            <img
              className="ITlanguageLogo"
              src="./images/language_logo/css-logo.png"
            />
            <img
              className="ITlanguageLogo"
              src="./images/language_logo/html-logo.png"
            />
            <img
              className="ITlanguageLogo"
              src="./images/language_logo/sql-logo.png"
            />
            <img
              className="ITlanguageLogo"
              src="./images/language_logo/nodejs-logo.png"
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
