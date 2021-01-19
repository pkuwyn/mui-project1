import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import Lottie from "react-lottie";

//icons
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

//local assets
import lightbulb from "../../../assets/bulb.svg";
import stopWatch from "../../../assets/stopwatch.svg";
import cash from "../../../assets/cash.svg";

//data

const useStyles = makeStyles((theme) => ({
  animationContainer: {
    marginTop: "5rem",
  },
  text: {
    color: theme.palette.common.grey,
  },
  despText: {
    maxWidth: "50%",
    textAlign: "center",

    [theme.breakpoints.down("sm")]: {
      maxWidth: "70%",
    },
  },
  lottieContainer: {
    maxWidth: "50%",

    margin: "0 auto 3rem auto",

    [theme.breakpoints.down("sm")]: {
      maxWidth: "70%",
    },
  },
}));

export default function CenteredAnimationBlock({
  data: { title, paragraph, animation },
}) {
  const classes = useStyles();

  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      item
      container
      className={classes.animationContainer}
      justify="center"
      alignItems="center"
      direction="column"
    >
      <Grid item className={classes.lottieContainer}>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: animation,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
        />
      </Grid>
      <Grid item className={classes.despText}>
        <Typography variant="h4" color="primary" gutterBottom>
          {title}
        </Typography>
        {paragraph.map((content) => (
          <Typography
            key={content}
            variant="body1"
            paragraph
            className={classes.text}
          >
            {content}
          </Typography>
        ))}
      </Grid>
    </Grid>
  );
}
