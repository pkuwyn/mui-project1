import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Lottie from "react-lottie";
import Button from "@material-ui/core/Button";
import { Link, useLocation } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
//icons
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

//local import

import desktopBackground from "../../../assets/background.jpg";
import mobileBackground from "../../../assets/mobileBackground.jpg";

const useStyles = makeStyles((theme) => ({
  callToActionBlock: {
    width: "100%",
    padding: "4rem",
    height: 800,
    backgroundImage: `url(${desktopBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",

    [theme.breakpoints.down("md")]: {
      height: 600,

      padding: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1rem",
      backgroundAttachment: "scroll",

      backgroundImage: `url(${mobileBackground})`,
    },
  },

  learnMoreButton: {
    ...theme.mixins.learnButton,
    height: 35,
    fontSize: 12,
  },

  estimateButton: {
    ...theme.typography.estimate,
    height: 50,
    borderRadius: 100,
    width: 200,
    textAlign: "center",
    fontSize: "1.25rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
    },
  },
}));

export default function InfoBlock(props) {
  const classes = useStyles();
  const theme = useTheme();

  //responsive
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid
      item
      container
      className={classes.callToActionBlock}
      alignContent="center"
    >
      <Grid
        item
        xs={12}
        sm
        container
        justify={matches ? "center" : "flex-start"}
        alignItems="center"
      >
        <div
          style={{
            maxWidth: 300,
            textAlign: matches ? "center" : "left",
          }}
        >
          <Typography variant="h4" color="primary" gutterBottom>
            Simple Software. Revolutionary Results.
          </Typography>

          <Typography
            variant="subtitle2"
            style={{
              color: "white",
            }}
            gutterBottom
          >
            Take advantage of the 21st Century.
          </Typography>

          <Button
            component={Link}
            to="/revolution"
            className={classes.learnMoreButton}
            color="primary"
          >
            Learn More<ArrowRightAltIcon></ArrowRightAltIcon>
          </Button>
        </div>
      </Grid>

      <Grid
        item
        xs={12}
        sm
        container
        justify={matches ? "center" : "flex-end"}
        alignItems="center"
      >
        <Button
          component={Link}
          to="/estimate"
          variant="contained"
          color="secondary"
          className={classes.estimateButton}
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
}
