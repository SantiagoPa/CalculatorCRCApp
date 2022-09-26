import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { defaultTheme } from "./defaultTheme"

export const AppTheme = ({ children }) => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            { children }
        </ThemeProvider>
      )
}