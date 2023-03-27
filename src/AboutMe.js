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
      <div className="presentation_paragraph">
        <p>
          Learn more me. I have experience in working with the IT department but
          also in leading projects such as the launch of a new website. For the
          past few months, I have been training myself in a bootcamp at WBS
          School in order to gain relevant knowledge in IT. Javascript, React,
          NodeJS are some skills I've gained but there are also many more so
          don't hesitate in contacting me if you are curious about them!
        </p>
      </div>

      <Grid container spacing={2} sx={{ mt: 3, ml: 10, mr: 5 }}>
        <Grid item xs={2} sx={{ mt: 6 }}>
          <div className="contactContainer">
            <img
              className="contactLogo"
              src={require("./images/small_logo/email.png")}
              alt="email logo"
            />
            <p className="contactParagraph">floriane.michelat@outlook.com</p>
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
        <Grid xs={9} sx={{ mr: 2, ml: 5 }}>
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
            <TabPanel className="languageTab">
              <Languages />
            </TabPanel>
            <TabPanel>
              <Hobbies />
            </TabPanel>
          </Tabs>
        </Grid>
      </Grid>
    </>
  );
};

export default About_me;
