import React, { useState } from "react";
import DocumentsList from "./DocumentsList";
import { Card } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";

const Certifications = () => {
  const certification = DocumentsList.filter(
    (item) => item.type !== "certification"
  );

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <h2 className="certification_page_h2">My references</h2>
      <div className="certificationsCards">
        {certification.map((item) => {
          const index = certification.indexOf(item);
          console.log(`${item.logo}`);
          return (
            <a href={item.pdf} download className="certificationLink">
              <Card
                key={index}
                className="repoCard"
                sx={{ maxWidth: 330 }}
                aria-owns={open ? "mouse-over-popover" : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
              >
                <CardMedia
                  component="img"
                  height="150"
                  image={require(`${item.logo}`)}
                  alt={`${item.name} logo`}
                />
                <CardContent>
                  <Typography variant="body2" color="text.primary">
                    {item.name}
                  </Typography>
                </CardContent>
              </Card>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Certifications;
