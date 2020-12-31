import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 100,
  },
  contained: {
    backgroundImage: `linear-gradient(180deg, ${theme.palette.common.blue} 0%, ${theme.palette.common.orange} 100%)`,
  },
  label: {
    fontFamily: "Pacifico",
  },
}));

export default function StyledButton(props) {
  const classes = useStyles();
  return <Button {...props} classes={classes}></Button>;
}
