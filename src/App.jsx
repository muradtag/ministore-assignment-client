import { useState } from "react";
import Header from "./Components/Header";
import Category from "./Components/Category";
import Product from "./Components/PDP";
import styled from "styled-components";
import Cart from "./Components/Cart";
import { Route, Routes } from "react-router-dom";

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
				<Routes>
					<Route
						path={`/`}
						element={<Category title={category} currency={currency} />}
					/>
					<Route
						path={`/:productId`}
						element={<Product currency={currency} />}
					/>
					<Route path={`/cart`} element={<Cart currency={currency} />} />
				</Routes>
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
