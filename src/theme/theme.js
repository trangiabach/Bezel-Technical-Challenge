import { createTheme } from "@mui/material";
import COLORS from "./color";
import FONTS from "./fonts";
import COMPONENTS from "./components";

// Global theme for MUI
const theme = createTheme({
    typography: {
        fontFamily: FONTS.regular,
        button: {
            textTransform: "none"
        }
    },
    palette: {
        primary: {
            main: COLORS.primary
        },
        secondary: {
            main: COLORS.secondary
        },
        success: {
            main: COLORS.success
        },
        background: {
            default: COLORS.background.default,
            secondary: COLORS.background.secondary
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: COMPONENTS.button
            }
        }
    }
});

export default theme;