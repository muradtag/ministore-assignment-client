import logo from "./logo.svg";
import "./App.css";
import { gql, useQuery } from "@apollo/client";

// const GET_CURRENCIES = gql`
// 	query GetCurrencies {
// 		category(input: { title: "tech" }) {
// 			products {
// 				name
// 			}
// 		}
// 	}
// `;

function App() {
	// const { loading, error, data } = useQuery(GET_CURRENCIES);
	// if (loading) console.log("Loading...");
	// if (error) console.log("Error..");
	// console.log(data);
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
