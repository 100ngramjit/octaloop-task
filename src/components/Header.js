import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { grey, lime } from "@mui/material/colors";

export default function Header() {
  const backColor = grey[900];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar>
        <Typography variant="h5" color="#F5DF4D" sx={{ mr: 2 }}>
          Binamite
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button
          variant="contained"
          sx={{
            mr: 2,
            textTransform: "none",
            background: "#F5DF4D",
            borderRadius: "16px",
          }}
        >
          Signup for free
        </Button>
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            background: "#F5DF4D",
            borderRadius: "16px",
          }}
        >
          Login
        </Button>
      </Toolbar>
    </Box>
  );
}
