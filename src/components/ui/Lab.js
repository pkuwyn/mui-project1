import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  hell: {
    border: "1px red solid",
  },
  label: {
    backgroundColor: "red",
  },
}));

export default function Lab(props) {
  const classes = useStyles(props);
  console.log(classes);
  return (
    <>
      <Button classes={{ outlined: classes.hell }}>
        <span className={classes.label}>nested</span>
        Button1
      </Button>

      <Button>
        {/* <span className={classes.label}>nested</span> */}
        Button2
      </Button>
    </>
  );
}
