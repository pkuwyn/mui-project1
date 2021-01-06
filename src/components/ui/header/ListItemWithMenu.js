import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Collapse from "@material-ui/core/Collapse";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import { Link, useLocation } from "react-router-dom";
import { matchPath } from "react-router";

//icon
import MenuIcon from "@material-ui/icons/Menu";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

//local import

const useStyles = makeStyles((theme) => ({}));

export default function ListItemWithMenu({ menu, children, ...props }) {
  const classes = useStyles();

  let { pathname } = useLocation();

  const [open, setOpen] = useState(true);
  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem {...props} button onClick={toggleOpen}>
        {children}
        {/* <ListItemSecondaryAction>
  
        {open ? <ExpandLess /> : <ExpandMore />}

        </ListItemSecondaryAction> */}
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {menu.map(({ label, path }) => (
            <ListItem button selected={Boolean(matchPath(pathname, path))}>
              <ListItemText primary={label} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
}
