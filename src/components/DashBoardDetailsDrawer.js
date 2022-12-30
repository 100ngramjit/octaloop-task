import { Box, FormLabel, TextField, Typography, Button } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const DashBoardDetailsDrawer = () => {
  return (
    <Box sx={{ width: 340, p: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        Personal Details
      </Typography>
      <Typography variant="caption" color="text.secondary">
        Praesent sit amet velit lobortis, volutpat odio eget, tincidunt eros.
      </Typography>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <FormLabel sx={{ mt: 2, mb: 1, fontWeight: 600 }}>Full Name</FormLabel>
        <TextField
          placeholder="name@email.com"
          type="email"
          id="outlined-basic"
          variant="filled"
        />
        <FormLabel sx={{ mt: 2, mb: 1, fontWeight: 600 }}>Email ID</FormLabel>
        <TextField
          type="password"
          placeholder="8+ Characters,1 Captial letter"
          variant="filled"
        />
        <Button
          color="secondary"
          size="small"
          startIcon={<AddIcon />}
          sx={{ width: 100 }}
        >
          Add new
        </Button>
        <FormLabel sx={{ mt: 2, mb: 1, fontWeight: 600 }}>Username</FormLabel>
        <TextField
          placeholder="name@email.com"
          type="email"
          id="outlined-basic"
          variant="filled"
        />
        <FormLabel sx={{ mt: 2, mb: 1, fontWeight: 600 }}>Phone no.</FormLabel>
        <TextField
          type="password"
          placeholder="8+ Characters,1 Captial letter"
          variant="filled"
        />
        <Button
          color="secondary"
          size="small"
          startIcon={<AddIcon />}
          sx={{ width: 100 }}
        >
          Add new
        </Button>
        <Box>
          <Button
            type="button"
            variant="contained"
            color="warning"
            sx={{ mt: 1 }}
            startIcon={<ArrowBackIcon />}
          >
            Update details
          </Button>
          <Button
            type="button"
            variant="contained"
            color="info"
            sx={{ ml: 1, mt: 1 }}
          >
            cancel
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default DashBoardDetailsDrawer;
