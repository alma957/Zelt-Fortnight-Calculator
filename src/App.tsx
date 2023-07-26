import "./App.css";
import {NationalInsurance} from "./Forms/nationalInsurance";
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
    <Box>
      <NationalInsurance />
    </Box>
    </ThemeProvider>
  );
}

export default App;
