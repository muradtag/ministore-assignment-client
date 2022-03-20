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
	const [cart, setCart] = useState([]);

	let addItemToCart = (item) => {
		let updatedObject;
		item = {
			...item,
			id: `${item.productId}?${Object.values(item.attributes).join("_")}`,
		};
		if (cart.find((cartItem) => cartItem.id === item.id)) {
			updatedObject = cart.map((cartItem) => {
				return cartItem.id === item.id
					? { ...cartItem, quantity: ++cartItem.quantity }
					: { ...cartItem };
			});
			setCart(updatedObject);
		} else {
			setCart((prevcart) => [...prevcart, item]);
		}
		console.log(cart);
	};

	const removeItemFromCart = (itemId) => {
		let updatedObject;
		if (cart.find((cartItem) => cartItem.id === itemId).quantity > 1) {
			updatedObject = cart.map((cartItem) => {
				return cartItem.id === itemId
					? { ...cartItem, quantity: --cartItem.quantity }
					: { ...cartItem };
			});
			setCart(updatedObject);
		} else {
			setCart(cart.filter((cartItem) => cartItem.id !== itemId));
		}
	};

	return (
		<>
			<Header
				currency={{ currency, setCurrency }}
				category={{ category, setCategory }}
				cart={{ cart, addItemToCart, removeItemFromCart }}
			/>
			<Container>
				<Routes>
					<Route
						path={`/`}
						element={<Category title={category} currency={currency} />}
					/>
					<Route
						path={`/:productId`}
						element={
							<Product
								cart={{ cart, addItemToCart, removeItemFromCart }}
								currency={currency}
							/>
						}
					/>
					<Route
						path={`/cart`}
						element={
							<Cart
								cart={{ cart, addItemToCart, removeItemFromCart }}
								currency={currency}
							/>
						}
					/>
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
