import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2196f3",
      dark: "#2196f3",
      light: "#7ac0f8"
    },
    background: {
      default: "#f5f5f5"
    },
    error: {
      main: "#f44336"
    },
    action: {
      disabled: "#fff",
      disabledBackground: "#7ac0f8"
    }
  },
  overrides: {
    MuiFormLabel: {
      root: {
        fontSize: "18px",
        color: "#949494",
        "&$focused": {
          color: "#949494"
        }
      },
    },
    MuiInput: {
      root: {
        fontSize: "18px"
      }
    },
    MuiInputAdornment: {
      root: {
        marginBottom: "2px",
        "& > p": {
          fontSize: "18px",
          padding: "6px 0 7px"
        }
      }
    },
    MuiButton: {
      root: {
        textTransform: "none"
      }
    }
  }
});

export default theme;