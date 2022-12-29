import React from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  Grid,
  CardContent,
  FormLabel,
  Checkbox,
  TextField,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import GoogleIcon from "@mui/icons-material/Google";
import Header from "./Header";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme, lightTheme } from "../themes/customThemes";

const LoginPage = () => {
  return (
    <Box>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={6} />

        <Grid item xs={6}>
          <ThemeProvider theme={lightTheme}>
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
                  sx={{ fontSize: 14, letterSpacing: "0.2rem", mt: 2 }}
                  color="#97999B"
                  gutterBottom
                >
                  TYPE SOMETHING HERE
                </Typography>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: 600, mb: 0 }}
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
                  <Button size="small" color="secondary">
                    Sign In
                  </Button>
                </Typography>
                <form style={{ display: "flex", flexDirection: "column" }}>
                  <FormLabel sx={{ mt: 2, mb: 1, fontWeight: 600 }}>
                    Email ID
                  </FormLabel>
                  <TextField
                    placeholder="name@email.com"
                    type="email"
                    id="outlined-basic"
                    variant="outlined"
                  />
                  <FormLabel sx={{ mt: 2, mb: 1, fontWeight: 600 }}>
                    Password
                  </FormLabel>
                  <TextField
                    type="password"
                    placeholder="8+ Characters,1 Captial letter"
                    variant="outlined"
                  />
                  <Typography
                    sx={{ fontSize: 12, mt: 1 }}
                    color="#97999B"
                    gutterBottom
                  >
                    1 lower character, 1 upper character, 1 number, and 1
                    special character, also keep it minimum 8 characters long.
                  </Typography>
                  <Box sx={{ my: 1 }}>
                    <Checkbox defaultChecked color="default" />
                    <Typography
                      variant="span"
                      sx={{ fontSize: 14 }}
                      color="#97999B"
                      gutterBottom
                    >
                      Subscribe to newsletter
                    </Typography>
                  </Box>
                  <Button
                    type="button"
                    variant="contained"
                    color="warning"
                    sx={{ px: "16px", py: "10px" }}
                    fullWidth
                  >
                    Create an account
                  </Button>
                  <Button
                    type="button"
                    variant="contained"
                    sx={{
                      mt: 1,
                      px: "16px",
                      py: "10px",
                      background: "#FFFFFF",
                    }}
                    fullWidth
                    startIcon={<GoogleIcon />}
                  >
                    Sign up with Google
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ThemeProvider>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;
