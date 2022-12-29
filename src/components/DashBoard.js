import { styled, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme } from "../themes/customThemes";
import DashboardSidebar from "./DashboardSidebar";

export default function DashBoard() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <DashboardSidebar />
    </ThemeProvider>
  );
}
