import Home from "../Pages/Home/Home";
import CoinPage from "../Pages/CoinPage/CoinPage";
import "../App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import useStyles from "./styles";

const App = () => {
	const classes = useStyles();

	return (
		<BrowserRouter>
			<div className={classes.App}>
				<Header />
				<Route path="/" component={Home} exact />
				<Route path="/coins/:id" component={CoinPage} exact />
			</div>
		</BrowserRouter>
	);
}

export default App;
