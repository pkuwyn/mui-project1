import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

//local
import theme from "./ui/theme";
import Header from "./ui/header/Header";
import Lab from "./ui/Lab";
import StyledButton from "./ui/StyledButton";

const pages = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/services",
    name: "services",
  },
  {
    path: "/customsoftware",
    name: "customsoftware",
  },
  {
    path: "/mobileapps",
    name: "mobileapps",
  },
  {
    path: "/websites",
    name: "websites",
  },
  {
    path: "/revolution",
    name: "revolution",
  },
  {
    path: "/about",
    name: "about",
  },
  {
    path: "/contact",
    name: "contact",
  },
  {
    path: "/estimate",
    name: "estimate",
  },
];

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header></Header>
        {/* <Lab classes={{ label: classes.heihei }}></Lab> */}
        {/* <StyledButton variant="contained">Hello</StyledButton> */}
        <Switch>
          {pages.map(({ path, name }) => (
            <Route
              key={path}
              exact
              path={path}
              component={() => <h3>{name}</h3>}
            ></Route>
          ))}

          <Redirect to="/"></Redirect>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
