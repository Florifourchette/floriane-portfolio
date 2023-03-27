import React, { useEffect, useState } from "react";
import RepoCards from "./RepoCards";
import "./style.css";
import "react-tabs/style/react-tabs.css";
import AboutMe from "./AboutMe";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import CertificationsPage from "./CertificationsPage";

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
  return (
    <>
      <NavBar className="navbar" />
      <div className="body">
        <Routes>
          <Route path="/floriane-portfolio" element={<AboutMe />}></Route>
          <Route
            path="floriane-portfolio/projects"
            element={<RepoCards items={items} />}
          ></Route>
          <Route
            path="floriane-portfolio/certifications"
            element={<CertificationsPage />}
          ></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
