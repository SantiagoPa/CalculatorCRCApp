import { createTheme } from "@mui/material";
import { red, purple, indigo } from "@mui/material/colors";

export const defaultTheme = createTheme({
    palette: {
        primary: {
            main: '#262254'
        },
        secondary: {
            main: '#543884',
        },
        background: {
            default: indigo[50],
        },
        error: {
            main: red.A400,
        }
    }
})