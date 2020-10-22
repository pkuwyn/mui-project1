import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import theme from "./ui/theme";
import Header from "./ui/Header";

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header></Header>
      Hello
    </ThemeProvider>
  );
}

export default App;
