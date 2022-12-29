import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Typography, Paper } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  borderRadius: 14,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const DashBoardContent = () => {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 3, background: "#DBDBDB", height: "100vh" }}
    >
      <Typography variant="h4" sx={{ fontWeight: 600 }}>
        Contractor Profile
      </Typography>
      <Box sx={{ width: "100%", pt: 3 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12}>
                <Item elevation={0} variant="outlined" sx={{ height: "322px" }}>
                  1
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item elevation={0} variant="outlined" sx={{ height: "160px" }}>
                  1
                </Item>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12}>
                <Item elevation={0} variant="outlined" sx={{ height: "29vh" }}>
                  1
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item elevation={0} variant="outlined" sx={{ height: "21vh" }}>
                  1
                </Item>
              </Grid>{" "}
              <Grid item xs={12}>
                <Item elevation={0} variant="outlined" sx={{ height: "15vh" }}>
                  1
                </Item>
              </Grid>{" "}
              <Grid item xs={12}>
                <Item elevation={0} variant="outlined" sx={{ height: "15vh" }}>
                  1
                </Item>
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item xs={6}>
          <Item elevation={0} variant="outlined" sx={{ height: "160px" }}>
            3
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item elevation={0} variant="outlined">
            4
          </Item>
        </Grid> */}
        </Grid>
      </Box>
    </Box>
  );
};

export default DashBoardContent;
