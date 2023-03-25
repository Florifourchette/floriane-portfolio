import React, { useEffect, useState } from "react";
import RepoCards from "./RepoCards";
import "./style.css";
import "react-tabs/style/react-tabs.css";
import About_me from "./About_me";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Certifications from "./Certifications";

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
      <NavBar />
      <Routes>
        <Route path="/" element={<About_me />}></Route>
        <Route path="/projects" element={<RepoCards items={items} />}></Route>
        <Route path="/certifications" element={<Certifications />}></Route>
      </Routes>
    </>
  );
};

export default App;
