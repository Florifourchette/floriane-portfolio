import React, { useEffect, useState } from "react";
import RepoCards from "./RepoCards";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import "./style.css";

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
    <div className="repoCardsContainer">
      <RepoCards items={items} />
    </div>
  );
};

export default App;
