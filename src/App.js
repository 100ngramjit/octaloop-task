import {
  Box,
  Button,
  Typography,
  Card,
  Grid,
  CardContent,
  FormLabel,
  TextField,
} from "@mui/material";
import Header from "./components/Header";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
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

const lightTheme = createTheme({
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

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box>
        <Header />
        <Grid container spacing={2}>
          <Grid item xs={6} />

          <Grid item xs={6}>
            <ThemeProvider theme={lightTheme}>
              {/* <CssBaseline /> */}
              <Card
                sx={{
                  height: "710px",
                  width: "450px",
                  borderRadius: "16px",
                }}
                color="secondary"
                variant="outlined"
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14, letterSpacing: "0.2rem" }}
                    color="#97999B"
                    gutterBottom
                  >
                    TYPE SOMETHING HERE
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: 600, mb: 0 }}
                    // color="#1A1A1A"
                    gutterBottom
                  >
                    Sign up to Binamite
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{ mt: 0 }}
                    color="#97999B"
                    gutterBottom
                  >
                    Already a Member?{" "}
                    <Button
                      size="small"
                      sx={{
                        textTransform: "none",
                        color: "#574AE2",
                      }}
                    >
                      Sign In
                    </Button>
                  </Typography>
                  <form>
                    <FormLabel>email</FormLabel>
                    <TextField
                      placeholder="name@email.com"
                      type="email"
                      id="outlined-basic"
                      variant="outlined"
                    />
                    <FormLabel>password</FormLabel>
                    <TextField
                      type="password"
                      placeholder="8+ Characters,1 Captial letter"
                      variant="outlined"
                    />
                    <Button
                      type="button"
                      variant="contained"
                      color="warning"
                      sx={{ px: "16px", py: "10px" }}
                      disableFocusRipple="true"
                      fullWidth
                    >
                      Create an account
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ThemeProvider>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
