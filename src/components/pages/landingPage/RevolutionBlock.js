import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link, useLocation } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

//icons
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

//local import

import revolutionBackground from "../../../assets/repeatingBackground.svg";

const useStyles = makeStyles((theme) => ({
  revolutionBlock: {
    ...theme.mixins.blockMargin,
    width: "100%",
    height: 1000,
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      height: 800,
    },
  },
  card: {
    borderRadius: "1rem",
    padding: "10rem",
    // flexBasis: "50%",
    // width: "min-content",
    // width: 500,
    [theme.breakpoints.down("md")]: {
      padding: "8rem",
    },
    [theme.breakpoints.down("sm")]: {
      flexBasis: "100%",
      borderRadius: 0,
      padding: "8rem 3rem 8rem 3rem",
    },

    [theme.breakpoints.down("xs")]: {
      padding: "8rem 1rem 8rem 1rem",
    },
  },
  cardContent: {
    textAlign: "center",
  },
  learnMoreButton: {
    ...theme.mixins.learnButton,
    height: 30,
    fontSize: 12,
    // display: "block",
  },
}));

export default function RevolutionBlock(props) {
  const classes = useStyles();

  return (
    <Grid
      item
      container
      className={classes.revolutionBlock}
      justify="center"
      alignItems="center"
    >
      <Card className={classes.card} raised>
        <CardContent>
          <Grid container direction="column" className={classes.cardContent}>
            <Grid item>
              <Typography color="primary" variant="h3" gutterBottom>
                The Revolution
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" gutterBottom>
                Visionary insights coupled with cutting-edge technology is a
                recipe for revolution.
              </Typography>
              <Button
                component={Link}
                to="/revolution"
                className={classes.learnMoreButton}
                color="primary"
              >
                Learn More<ArrowRightAltIcon></ArrowRightAltIcon>
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
