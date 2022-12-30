import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Typography, Paper, Button } from "@mui/material";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  borderRadius: 14,
}));

const DashBoardContent = ({ handleDrawerToggle }) => {
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
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, pt: 0 }}
                      color="text.primary"
                    >
                      Profile
                    </Typography>
                    <Button
                      color="secondary"
                      size="small"
                      onClick={handleDrawerToggle}
                      startIcon={<BorderColorOutlinedIcon />}
                    >
                      Manage
                    </Button>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item elevation={0} variant="outlined" sx={{ height: "160px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, pt: 0 }}
                      color="text.primary"
                    >
                      Address Location
                    </Typography>
                    <Button
                      color="secondary"
                      size="small"
                      onClick={handleDrawerToggle}
                      startIcon={<BorderColorOutlinedIcon />}
                    >
                      Manage
                    </Button>
                  </Box>
                  <Typography variant="caption" color="text.secondary">
                    Time Zone
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    UTC+05:30 Mumbai, Kolkata, Chennai, New Delhi
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Primary
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    A-83, Second Floor, Pocket D, Okhla Phase II, Okhla
                    Industrial Estate, New Delhi, Delhi 110020
                  </Typography>
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
                <Item elevation={0} variant="outlined" sx={{ height: "34vh" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, pt: 0 }}
                      color="text.primary"
                    >
                      Tax Identification (ID)
                    </Typography>
                  </Box>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ py: 1 }}
                    component="div"
                  >
                    A Primary Account Number (PAN) is requested from all
                    companies located in India.
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    LEGAL TAXPAYER NAME
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    Octaloop Technologies Private Limited
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    PAN NUMBER
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    SFSFG8779B
                  </Typography>
                  <Typography variant="caption" color="error" component="div">
                    *PAN Pending Verification
                  </Typography>

                  <Button variant="contained" color="secondary">
                    Verify Now
                  </Button>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item elevation={0} variant="outlined" sx={{ height: "20vh" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
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
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    component="div"
                  >
                    A Good & Services Tax Identification Number is requested
                    from all persons located in country where Binamite Supports
                    GSTIN.
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    GSTIN
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    356DFHSFSFG8779B
                  </Typography>
                </Item>
              </Grid>{" "}
              <Grid item xs={12}>
                <Item elevation={0} variant="outlined" sx={{ height: "13vh" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
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
                  <Typography variant="caption" color="text.secondary">
                    LEGAL TAXPAYER NAME
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    Octaloop Technologies Private Limited
                  </Typography>
                </Item>
              </Grid>{" "}
              <Grid item xs={12}>
                <Item elevation={0} variant="outlined" sx={{ height: "13vh" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
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
                  <Typography variant="caption" color="text.secondary">
                    LEGAL TAXPAYER NAME
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    Octaloop Technologies Private Limited
                  </Typography>
                </Item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DashBoardContent;
