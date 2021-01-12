import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Lottie from "react-lottie";
import Button from "@material-ui/core/Button";
import { Link, useLocation } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

//icons

//local import

const servicesConfig = [
  {
    title: "Custom Software Development",
    subTitle: "Save Energy. Save Time. Save Money.",
    desp: "Complete digital solutions, from investigation to celebration.",
    path: "/customsoftware",
    iconImage: "",
  },
  {
    title: "iOS/Android App Development",
    subTitle: "Extend Functionality. Extend Access. Increase Engagement.",
    desp:
      "Integrate your web experience or create a standalone app with either mobile platform.",
    path: "/mobileapps",
    iconImage: "",
  },
  {
    title: "Website Development",
    subTitle: "Reach More. Discover More. Sell more.",
    desp: "Optimized for Search Engines, built for speed.",
    path: "/websites",
    iconImage: "",
  },
];
const useStyles = makeStyles((theme) => ({
  serviceContainer: {},
}));

export default function ServicesBlock(props) {
  const classes = useStyles();
  return (
    <>
      {servicesConfig.map(
        ({ title, subTitle, desp, path, iconImage }, index) => (
          <Grid
            item
            container
            direction="row"
            className={classes.serviceContainer}
          >
            <Grid item container direction="column">
              <Typography
                className={classes.title}
                variant="h2"
                color="primary"
                align="center"
                paragraph
              >
                {title}
              </Typography>
            </Grid>

            <Grid item>
              <img src={iconImage} alt={title} />
            </Grid>
          </Grid>
        )
      )}
    </>
  );
}
