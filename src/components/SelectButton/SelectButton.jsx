import { makeStyles } from "@material-ui/core";

const SelectButton = ({ children, selected, onClick }) => {
    const useStyles = makeStyles({
        selectbutton: {
            border: "1px solid darkblue",
            borderRadius: 5,
            padding: 10,
            paddingLeft: 20,
            paddingRight: 20,
            fontFamily: "Montserrat",
            cursor: "pointer",
            alignItems: "center",
            alignContent: "center",
            backgroundColor: selected ? "darkblue" : "",
            color: selected ? "white" : "",
            fontWeight: selected ? 700 : 500,
            "&:hover": {
                backgroundColor: "darkblue",
                color: "white",
            },
            width: "22%",
            //   margin: 5,
        },
    });

    const classes = useStyles();

    return (
        <span onClick={onClick} className={classes.selectbutton}>
            {children}
        </span>
    );
};

export default SelectButton;
