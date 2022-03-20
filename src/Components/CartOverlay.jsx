import { Link } from "react-router-dom";
import styled from "styled-components";
import CartItem from "./CartItem";

function CartOverlay(props) {
	return (
		<Background
			onClick={(e) => e.target === e.currentTarget && props.setCartOpen(false)}
		>
			<Overlay>
				<Title>
					<span>
						<strong>My Bag,</strong> 2 items
					</span>
				</Title>

				<Items>
					<CartItem currency={props.currency} overlay={true} />
					<CartItem currency={props.currency} overlay={true} />
					<CartItem currency={props.currency} overlay={true} />
				</Items>

				<Title>
					<strong>Total</strong>
					<strong>$ 100.00</strong>
				</Title>
				<Buttons>
					<Button
						to="/cart"
						color="white"
						onClick={() => props.setCartOpen(false)}
					>
						VIEW BAG
					</Button>
					<Button to="/checkout" color="#5ece7b">
						CHECKOUT
					</Button>
				</Buttons>
			</Overlay>
		</Background>
	);
}

const Background = styled.div`
	background-color: rgba(57, 55, 72, 0.22);
	position: fixed;
	top: 61px;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: 3;
	/* opacity: 0.5; */
	@media (max-width: 500px) {
		top: 111px;
	}
	@media (max-width: 335px) {
		top: 151px;
	}
`;

const Overlay = styled.div`
	position: absolute;
	padding: 10px;
	right: 30px;
	max-width: 400px;
	margin-left: 30px;
	background-color: white;
`;

const Title = styled.p`
	padding: 10px;
	display: flex;
	justify-content: space-between;
`;

const Items = styled.div`
	max-height: 50vh;
	overflow-x: hidden;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		width: 5px;
	}
	&::-webkit-scrollbar-track {
		background-color: #f1f1f1;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #888;
	}
`;

const Buttons = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;

const Button = styled(Link)`
	background-color: ${(props) => props.color};
	font-size: 0.8rem;
	font-family: "Raleway", sans-serif;
	color: ${(props) => (props.color === "white" ? "black" : "white")};
	display: flex;
	flex-direction: column;
	border: 1px solid black;
	margin: 5px;
	align-items: center;
	cursor: pointer;
	padding: 10px 30px;
	text-decoration: none;
	@media (max-width: 375px) {
		width: 100%;
	}
	&:hover {
		background-color: ${(props) =>
			props.color === "white" ? "lightgrey" : "green"};
	}
`;

export default CartOverlay;
