import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { GET_CURRENCIES } from "../queries";

function CurrencySwitcher(props) {
	const { loading, error, data } = useQuery(GET_CURRENCIES);
	if (loading) return <Container>Loading...</Container>;
	if (error) return <Container>Error Loading Currencies. Try Again.</Container>;

	const handleClick = (currency) => {
		props.onChoose();
		props.currency.setCurrency(currency);
	};

	return (
		<Container>
			{data.currencies.map((currency) => (
				<Button
					key={currency.label}
					$active={currency.symbol === props.currency.currency}
					onClick={() => handleClick(currency.symbol)}
				>
					<strong style={{ fontSize: "1rem" }}>{currency.symbol}</strong>
					{"  " + currency.label}
				</Button>
			))}
		</Container>
	);
}

const Container = styled.div`
	position: absolute;
	width: 100px;
	right: 60px;
	top: 96%;
	border-radius: 5px;
	box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
	background-color: white;
	padding: 5px 0;
`;

const Button = styled.button`
	width: 100%;
	background-color: white;
	border: 0;
	padding: 5px 0;
	cursor: pointer;
	background-color: ${(props) => (props.$active ? "#f2f2f2" : "white")};
	&:hover {
		background-color: #f2f2f2;
	}
`;

export default CurrencySwitcher;
