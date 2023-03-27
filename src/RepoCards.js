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
  const projectList = items
    .filter((project) => {
      return project.description;
    })
    .filter((project) => project.description.includes("Project"));

  return (
    <>
      <div className="repoCardsContainer">
        {projectList?.map((item) => {
          const index = projectList.indexOf(item);
          const language =
            item.language === null
              ? "github"
              : JSON.stringify(item.language)
                  .toLowerCase()
                  .replace(/['"]+/g, "");

          return (
            <Card key={index} className="repoCard" sx={{ maxWidth: 350 }}>
              <CardHeader
                title={
                  <span
                    style={{
                      fontSize: 30,
                      fontFamily: "Arial",
                    }}
                  >
                    {item.name}
                  </span>
                }
                subheader={
                  <span
                    style={{
                      fontSize: 15,
                      fontFamily: "Arial",
                    }}
                  >
                    {item.created_at.toString().slice(0, 15)}
                  </span>
                }
              />
              <CardMedia
                component="img"
                height="400"
                image={require(`./images/logo-${language}.svg`)}
                alt={`${item.language}-logo`}
              />
              <CardContent>
                <Typography variant="body2" color="text.primary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ color: "#B9BABA" }}
                >
                  Discover the GitHub repository or share with your friends
                </Typography>{" "}
                <IconButton aria-label="GitHub repository">
                  <a
                    style={{
                      fontSize: 15,
                      fontFamily: "Arial",
                    }}
                    href={item.html_url}
                  >
                    {" "}
                    <GitHubIcon
                      sx={{
                        color: "#B9BABA",
                        ":hover": {
                          color: "#d6eaf8",
                          borderRadius: 5,
                        },
                      }}
                    />
                  </a>
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon
                    sx={{
                      color: "#B9BABA",
                      mt: 1,
                      ":hover": {
                        backgroundColor: "#d6eaf8",
                        color: "white",
                        borderRadius: 1,
                      },
                    }}
                  />
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
