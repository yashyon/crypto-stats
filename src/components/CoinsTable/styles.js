import { makeStyles, createTheme } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    row: {
        backgroundColor: "#FFFFFF",

        cursor: "pointer",
        "&:hover": {
            backgroundColor: "#CFCFCF",
        },
        fontFamily: "Montserrat",
    },
    pagination: {
        "& .MuiPaginationItem-root": {
            color: "darkblue",
        },
    },
    whiteText: {
        color: "black"
    }
});

export const darkTheme = createTheme({
    palette: {
        primary: {
            main: "#111111",
        },
    },
});
