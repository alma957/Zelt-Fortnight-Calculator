import "./App.css";
import {Fortnightcalculator} from "./Forms/fortnightcalculator";
import {Box} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
function App() {
  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: 'Inter',
        textTransform: 'none',
      },
    },
  })
  return (
    <ThemeProvider theme={theme}>
    <Box  style={{width:"90%"}}>
      <Fortnightcalculator />
    </Box>
    </ThemeProvider>
  );
}

export default App;
