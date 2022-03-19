import styled from "styled-components";
function CartOverlay(props) {
	return (
		<Background>
			<Overlay>
				<Title>
					<p>
						<strong>My Bag,</strong> 2 items
					</p>
				</Title>
				{/* Overlay Item */}
				<Title>
					<strong>Total</strong>
					<strong>$ 100.00</strong>
				</Title>
				<Buttons>
					<Button color="white">VIEW BAG</Button>
					<Button color="#5ece7b">CHECKOUT</Button>
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
	width: 300px;
	background-color: white;
`;

const Title = styled.p`
	padding: 10px;
	display: flex;
	justify-content: space-between;
`;

const Buttons = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

const Button = styled.button`
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
`;

export default CartOverlay;
