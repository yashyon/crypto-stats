import { Container, Typography } from "@material-ui/core";
import Carousel from "./Carousel/Carousel";
import { useStyles } from "./styles";


const Banner = () => {
    const classes = useStyles();

    return (
        <div className={classes.banner}>
            <Container className={classes.bannerContent}>
                <div className={classes.tagline}>
                    <Typography
                        variant="h2"
                        style={{
                            fontWeight: "bold",
                            marginBottom: 15,
                            fontFamily: "Montserrat",
                        }}
                    >
                        Crypto Stats
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        style={{
                            color: "black",
                            textTransform: "capitalize",
                            fontFamily: "Montserrat",
                        }}
                    >
                        Get all the info regarding any Crypto Currency
                    </Typography>
                </div>
                <Carousel />
            </Container>
        </div>
    );
}

export default Banner;
