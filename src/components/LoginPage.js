import React from "react";
import { Box, Grid } from "@mui/material";
import Header from "./Header";
import LoginCard from "./LoginCard";

const LoginPage = () => {
  return (
    <Box>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={6} />

        <Grid item xs={6}>
          <LoginCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;
