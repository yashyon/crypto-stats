import axios from "axios";
import { useEffect, useState } from "react";
import { HistoricalChart } from "../../config/api";
import { Line } from "react-chartjs-2";
import {
    CircularProgress,
} from "@material-ui/core";
// import SelectButton from "../SelectButton";
import SelectButton from "../SelectButton/SelectButton";
import { chartDays } from "../../config/data";
import { CryptoState } from "../../context/CryptoContext";
import { useStyles } from './styles';

const CoinInfo = ({ coin }) => {
    const [historicData, setHistoricData] = useState();
    const [days, setDays] = useState(1);
    const { currency } = CryptoState();
    const [flag, setflag] = useState(false);
    const classes = useStyles();

    const fetchHistoricData = async () => {
        const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
        setflag(true);
        setHistoricData(data.prices);
    };

    console.log(coin);

    useEffect(() => {
        fetchHistoricData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [days]);

    return (
        <div className={classes.container}>
            {!historicData | flag === false ? (
                <CircularProgress
                    style={{ color: "darkblue" }}
                    size={250}
                    thickness={1}
                />
            ) : (
                <>
                    <Line
                        data={{
                            labels: historicData.map((coin) => {
                                let date = new Date(coin[0]);
                                let time =
                                    date.getHours() > 12
                                        ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                                        : `${date.getHours()}:${date.getMinutes()} AM`;
                                return days === 1 ? time : date.toLocaleDateString();
                            }),

                            datasets: [
                                {
                                    data: historicData.map((coin) => coin[1]),
                                    label: `Price ( Past ${days} Days ) in ${currency}`,
                                    borderColor: "darkblue",
                                },
                            ],
                        }}
                        options={{
                            elements: {
                                point: {
                                    radius: 1,
                                },
                            },
                        }}
                    />
                    <div
                        style={{
                            display: "flex",
                            marginTop: 20,
                            justifyContent: "space-around",
                            width: "100%",
                        }}
                    >
                        {chartDays.map((day) => (
                            <SelectButton
                                key={day.value}
                                onClick={() => {
                                    setDays(day.value);
                                    setflag(false);
                                }}
                                selected={day.value === days}
                            >
                                {day.label}
                            </SelectButton>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default CoinInfo;
