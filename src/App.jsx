import { useState } from "react";
import Header from "./Components/Header";

function App() {
	const [currency, setCurrency] = useState("$");
	const [category, setCategory] = useState("all");
	return (
		<>
			<Header
				currency={{ currency, setCurrency }}
				category={{ category, setCategory }}
			/>
		</>
	);
}

export default App;
