import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { GET_PRODUCT } from "../queries";

function CartItem({ currency, overlay }) {
	const { loading, error, data } = useQuery(GET_PRODUCT, {
		// variables: { id: "jacket-canada-goosee" },
		variables: { id: "ps-5" },
	});

	if (loading) return <Container>Loading...</Container>;
	if (error) return <Container>Error...</Container>;

	return (
		<>
			<hr />
			<Container $overlay={overlay}>
				<Left>
					<Name>{data.product.name}</Name>

					<Brand>{data.product.brand}</Brand>

					<Price>{`${currency} ${
						data.product.prices.find(
							(price) => price.currency.symbol === currency
						).amount
					}`}</Price>

					{data.product.attributes.map((att) => (
						<Options key={att.id}>
							{att.items.map((item) =>
								att.type === "text" ? (
									<Option key={item.id} color="white" $active={false}>
										{item.value}
									</Option>
								) : (
									<Option
										key={item.id}
										$active={false}
										color={item.value}
									></Option>
								)
							)}
						</Options>
					))}
				</Left>

				<Right>
					<Quantity>
						<QuanButton $overlay={overlay} color="white">
							-
						</QuanButton>
						<p>2</p>
						<QuanButton $overlay={overlay} color="white">
							+
						</QuanButton>
					</Quantity>
					<Image $overlay={overlay}>
						<img
							src={data.product.gallery[0]}
							style={{ width: "100%", height: "100%", objectFit: "cover" }}
							alt={data.product.name}
						/>
					</Image>
				</Right>
			</Container>
		</>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	align-content: stretch;
	padding: 10px;
	font-size: ${(props) => (props.$overlay ? ".8rem" : "1.5rem")};
`;

const Left = styled.div`
	margin-right: 50px;
`;

const Right = styled.div`
	display: flex;
`;

const Quantity = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin-right: 10px;
`;

const Name = styled.p`
	font-weight: bold;
	font-size: 120%;
`;

const Brand = styled.p``;

const Price = styled.p`
	font-weight: bold;
	padding: 15px 0px;
`;

const Options = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const Option = styled.div`
	min-width: 20px;
	min-height: 20px;
	padding: 5px;
	cursor: pointer;
	border: 2px solid black;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 2px;
	color: ${(props) => (props.$active ? "white" : "black")};
	background-color: ${(props) => {
		return props.color === "white"
			? props.$active
				? "black"
				: "white"
			: props.color;
	}};
	opacity: ${(props) => (props.$active ? "1" : "0.5")};
	font-size: 70%;
	font-family: sans-serif;
	&:hover {
		opacity: 1;
	}
`;

const QuanButton = styled.button`
	width: ${(props) => (props.$overlay ? "25px" : "40px")};
	height: ${(props) => (props.$overlay ? "25px" : "40px")};
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: white;
	border: 1px solid #888;
	font-size: ${(props) => (props.$overlay ? "1rem" : "1.2rem")};
	cursor: pointer;
	&:hover {
		background-color: lightgrey;
	}
`;

const Image = styled.div`
	width: ${(props) => (props.$overlay ? "100px" : "200px")};
	height: ${(props) => (props.$overlay ? "100px" : "200px")};
`;

export default CartItem;
