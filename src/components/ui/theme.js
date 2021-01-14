import { red } from "@material-ui/core/colors";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { unstable_createMuiStrictModeTheme } from "@material-ui/core";
import { zhCN } from "@material-ui/core/locale";

//color defination
const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";
let theme = unstable_createMuiStrictModeTheme(
  {
    palette: {
      common: {
        blue: arcBlue,
        orange: arcOrange,
      },
      // type: "dark",
      primary: {
        main: arcBlue,
      },
      secondary: {
        main: arcOrange,
      },
    },
    mixins: {
      footer: {},
      learnButton: {
        borderRadius: 100,
        textTransform: "none",
        borderWidth: 2,
      },
    },
    typography: {
      // fontFamily: "Roboto, Microsoft YaHei",
      // htmlFontSize: 16,
      // fontSize: 14,
      // h3: {
      //   fontSize: "1.6rem",
      //   fontWeight: 300,
      // },

      tab: {
        fontFamily: "Raleway",
        fontWeight: 700,
        fontSize: "1rem",
        textTransform: "none",
      },
      // tabMenu: {
      //   fontFamily: "Raleway",
      //   fontWeight: 400,
      //   fontSize: "0.8rem",
      //   textTransform: "none",
      // },
      estimate: {
        fontFamily: "Pacifico",
        fontSize: "1rem",
        fontWeight: 300,
        textTransform: "none",
        color: "white",
      },
      h2: {
        fontFamily: "Raleway",
        fontWeight: 700,
        fontSize: "2.5rem",
      },
      h4: {
        fontFamily: "Raleway",
        fontWeight: 700,
        fontSize: "1.5rem",
      },
      subtitle1: {
        // fontFamily:"",
        fontSize: "1.1rem",
        fontWeight: 300,
        color: arcGrey,
      },
    },
    props: {
      // MuiToolbar: {
      //   disableGutters: true,
      // },
      MuiButton: {
        variant: "outlined",
      },
    },
    overrides: {
      // MuiToolbar: {
      //   root: {
      //     paddingLeft: "0 !important",
      //   },
      // },
      // MuiAppBar: {
      //   root: {
      //     border: "5px solid green",
      //   },
      // },
    },
  },
  zhCN
);

theme = responsiveFontSizes(theme);
// console.log(theme.props.MuiToolbar.root);
export default theme;
