import { red } from "@material-ui/core/colors";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { zhCN } from "@material-ui/core/locale";

//color defination
const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

let theme = createMuiTheme(
  {
    palette: {
      common: {
        blue: arcBlue,
        orange: arcOrange,
      },
      primary: {
        main: arcBlue,
      },
      secondary: {
        main: arcOrange,
      },
    },

    typography: {
      fontFamily: "Roboto, Microsoft YaHei",
      htmlFontSize: 16,
      fontSize: 14,
      // h3: {
      //   fontSize: "1.6rem",
      //   fontWeight: 300,
      // },
    },
    // props: {
    //   MuiToolbar: {
    //     disableGutters: true,
    //   },
    // },
    // overrides: {
    //   MuiToolbar: {
    //     root: {
    //       paddingLeft: "0 !important",
    //     },
    //   },
    // },
  },
  zhCN
);

// theme = responsiveFontSizes(theme);
// console.log(theme.props.MuiToolbar.root);
export default theme;
