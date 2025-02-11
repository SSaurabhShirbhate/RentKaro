const { createTheme } = require("@mui/material");

const customTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#3f1ef8",
        },
        secondary: {
            main: "#3f1ef8",
        },
    }
    // ,
    // typography: {
    //     fontFamily: "Poppins",
    // },
    // shape: {
    //     borderRadius: 10,
    // },
    // spacing: 4,
});
export default customTheme;