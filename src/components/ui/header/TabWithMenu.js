import React, { useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Slide from "@material-ui/core/Slide";
import Collapse from "@material-ui/core/Collapse";
import { Link, useLocation } from "react-router-dom";
import { matchPath } from "react-router";
//icons
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

//local import
import { anchorBottomCenter } from "../../utils/anchorPosition";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.getContrastText(theme.palette.primary.main),
    borderRadius: 0,
  },
  menuItemRoot: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  selected: {
    opacity: 1,
  },
  tabContainer: {
    display: "flex",
    alignItems: "center",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
  },
}));

export default function TabWithMenu({ menu, label, ...props }) {
  const classes = useStyles();
  let { pathname } = useLocation();

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  return (
    <>
      <Tab
        {...props}
        label={
          <>
            {label} <ArrowDropDownIcon />
          </>
        }
        onMouseOver={handleClick}
        aria-controls={`menu-for-${props.label}`}
        aria-haspopup="true"
        classes={{ wrapper: classes.wrapper }}
      />

      <Menu
        id={`menu-for-${props.label}`}
        anchorEl={anchorEl}
        // {...anchorBottomCenter}
        keepMounted
        open={open}
        onClose={handleClose}
        elevation={0}
        classes={{ paper: classes.paper, list: classes.list }}
        // TransitionComponent={Slide}
        // transitionDuration={500}
        // onMouseLeave={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        {menu.map(({ label, path }) => {
          return (
            <MenuItem
              onClick={handleClose}
              key={path}
              component={Link}
              to={path}
              classes={{
                root: classes.menuItemRoot,
                selected: classes.selected,
              }}
              selected={Boolean(matchPath(pathname, path))}
            >
              {label}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}
