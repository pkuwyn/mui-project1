import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link, useLocation } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

//local import
import logo from "../../../assets/logo.svg";
import ElevationScroll from "../../utils/ElevationScroll";

import TabWithMenu from "./TabWithMenu";
import headerTabConfig from "./headerTabConfig";

//config variables
const tabLinkMap = ["/", "/services", "/revolution", "/about", "/contact"];

//tab value hook
const useTabValue = (initValue) => {
  const [value, setValue] = useState(initValue);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let { pathname } = useLocation();
  useEffect(() => {
    const correctValue = tabLinkMap.indexOf(pathname);
    if (correctValue === -1) {
      setValue(false);
    } else {
      correctValue === value || setValue(correctValue);
    }
  }, [value, pathname]);

  return [value, handleChange];
};

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "2rem",
  },
  logoButton: {
    padding: 0,
    border: "none",
    "&:hover": {
      backgroundColor: "unset",
    },
  },
  logo: {
    height: "5rem",
  },
  tabs: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    height: "5rem",
    minWidth: 10,
    marginLeft: 25,
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: 100,
    margin: "0 1.5rem 0 3rem",
    minWidth: 140,
    height: 35,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, handleChange] = useTabValue(0);

  return (
    <>
      <ElevationScroll elevationValue={24}>
        <AppBar color="primary" position="sticky">
          <Toolbar disableGutters>
            <Button
              className={classes.logoButton}
              component={Link}
              to="/"
              disableRipple
            >
              <img src={logo} alt="logo" className={classes.logo} />
            </Button>

            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="website menu"
              className={classes.tabs}
              TabIndicatorProps={{
                style: {
                  display: "none",
                },
              }}
            >
              {headerTabConfig.map(({ label, path, menu }) => {
                return menu ? (
                  <TabWithMenu
                    key={path}
                    label={label}
                    className={classes.tab}
                    component={Link}
                    to={path}
                    menu={menu}
                  />
                ) : (
                  <Tab
                    key={path}
                    label={label}
                    className={classes.tab}
                    component={Link}
                    to={path}
                  />
                );
              })}
            </Tabs>

            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              component={Link}
              to="/estimate"
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* <ScrollTopFab /> */}
      {/* <div className={classes.toolbarMargin}></div> */}
    </>
  );
}
