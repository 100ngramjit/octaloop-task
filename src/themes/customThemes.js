import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          disableElevation: true,
          textTransform: "none",
          borderRadius: "16px",
        },
      },
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#F5DF4D",
    },
    secondary: {
      main: "#574AE2",
    },
    warning: {
      main: "#1A1A1A",
    },
    error: {
      main: "#FE5F55",
    },
    info: {
      main: "#DADFF7",
    },
    success: {
      main: "#94E059",
    },
  },
});

export const lightTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          disableElevation: true,
          textTransform: "none",
          borderRadius: "16px",
        },
      },
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#F5DF4D",
    },
    secondary: {
      main: "#574AE2",
    },
    warning: {
      main: "#1A1A1A",
    },
    error: {
      main: "#FE5F55",
    },
    info: {
      main: "#DADFF7",
    },
    success: {
      main: "#94E059",
    },
  },
});
