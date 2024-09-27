import { pink } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d94395",
      light: "#d936d1",
      dark: pink[600],
    },
  },
  typography: {
    button: {
      textTransform: "capitalize",
    },
  },
});

export default theme;
