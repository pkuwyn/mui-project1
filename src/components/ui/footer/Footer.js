import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

//local import
import footerAdornment from "../../../assets/Footer Adornment.svg";
import { footLinkConfig } from "./footLinkConfig";

const useStyles = makeStyles((theme) => ({
  footer: {
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
    margin: "2rem 2rem 0rem 2rem",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const theme = useTheme();
  console.log(theme.breakpoints.down("md"));
  return (
    <footer className={classes.footer}>
      <Grid
        container
        className={classes.mainContainer}
        justify="center"
        // spacing={3}
      >
        {footLinkConfig.map((links) => (
          <Grid
            container
            item
            direction="column"
            key={links[0].label}
            xs={1}
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
      <img
        src={footerAdornment}
        alt="foot adornment"
        className={classes.adornment}
      />
    </footer>
  );
}
