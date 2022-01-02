import { AppBar, Container, MenuItem, Select, Toolbar, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../../context/CryptoContext";

import { useStyles } from './styles';

const Header = () => {
    const classes = useStyles();
    const { currency, setCurrency } = CryptoState();

    const history = useHistory();

    return (
        <AppBar position="static" className={classes.main}>
            <Container >
                <Toolbar >
                    <Typography
                        onClick={() => history.push(`/`)}
                        variant="h6"
                        className={classes.title}
                    >
                        Crypto Stats
                    </Typography>
                    <Select
                        variant="outlined"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={currency}
                        style={{ width: 100, height: 40, marginLeft: 15, color: "black", background: "white" }}
                        onChange={(e) => setCurrency(e.target.value)}
                    >
                        <MenuItem value={"USD"}>USD</MenuItem>
                        <MenuItem value={"INR"}>INR</MenuItem>
                    </Select>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
