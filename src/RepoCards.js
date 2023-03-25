import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./style.css";

const RepoCards = ({ items }) => {
  console.log(items[4]);

  return (
    <>
      <div className="repoCardsContainer">
        {items?.map((item) => {
          const index = items.indexOf(item);
          let description = "";
          const language =
            item.language === null
              ? "github"
              : JSON.stringify(item.language)
                  .toLowerCase()
                  .replace(/['"]+/g, "");

          if (item.description === null) {
            description = `find more info about my project on my GitHub account`;
          } else {
            description = item.description;
          }
          return (
            <Card key={index} className="repoCard" sx={{ maxWidth: 350 }}>
              <CardHeader
                title={item.name}
                subheader={item.created_at.toString().slice(0, 15)}
              />
              <CardMedia
                component="img"
                height="400"
                image={`./images/logo-${language}.svg`}
                alt={`${item.language}-logo`}
              />
              <CardContent>
                <Typography variant="body2" color="text.primary">
                  {description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Typography variant="body2" color="text.secondary">
                  Discover the GitHub repository or share with your friends
                </Typography>{" "}
                <IconButton aria-label="GitHub repository">
                  <a href={item.html_url}>
                    {" "}
                    <GitHubIcon />
                  </a>
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default RepoCards;
