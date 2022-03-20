import styled from "styled-components";
import CartItem from "./CartItem";

function Cart({ currency, cart }) {
	return (
		<Container>
			<Title>Cart</Title>
			<List>
				{cart.cart.map((cartItem) => (
					<CartItem
						key={cartItem.id}
						cartItem={cartItem}
						cart={cart}
						overlay={false}
						currency={currency}
					/>
				))}
			</List>
		</Container>
	);
}

const Container = styled.div`
	padding: 50px;
`;

const Title = styled.h1`
	font-size: 3rem;
	margin-bottom: 30px;
`;

const List = styled.div``;

export default Cart;
