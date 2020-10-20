import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import useScrollTrigger from "@material-ui/core/useScrollTrigger";

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

export default function Header(props) {
  return (
    <ElevationScroll elevationValue={24}>
      <AppBar>
        <Toolbar>Header</Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
