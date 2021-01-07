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
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Collapse from "@material-ui/core/Collapse";

//icon
import MenuIcon from "@material-ui/icons/Menu";
import ListIcon from "@material-ui/icons/List";
import HomeIcon from "@material-ui/icons/Home";
import AppsIcon from "@material-ui/icons/Apps";
import FunctionsIcon from "@material-ui/icons/Functions";

//local import
import logo from "../../../assets/logo.svg";
import ElevationScroll from "../../utils/ElevationScroll";
import { headerTabConfig, tabLinkMap } from "./headerTabConfig";
import TabWithMenu from "./TabWithMenu";
import ListItemWithMenu from "./ListItemWithMenu";

function getCorrectIndex(linkMap, pathname) {
  let correctValue = -1;
  linkMap.forEach((linkMapItem, index) => {
    if (Array.isArray(linkMapItem)) {
      if (linkMapItem.indexOf(pathname) !== -1) {
        correctValue = index;
      }
    } else {
      if (linkMapItem === pathname) {
        correctValue = index;
      }
    }
  });
  return correctValue;
}

//tab value hook
const useTabValue = (initValue) => {
  const [value, setValue] = useState(initValue);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let { pathname } = useLocation();
  useEffect(() => {
    const correctValue = getCorrectIndex(tabLinkMap, pathname);
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
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1.2rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0.5rem",
    },
  },
  toolbar: {},
  logoButton: {
    padding: 0,
    border: "none",
    "&:hover": {
      backgroundColor: "unset",
    },
  },
  logo: {
    height: "5rem",
    [theme.breakpoints.down("sm")]: {
      height: "4.2rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "3.5rem",
    },
  },
  tabs: {
    marginLeft: "auto",
  },
  menuButton: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "unset",
    },
    "& $menuIcon": {
      height: "2.5rem",
      width: "2.5rem",
      [theme.breakpoints.down("sm")]: {
        height: "2.2rem",
        width: "2.2rem",
      },
      [theme.breakpoints.down("xs")]: {
        height: "2rem",
        width: "2rem",
      },
    },
  },
  menuIcon: {},
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

  drawerPaper: {
    backgroundColor: theme.palette.common.blue,
    width: 250,
    maxWidth: "100%",
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawerEstimate: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    opacity: 1,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();

  //responsive tabs
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [value, handleChange] = useTabValue(0);
  let { pathname } = useLocation();

  const tabs = (
    <>
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
    </>
  );

  const [drawerOpen, setDrawerOpen] = useState(false);
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const sideDrawers = (
    <>
      <IconButton
        aria-label="menu"
        onClick={toggleDrawer}
        className={classes.menuButton}
        disableRipple
      >
        <MenuIcon className={classes.menuIcon} />
      </IconButton>

      {/* <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        variant="temporary"
      >
        Drawer Content
      </Drawer> */}

      <SwipeableDrawer
        // disableBackdropTransition={!iOS}
        // disableDiscovery={iOS}
        disableBackdropTransition
        disableDiscovery={iOS}
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
        variant="temporary"
        style={{
          zIndex: theme.zIndex.appBar - 1,
        }}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbarMargin}></div>
        <List disablePadding>
          {headerTabConfig.map(({ label, path, menu }, index) =>
            menu ? (
              <ListItemWithMenu
                key={path}
                menu={menu}
                component={Link}
                to={path}
                button
                divider
                onClick={toggleDrawer}
                toggleDrawer={toggleDrawer}
                className={classes.drawerItem}
                selected={value === index}
                classes={{
                  selected: classes.drawerItemSelected,
                }}
              >
                <ListItemIcon>
                  <ListIcon />
                </ListItemIcon>
                <ListItemText primary={label} disableTypography />
                {/* <ListSubheader > hell</ListSubheader> */}
              </ListItemWithMenu>
            ) : (
              <ListItem
                key={path}
                button
                divider
                component={Link}
                to={path}
                onClick={toggleDrawer}
                className={classes.drawerItem}
                selected={value === index}
                classes={{
                  selected: classes.drawerItemSelected,
                }}
              >
                <ListItemIcon>
                  {path === "/" ? <HomeIcon /> : <AppsIcon />}
                </ListItemIcon>
                <ListItemText primary={label} disableTypography />
              </ListItem>
            )
          )}
          <ListItem
            button
            divider
            component={Link}
            to="/estimate"
            onClick={toggleDrawer}
            className={classes.drawerEstimate}
            selected={pathname === "/estimate"}
            classes={{
              selected: classes.drawerItemSelected,
            }}
          >
            <ListItemIcon>
              <FunctionsIcon />
            </ListItemIcon>
            <ListItemText primary="Estimate" disableTypography />
          </ListItem>
        </List>
      </SwipeableDrawer>
    </>
  );

  return (
    <>
      <ElevationScroll elevationValue={24}>
        <AppBar color="primary" position="sticky">
          <Toolbar disableGutters className={classes.toolbar}>
            <Button
              className={classes.logoButton}
              component={Link}
              to="/"
              disableRipple
            >
              <img src={logo} alt="logo" className={classes.logo} />
            </Button>
            {matches ? sideDrawers : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* <ScrollTopFab /> */}
      {/* <div className={classes.toolbarMargin}></div> */}
    </>
  );
}
