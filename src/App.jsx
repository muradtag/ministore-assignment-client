import { useState } from "react";
import Header from "./Components/Header";
import Category from "./Components/Category";
import Product from "./Components/PDP";
import styled from "styled-components";
import Cart from "./Components/Cart";

function App() {
	const [currency, setCurrency] = useState("$");
	const [category, setCategory] = useState("all");
	return (
		<>
			<Header
				currency={{ currency, setCurrency }}
				category={{ category, setCategory }}
			/>
			<Container>
				<Category title={category} currency={currency} />
				<Product currency={currency} />
				<Cart currency={currency} />
			</Container>
		</>
	);
}

const Container = styled.div`
	margin-top: 71px;
	@media (max-width: 500px) {
		margin-top: 111px;
	}
	@media (max-width: 335px) {
		margin-top: 151px;
	}
`;

export default App;
