import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Lottie from "react-lottie";
import Button from "@material-ui/core/Button";
import { Link, useLocation } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

//animations
import landingAnimation from "../../../animations/landinganimation/data";
import learningAnimation from "../../../animations/learning/data.json";

//icon
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const useStyles = makeStyles((theme) => ({
  heroContainer: {
    marginTop: "2rem",
  },
  contentContainer: {
    padding: "1rem",
  },
  title: {
    // marginBottom: "2rem",
    lineHeight: 2,
  },
  heroButton: {
    borderRadius: 100,
    textTransform: "none",
    minWidth: 140,
    height: 35,
  },
  estimate: {
    ...theme.typography.estimate,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  learn: {
    borderWidth: 2,
  },
  lottieContainer: {
    marginLeft: "5%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "21rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2rem",
    },
  },
}));

export default function HeroBlock(props) {
  const classes = useStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: landingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid
      item
      container
      direction="row"
      className={classes.heroContainer}
      justify="flex-end"
    >
      <Grid
        sm
        item
        container
        alignContent="center"
        justify="center"
        className={classes.contentContainer}
      >
        <Typography
          className={classes.title}
          variant="h2"
          color="primary"
          align="center"
          paragraph
        >
          Bringing West Coast Technology to the Midwest
        </Typography>
        <Grid container justify="center" spacing={4}>
          <Grid item>
            <Button
              component={Link}
              to="/estimate"
              variant="contained"
              color="secondary"
              className={`${classes.heroButton} ${classes.estimate}`}
            >
              Free Estimate
            </Button>
          </Grid>
          <Grid item>
            <Button
              component={Link}
              to="/services"
              className={`${classes.heroButton} ${classes.learn}`}
              color="primary"
            >
              Learn More<ArrowRightAltIcon></ArrowRightAltIcon>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm className={classes.lottieContainer}>
        <Lottie options={defaultOptions} />
      </Grid>
    </Grid>
  );
}
