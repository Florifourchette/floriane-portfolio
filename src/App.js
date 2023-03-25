import React, { useEffect, useState } from "react";
import RepoCards from "./RepoCards";
import "./style.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Florifourchette/repos").then(
      (response) => {
        response.json().then((data) => {
          const newData = data.map((item) => {
            item.created_at = new Date(item.created_at.slice(0, 10));
            return item;
          });
          setItems(newData.sort((a, b) => b.created_at - a.created_at));
        });
      }
    );
  }, []);
  console.log(items);
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>About me</Tab>
          <Tab>Projects</Tab>
          <Tab>Certifications</Tab>
        </TabList>
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>
            {" "}
            <div className="repoCardsContainer">
              <RepoCards items={items} />
            </div>
          </h2>
        </TabPanel>
        <TabPanel>Any content Certification</TabPanel>
      </Tabs>
    </>
  );
};

export default App;
