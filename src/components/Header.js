import * as React from "react";
import { Box, Button, Toolbar, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

export default function Header() {
  return (
    <Box>
      <Toolbar component="div" sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h5"
          color="primary"
          sx={{ mr: 2, fontWeight: 600 }}
        >
          Binamite
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Button component="div" endIcon={<KeyboardArrowDownIcon />}>
            Pricing
          </Button>
          <Button component="div" endIcon={<KeyboardArrowDownIcon />}>
            Who it's for
          </Button>
          <Button component="div" endIcon={<KeyboardArrowDownIcon />}>
            Features
          </Button>
          <Button component="div">Blog</Button>
          <Button component="div">
            <InstagramIcon />
          </Button>
          <Button component="div">
            <FacebookOutlinedIcon />
          </Button>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{
              mr: 2,
              fontWeight: 600,
            }}
          >
            Signup for free
          </Button>
          <Button
            variant="contained"
            sx={{
              fontWeight: 600,
            }}
            endIcon={<ArrowForwardOutlinedIcon />}
          >
            Login
          </Button>
        </Box>
      </Toolbar>
    </Box>
  );
}
