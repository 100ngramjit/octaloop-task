import React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Grid,
  Typography,
  Paper,
  CardHeader,
  Avatar,
  IconButton,
} from "@mui/material";

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
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      p: 1,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, pt: 0 }}
                      color="text.primary"
                    >
                      Contractor Profile
                    </Typography>
                    <Typography variant="subtitle1" color="secondary">
                      Manage
                    </Typography>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item elevation={0} variant="outlined" sx={{ height: "160px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      p: 1,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, pt: 0 }}
                      color="text.primary"
                    >
                      Address Location
                    </Typography>
                    <Typography variant="subtitle1" color="secondary">
                      Manage
                    </Typography>
                  </Box>
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
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      p: 1,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, pt: 0 }}
                      color="text.primary"
                    >
                      Tax Identification (ID)
                    </Typography>
                    <Typography variant="subtitle1" color="secondary">
                      Manage
                    </Typography>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item elevation={0} variant="outlined" sx={{ height: "21vh" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      p: 1,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, pt: 0 }}
                      color="text.primary"
                    >
                      GSTIN
                    </Typography>
                  </Box>
                </Item>
              </Grid>{" "}
              <Grid item xs={12}>
                <Item elevation={0} variant="outlined" sx={{ height: "15vh" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      p: 1,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, pt: 0 }}
                      color="text.primary"
                    >
                      W-8BEN
                    </Typography>
                  </Box>
                </Item>
              </Grid>{" "}
              <Grid item xs={12}>
                <Item elevation={0} variant="outlined" sx={{ height: "15vh" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      p: 1,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, pt: 0 }}
                      color="text.primary"
                    >
                      W-9
                    </Typography>
                  </Box>
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
