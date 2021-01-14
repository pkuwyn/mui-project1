import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Lottie from "react-lottie";
import Button from "@material-ui/core/Button";
import { Link, useLocation } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

//icons
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

//local import
import customSoftwareIcon from "../../../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../../../assets/mobileIcon.svg";
import websiteIcon from "../../../assets/websiteIcon.svg";

const servicesData = [
  {
    title: "Custom Software Development",
    subTitle: "Save Energy. Save Time. Save Money.",
    desp: "Complete digital solutions, from investigation to celebration.",
    path: "/customsoftware",
    iconImage: customSoftwareIcon,
  },
  {
    title: "iOS/Android App Development",
    subTitle: "Extend Functionality. Extend Access. Increase Engagement.",
    desp:
      "Integrate your web experience or create a standalone app with either mobile platform.",
    path: "/mobileapps",
    iconImage: mobileAppsIcon,
  },
  {
    title: "Website Development",
    subTitle: "Reach More. Discover More. Sell more.",
    desp: "Optimized for Search Engines, built for speed.",
    path: "/websites",
    iconImage: websiteIcon,
  },
];
const useStyles = makeStyles((theme) => ({
  heroBlock: {
    marginTop: "2rem",
  },
  serviceContainer: {
    marginTop: "5rem",
    padding: "0 3rem",
    flexWrap: "nowrap",
    [theme.breakpoints.down("xs")]: {
      flexWrap: "wrap",
      padding: "0 1rem",
      justifyContent: "center",
    },
  },
  contentContainer: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      order: 2,
    },
  },
  learnMoreButton: {
    ...theme.mixins.learnButton,
    marginTop: "1rem",
    alignSelf: "flex-start",
    height: 30,
    fontSize: 12,
  },
  iconContainer: {
    marginLeft: "2rem",

    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      marginBottom: "2rem",
    },
  },
  icon: {
    maxWidth: 300,
  },
}));

export default function ServicesBlock(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSm = useMediaQuery(theme.breakpoints.only("sm"));
  return (
    <Grid item className={classes.heroBlock}>
      {servicesData.map(({ title, subTitle, desp, path, iconImage }, index) => (
        <Grid
          key={title}
          item
          container
          direction="row"
          className={classes.serviceContainer}
          justify={
            matchesSm
              ? "space-between"
              : index % 2 === 0
              ? "flex-start"
              : "flex-end"
          }
        >
          <Grid item className={classes.contentContainer}>
            <Typography
              className={classes.title}
              variant="h4"
              color="primary"
              // align="center"
              // paragraph
            >
              {title}
            </Typography>
            <Typography
              className={classes.subTitle}
              variant="subtitle1"
              paragraph
            >
              {subTitle}
            </Typography>
            <Typography className={classes.desp} variant="subtitle1">
              {desp}
            </Typography>
            <Button
              component={Link}
              to={path}
              className={classes.learnMoreButton}
              color="primary"
            >
              Learn More<ArrowRightAltIcon></ArrowRightAltIcon>
            </Button>
          </Grid>

          <Grid item className={classes.iconContainer}>
            <img src={iconImage} alt={title} className={classes.icon} />
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}
