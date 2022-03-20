import styled from "styled-components";
import CartItem from "./CartItem";

function Cart(props) {
	return (
		<Container>
			<Title>Cart</Title>
			<List>
				<CartItem overlay={false} currency={props.currency} />
				<CartItem overlay={false} currency={props.currency} />
				<CartItem overlay={false} currency={props.currency} />
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
