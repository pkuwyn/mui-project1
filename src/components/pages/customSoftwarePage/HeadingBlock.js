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

//icons
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

//local assets
import lightbulb from "../../../assets/bulb.svg";
import stopWatch from "../../../assets/stopwatch.svg";
import cash from "../../../assets/cash.svg";

//data

const customSoftwareData = [
  "Whether we’re replacing old software or inventing new solutions, Arc Development is here to help your business tackle technology.",
  `Using regular commercial software leaves you with a lot of stuff you don’t need, without some of the stuff you do need, and ultimately controls the way you work.
Without using any software at all you risk falling behind competitors and missing out on huge savings from increased efficiency.
`,
  `Our custom solutions are designed from the ground up with your needs, wants, and goals at the core. This collaborative process produces finely tuned software that is much more effective at improving your workflow and reducing costs than generalized options.`,
  `We create exactly what you what, exactly how you want it.`,
];

const iconData = [
  {
    title: "Save Energy",
    icon: lightbulb,
  },
  {
    title: "Save Time",
    icon: stopWatch,
  },
  {
    title: "Save Money",
    icon: cash,
  },
];
const useStyles = makeStyles((theme) => ({
  headerContainer: {
    textAlign: "left",
    maxWidth: "40rem",
    marginLeft: "2rem",
    marginRight: "auto",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },

    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  text: {
    color: theme.palette.common.grey,
  },
  iconContainer: {
    marginTop: "3rem",
    marginBottom: "3rem",
  },
  icon: {
    maxWidth: 400,

    [theme.breakpoints.down("xs")]: {
      "&:not(:last-child)": {
        marginBottom: "5rem",
      },
    },
  },
}));

export default function HeadingBlock(props) {
  const classes = useStyles();
  // const theme = useTheme();
  // const matchesMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {/* Custom Software Development Heading*/}
      <Grid item container alignItems="flex-start">
        <Hidden smDown>
          <Grid item>
            <IconButton color="primary" component={Link} to="/services">
              <ArrowBackIcon />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item className={classes.headerContainer}>
          <Typography variant="h2" color="primary" gutterBottom>
            Custom Software Development
          </Typography>
          {customSoftwareData.map((content) => (
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

        <Hidden smDown>
          <Grid item>
            <IconButton color="primary" component={Link} to="/mobileapps">
              <ArrowForwardIcon />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>

      {/* Custom Software Development Icons*/}

      <Grid
        item
        container
        justify="center"
        className={classes.iconContainer}
        spacing={2}
      >
        {iconData.map(({ title, icon }) => (
          <Grid
            item
            key={title}
            container
            direction="column"
            alignItems="center"
            className={classes.icon}
            sm
          >
            <Typography variant="h4" color="primary" gutterBottom>
              {title}
            </Typography>
            <img src={icon} alt={title} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
