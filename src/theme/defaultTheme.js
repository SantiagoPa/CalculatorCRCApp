import { createTheme } from "@mui/material";
import { red, purple, indigo, green } from "@mui/material/colors";

export const defaultTheme = createTheme({
    palette: {
        primary: {
            main: '#262254'
        },
        secondary: {
            main: '#543884',
        },
        success: {
            main: green[800]
        },
        background: {
            default: indigo[50],
        },
        error: {
            main: red.A400,
        }
    }
})