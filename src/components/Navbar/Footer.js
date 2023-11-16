import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
const Footer = () => {
  return (
    <AppBar
      position="relative"
      color="inherit"
      sx={{ top: "200px", bottomMargin: "25px" }}
    >
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            margin: "auto",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="Secondary"
            mx={2}
          >
            Contact me : +91 9315207665
          </Typography>
          thakurarvindkr10@gmail.com
          <Box>
            <IconButton
              size="large"
              color="inherit"
              href="https://instagram.com"
              target="blank"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
              href="https://github.com/Arvindkr123"
              target="blank"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.linkedin.com/in/arvind-kumar-015759213"
              target="blank"
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
          <Typography noWrap component="div" variant="h7">
            @ All Right Reserved
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
    // {/* </AppBar> */}
  );
};

export default Footer;
