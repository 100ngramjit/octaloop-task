import { styled, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme } from "../themes/customThemes";
import DashboardSidebar from "./DashboardSidebar";
import { Box } from "@mui/material";

export default function DashBoard() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Box>
        <DashboardSidebar />
        Contractor Profile
      </Box>
    </ThemeProvider>
  );
}
