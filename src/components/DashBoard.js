import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme } from "../themes/customThemes";
import DashboardSidebar from "./DashboardSidebar";
import { Box, Drawer } from "@mui/material";
import DashBoardContent from "./DashBoardContent";
import DashBoardDetailsDrawer from "./DashBoardDetailsDrawer";
import { useState } from "react";

const drawerWidth = 75;

export default function DashBoard() {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />

      <Box sx={{ display: "flex" }}>
        <Drawer variant="permanent" sx={{ width: drawerWidth }}>
          <DashboardSidebar />
        </Drawer>
        <DashBoardContent handleDrawerToggle={handleDrawerToggle} />
        <Drawer
          anchor="right"
          open={open}
          onClose={handleDrawerClose}
          sx={{ minWidth: 800 }}
        >
          <DashBoardDetailsDrawer />
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}
