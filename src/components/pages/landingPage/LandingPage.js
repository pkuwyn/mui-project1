import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

//local import
import HeroBlock from "./HeroBlock";

const useStyles = makeStyles((theme) => ({}));

export default function LandingPage(props) {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <HeroBlock />
    </Grid>
  );
}
