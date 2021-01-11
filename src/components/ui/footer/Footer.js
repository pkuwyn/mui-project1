import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";

//icon
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

//local import
import footerAdornment from "../../../assets/Footer Adornment.svg";
import { footLinkConfig } from "./footLinkConfig";

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "relative",
    width: "100%",
    backgroundColor: theme.palette.common.blue,
  },

  adornment: {
    width: "25em",
    display: "block",
    [theme.breakpoints.down("md")]: {
      width: "20em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  gridItem: {
    margin: "2rem 1rem 0rem 0rem",
    // minWidth: 100,
    marginTop: "2rem",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  socialMediaContainer: {
    position: "absolute",
    bottom: 0,
  },

  socialIconButton: {
    marginLeft: "0.5rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0",
    },
  },
  socialIcon: {
    width: "2rem",
    height: "2rem",
    fill: "white",

    [theme.breakpoints.down("xs")]: {
      width: "1.5rem",
      height: "1.5rem",
      marginLeft: "0",
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const theme = useTheme();
  console.log(theme.breakpoints.down("md"));
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container className={classes.mainContainer} justify="center">
          {footLinkConfig.map((links) => (
            <Grid
              container
              item
              direction="column"
              key={links[0].label}
              xs={links[0].label === "Services" ? 2 : 1}
              spacing={2}
              className={classes.gridItem}
            >
              {links.map(({ label, path }) => (
                <Grid
                  item
                  className={classes.link}
                  key={label}
                  component={Link}
                  to={path}
                >
                  {label}
                </Grid>
              ))}
            </Grid>
          ))}
        </Grid>
      </Hidden>
      <img
        src={footerAdornment}
        alt="foot adornment"
        className={classes.adornment}
      />
      {/* <div className={classes.socialMedia}>
        <IconButton aria-label="twitter">
          <TwitterIcon />
        </IconButton>
        <IconButton aria-label="ins">
          <InstagramIcon />
        </IconButton>
        <IconButton aria-label="fb">
          <FacebookIcon />
        </IconButton>
      </div> */}

      <Grid
        container
        className={classes.socialMediaContainer}
        justify="flex-end"
      >
        {[TwitterIcon, InstagramIcon, FacebookIcon].map((SocialIcon, index) => (
          <Grid item key={index}>
            <IconButton
              component="a"
              href="/"
              className={classes.socialIconButton}
            >
              <SocialIcon className={classes.socialIcon} />
            </IconButton>
          </Grid>
        ))}
      </Grid>
    </footer>
  );
}
