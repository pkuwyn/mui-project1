import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

//local import
import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
  const { children, elevationValue } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? elevationValue : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "2rem",
  },
  logo: {
    height: "5rem",
    // marginRight: "auto",
    // flex: "1 0 0",
  },
  tabs: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    height: "5rem",
    minWidth: 60,
    marginLeft: 25,
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: 100,
    margin: "0 1.5rem 0 3rem",
    minWidth: 140,
    height: 35,
  },
  buttonLabel: {},
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <ElevationScroll elevationValue={24}>
        <AppBar color="primary">
          <Toolbar disableGutters>
            <img src={logo} alt="logo" className={classes.logo} />

            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
              className={classes.tabs}
              TabIndicatorProps={{
                style: {
                  display: "none",
                },
              }}
            >
              <Tab label="Home" className={classes.tab} />
              <Tab label="Service" className={classes.tab} />
              <Tab label="The Revolution" className={classes.tab} />
              <Tab label="About Us" className={classes.tab} />
              <Tab label="Contact Us" className={classes.tab} />
            </Tabs>
            {/* <h3>{value}</h3> */}

            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </>
  );
}
