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
import { AspectRatio } from "@mui/icons-material";
import "./style.css";

const RepoCards = ({ items }) => {
  console.log(items[4]);

  const handleClick = () => {};
  return (
    <>
      {items[4].name}
      {items.map((item) => {
        const index = items.indexOf(item);
        let description = "";
        const language =
          item.language === null
            ? "github"
            : JSON.stringify(item.language).toLowerCase().replace(/['"]+/g, "");

        if (item.description === null) {
          description = `find more info about my project on my GitHub account`;
        } else {
          return (description = item.description);
        }
        return (
          <a href={item.html_url} key={index}>
            <Card className="repoCard" sx={{ maxWidth: 350 }}>
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
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                Discover the GitHub repository or share with your friends
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
          </a>
        );
      })}
    </>
  );
};

export default RepoCards;
