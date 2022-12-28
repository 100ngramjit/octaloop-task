import {
  Box,
  Button,
  Typography,
  Card,
  Grid,
  CardContent,
  FormLabel,
} from "@mui/material";
import Header from "./components/Header";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
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
                    <input placeholder="name@email.com" />
                    <FormLabel>password</FormLabel>
                    <input placeholder="8+ Characters,1 Captial letter" />
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
