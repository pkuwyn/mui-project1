import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

//local import
import HeroBlock from "./HeroBlock";
import ServicesBlock from "./ServicesBlock";
import RevolutionBlock from "./RevolutionBlock";
import InfoBlock from "./InfoBlock";
import CallToActionBlock from "./CallToActionBlock";

const useStyles = makeStyles((theme) => ({}));

export default function LandingPage(props) {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <HeroBlock />

      <ServicesBlock />

      <RevolutionBlock />

      <InfoBlock />

      <CallToActionBlock />
    </Grid>
  );
}
