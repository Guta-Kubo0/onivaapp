import { ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import DashboardPage from "./pages/Dashboard/dashboardpage";

const Theme = createTheme({
  typography: { fontFamily: "Roboto, sans-serif" },
  palette: {
    mode: "light",
    primary: { main: "#4744A6" },
    secondary: { main: "#FFF" },
    background: { default: "#E9E9E9", paper: "#FFF" },
    text: { primary: "#000", secondary: "#8F8F8F" },
  },
});

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <DashboardPage />
    </ThemeProvider>
  );
}

export default App;
