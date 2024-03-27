import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
    palette:{
        panelPrimary:{
            main: '#7367f0',
        },
        lightText:{
            main: '#777'
        }
    }
})

export default function Theme({children}){
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}