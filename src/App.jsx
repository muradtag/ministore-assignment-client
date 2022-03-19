import { useState } from "react";
import Header from "./Components/Header";
import Category from "./Components/Category";

function App() {
	const [currency, setCurrency] = useState("$");
	const [category, setCategory] = useState("all");
	return (
		<>
			<Header
				currency={{ currency, setCurrency }}
				category={{ category, setCategory }}
			/>
			<Category title={category} currency={currency} />
		</>
	);
}

export default App;
