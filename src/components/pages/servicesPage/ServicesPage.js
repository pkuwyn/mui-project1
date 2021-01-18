import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
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
    title: "iOS/Android App Development",
    subTitle: "Extend Functionality. Extend Access. Increase Engagement.",
    desp:
      "Integrate your web experience or create a standalone app with either mobile platform.",
    path: "/mobileapps",
    iconImage: mobileAppsIcon,
  },
  {
    title: "Custom Software Development",
    subTitle: "Save Energy. Save Time. Save Money.",
    desp: "Complete digital solutions, from investigation to celebration.",
    path: "/customsoftware",
    iconImage: customSoftwareIcon,
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
  servicesBlock: {
    width: "100%",
    marginTop: "2rem",
    paddingBottom: "2rem",
  },
  pageTitle: {
    marginLeft: "3rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      textAlign: "center",
    },
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
    width: "30%",
    [theme.breakpoints.down("sm")]: {
      width: "60%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      order: 2,
      textAlign: "center",
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
    width: 300,
    [theme.breakpoints.down("md")]: {
      width: 200,
    },
    [theme.breakpoints.down("xs")]: {
      width: 150,
    },
  },
}));

export default function ServicesPage(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSm = useMediaQuery(theme.breakpoints.only("sm"));
  return (
    <Grid className={classes.servicesBlock} container direction="column">
      <Grid item className={classes.pageTitle}>
        <Typography variant="h2" color="primary">
          Services
        </Typography>
      </Grid>

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
              : index % 2 === 1
              ? "flex-start"
              : "flex-end"
          }
        >
          <Grid item className={classes.contentContainer}>
            <Typography className={classes.title} variant="h4" color="primary">
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
