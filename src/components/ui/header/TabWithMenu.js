import React, { useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Slide from "@material-ui/core/Slide";
import Collapse from "@material-ui/core/Collapse";
import { Link } from "react-router-dom";

//icons
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.primary.light,
    borderRadius: 0,
  },
  menuItemRoot: {
    ...theme.typography.tabMenu,
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
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        elevation={2}
        classes={{ paper: classes.paper, list: classes.list }}
        // TransitionComponent={Slide}
        // transitionDuration={500}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        {menu.map(({ label, path }) => (
          <MenuItem
            onClick={handleClose}
            key={path}
            component={Link}
            to={path}
            classes={{
              root: classes.menuItemRoot,
            }}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
