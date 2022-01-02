import { LinearProgress, Typography } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinInfo from "../../components/CoinInfo/CoinInfo";
import { SingleCoin } from "../../config/api";
import { numberWithCommas } from "../../components/CoinsTable/CoinsTable";
import { CryptoState } from "../../context/CryptoContext";
import parser from 'html-react-parser';
import useStyles from "./styles";

const CoinPage = () => {
    const { id } = useParams();
    const [coin, setCoin] = useState();

    const { currency, symbol } = CryptoState();

    const fetchCoin = async () => {
        const { data } = await axios.get(SingleCoin(id));
        setCoin(data);
    };

    useEffect(() => {
        fetchCoin();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const classes = useStyles();

    if (!coin) return <LinearProgress style={{ backgroundColor: "darkblue" }} />;

    return (
        <div className={classes.container}>
            <div className={classes.sidebar}>
                <img
                    src={coin?.image.large}
                    alt={coin?.name}
                    height="200"
                    style={{ marginBottom: 20 }}
                />
                <Typography variant="h3" className={classes.heading}>
                    {coin?.name}
                </Typography>
                <Typography variant="subtitle1" className={classes.description}>
                    {parser(coin?.description.en.split(". ")[0])}.
                </Typography>
                <div className={classes.marketData}>
                    <span style={{ display: "flex" }}>
                        <Typography variant="h5" className={classes.heading}>
                            Rank:
                        </Typography>
                        &nbsp; &nbsp;
                        <Typography
                            variant="h5"
                            style={{
                                fontFamily: "Montserrat",
                            }}
                        >
                            {numberWithCommas(coin?.market_cap_rank)}
                        </Typography>
                    </span>

                    <span style={{ display: "flex" }}>
                        <Typography variant="h5" className={classes.heading}>
                            Current Price:
                        </Typography>
                        &nbsp; &nbsp;
                        <Typography
                            variant="h5"
                            style={{
                                fontFamily: "Montserrat",
                            }}
                        >
                            {symbol}{" "}
                            {numberWithCommas(
                                coin?.market_data.current_price[currency.toLowerCase()]
                            )}
                        </Typography>
                    </span>
                    <span style={{ display: "flex" }}>
                        <Typography variant="h5" className={classes.heading}>
                            Market Cap:
                        </Typography>
                        &nbsp; &nbsp;
                        <Typography
                            variant="h5"
                            style={{
                                fontFamily: "Montserrat",
                            }}
                        >
                            {symbol}{" "}
                            {numberWithCommas(
                                coin?.market_data.market_cap[currency.toLowerCase()]
                                    .toString()
                                    .slice(0, -6)
                            )}
                            M
                        </Typography>
                    </span>
                </div>
            </div>
            <CoinInfo coin={coin} />
        </div>
    );
};

export default CoinPage;
