import LoginPage from "./components/LoginPage";
import Routing from "./routes/Routing";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "./themes/customThemes";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routing />
    </ThemeProvider>
  );
}

export default App;
