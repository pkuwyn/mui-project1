import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./ui/theme";
import Header from "./ui/Header";

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
    </ThemeProvider>
  );
}

export default App;
