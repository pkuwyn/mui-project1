import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

//local import
import rootsImage from "../../../assets/root.svg";

//animations
import documentAnimation from "../../../animations/documentsAnimation/data";
import scaleAnimation from "../../../animations/scaleAnimation/data";
import automationAnimation from "../../../animations/automationAnimation/data";
import uxAnimation from "../../../animations/uxAnimation/data";

import HeadingBlock from "./HeadingBlock";
import AnimationBlock from "./AnimationBlock";
import CenteredAnimationBlock from "./CenteredAnimationBlock";
import { CallToActionBlock } from "../../pages";

const useStyles = makeStyles((theme) => ({
  customPage: {
    width: "100%",
    marginTop: "2rem",
    paddingLeft: "3rem",
    paddingRight: "3rem",
    paddingBottom: "2rem",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
    },
  },
}));

export default function CustomSoftwarePage(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSm = useMediaQuery(theme.breakpoints.only("sm"));

  return (
    <>
      <Grid container direction="column" className={classes.customPage}>
        <HeadingBlock></HeadingBlock>
        <AnimationBlock
          data={[
            {
              title: "Digital Documents & Data",
              paragraph: [
                `Reduce Errors. Reduce Waste. Reduce Costs.`,
                `Billions are spent annually on the purchasing, printing, and distribution of paper. On top of the massive environmental impact this has, it causes harm to your bottom line as well.
`,
                `By utilizing digital forms and documents you can remove these obsolete expenses, accelerate your communication, and help the Earth.`,
              ],
              animation: documentAnimation,
            },
            {
              title: "Scale",
              paragraph: [
                `Whether you’re a large brand, just getting started, or taking off right now, our application architecture ensures pain-free growth and reliability.`,
              ],
              animation: scaleAnimation,
            },
          ]}
        ></AnimationBlock>

        <CenteredAnimationBlock
          data={{
            title: "Root-Cause Analysis",
            paragraph: [
              `Many problems are merely symptoms of larger, underlying issues.`,
              `We can help you thoroughly examine all areas of your business to develop a holistic plan for the most effective implementation of technology.`,
            ],
            image: rootsImage,
          }}
        ></CenteredAnimationBlock>

        <AnimationBlock
          data={[
            {
              title: "Automation",
              paragraph: [
                `Why waste time when you don’t have to?`,
                `We can help you identify processes with time or event based actions which can now easily be automated.`,
                ` Increasing efficiency increases profits, leaving you more time to focus on your business, not busywork.`,
              ],
              animation: automationAnimation,
            },
            {
              title: "User Experience Design",
              paragraph: [
                `A good design that isn’t usable isn’t a good design.`,
                `So why are so many pieces of software complicated, confusing, and frustrating?`,
                `By prioritizing users and the real ways they interact with technology we’re able to develop unique, personable experiences that solve problems rather than create new ones.`,
              ],
              animation: uxAnimation,
            },
          ]}
        ></AnimationBlock>
      </Grid>
      <CallToActionBlock></CallToActionBlock>
    </>
  );
}
