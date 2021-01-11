import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Lottie from "react-lottie";
import Button from "@material-ui/core/Button";
import { Link, useLocation } from "react-router-dom";

//animations
import landingAnimation from "../../../animations/landinganimation/data";
import learningAnimation from "../../../animations/learning/data.json";

//icon
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: "2rem",
  },
  heroButton: {
    borderRadius: 100,
    textTransform: "none",
  },
  estimate: {
    color: "white",
  },
  learn: {},
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
    <Grid item container direction="row">
      <Grid item xs={6} container justify="center" alignContent="center">
        <div className={classes.title}>
          Bringing West Coast Technology to the Midwest
        </div>
        <Grid container justify="center" spacing={4}>
          <Grid item>
            <Button
              component={Link}
              to="/estimate"
              variant="contained"
              color="secondary"
              className={[classes.heroButton, classes.estimate]}
            >
              Free Estimate
            </Button>
          </Grid>
          <Grid item>
            <Button
              component={Link}
              to="/estimate"
              className={[classes.heroButton, classes.learn]}
              color="primary"
            >
              Learn More<ArrowRightAltIcon></ArrowRightAltIcon>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Lottie options={defaultOptions} />
      </Grid>
    </Grid>
  );
}
