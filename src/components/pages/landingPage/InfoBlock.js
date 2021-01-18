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

import infoBackground from "../../../assets/infoBackground.svg";

const infoData = [
  {
    title: "About Us",
    subTitle: "Let’s get personal.",
    path: "/about",
  },
  {
    title: "Contact Us",
    subTitle: "Say hello! 👋🏻",
    path: "/contact",
  },
];

const useStyles = makeStyles((theme) => ({
  infoBlock: {
    // ...theme.mixins.blockMargin,
    padding: "4rem",
    width: "100%",
    height: 800,
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      padding: "2rem",
      height: 600,
    },
  },
  learnMoreButton: {
    ...theme.mixins.learnButton,
    height: 35,
    fontSize: 12,
    borderColor: "white",
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
      className={classes.infoBlock}
      alignItems="center"
      alignContent="space-around"
    >
      {infoData.map(({ title, subTitle, path }, index) => (
        <Grid
          key={title}
          item
          xs={12}
          sm
          style={{
            textAlign: matches ? "center" : index % 2 === 0 ? "left" : "right",
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            style={{
              color: "white",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
            style={{
              color: "white",
            }}
          >
            {subTitle}
          </Typography>
          <Button
            component={Link}
            to={path}
            className={classes.learnMoreButton}
            style={{
              color: "white",
            }}
          >
            Learn More<ArrowRightAltIcon></ArrowRightAltIcon>
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}
