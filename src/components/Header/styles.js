import { makeStyles, createTheme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    title: {
        flex: 1,
        color: "White",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
    },
    main: {
        background: "darkblue",
    }
}));

export const darkTheme = createTheme({
    palette: {
        primary: {
            main: "#fff",
        },
    },
});