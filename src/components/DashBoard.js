import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme } from "../themes/customThemes";
import DashboardSidebar from "./DashboardSidebar";
import { Box, Drawer } from "@mui/material";
import DashBoardContent from "./DashBoardContent";

const drawerWidth = 75;

export default function DashBoard() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />

      <Box sx={{ display: "flex" }}>
        <Drawer variant="permanent" sx={{ width: drawerWidth }}>
          <DashboardSidebar />
        </Drawer>
        <DashBoardContent />
      </Box>
    </ThemeProvider>
  );
}
