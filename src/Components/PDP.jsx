import { useQuery } from "@apollo/client";
import HTMLReactParser from "html-react-parser";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { GET_PRODUCT } from "../queries";

function Product({ currency }) {
	let params = useParams();

	const { loading, error, data } = useQuery(GET_PRODUCT, {
		variables: { id: params.productId },
	});

	const [imageOpen, setImage] = useState("");
	const [item, setItem] = useState({});

	if (loading) return <Container>Loading...</Container>;
	if (error) return <Container>Error PDP</Container>;

	return (
		<Container>
			<Gallery>
				{data.product.gallery.map((image) => (
					<Icon key={image}>
						<img
							src={image}
							alt={image}
							style={{ width: "100%", height: "100%", objectFit: "cover" }}
							onClick={() => setImage(image)}
						/>
					</Icon>
				))}
			</Gallery>

			<Image onLoad={() => setImage(data.product.gallery[0])}>
				{data.product.gallery.map((image, index) => (
					<Layer key={index} $open={image === imageOpen}>
						<img
							src={image}
							alt={image}
							style={{
								position: "absolute",
								width: "100%",
								height: "100%",
								objectFit: "cover",
							}}
							onClick={() => setImage(image)}
						/>
					</Layer>
				))}
			</Image>

			<Data>
				<Name>{data.product.name}</Name>
				<Brand>{data.product.brand}</Brand>
				{data.product.attributes.map((att) => (
					<Attribute key={att.id}>
						<h4>{att.name.toUpperCase()}:</h4>
						<Options>
							{att.items.map((item) =>
								att.type === "text" ? (
									<Option key={item.id} color="white" $active={true}>
										{item.value}
									</Option>
								) : (
									<Option
										key={item.id}
										color={item.value}
										$active={true}
									></Option>
								)
							)}
						</Options>
					</Attribute>
				))}
				<Price>
					<h3>
						<strong>PRICE:</strong>
					</h3>
					<br />
					<h2>{`${currency} ${
						data.product.prices.find(
							(price) => price.currency.symbol === currency
						).amount
					}`}</h2>
				</Price>
				<AddButton>ADD TO CART</AddButton>
				<Description>{HTMLReactParser(data.product.description)}</Description>
			</Data>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	padding: 50px;
	flex-wrap: nowrap;
	@media (max-width: 1000px) {
		flex-wrap: wrap;
	}
`;

const Gallery = styled.div`
	display: flex;
	flex-shrink: 0;
	flex-direction: column;
	height: 500px;
	overflow-y: scroll;
	overflow-x: hidden;
	margin: 10px;
	&::-webkit-scrollbar {
		width: 5px;
	}
	&::-webkit-scrollbar-track {
		background-color: #f1f1f1;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #888;
	}
	@media (max-width: 760px) {
		flex-direction: row;
		overflow-y: hidden;
		overflow-x: scroll;
		width: 100%;
		height: auto;
		&::-webkit-scrollbar {
			height: 5px;
		}
	}
`;

const Icon = styled.div`
	width: 80px;
	height: 80px;
	width: 80px;
	margin-bottom: 10px;
	margin-right: 10px;
	cursor: pointer;
	flex-shrink: 0;
`;

const Image = styled.div`
	flex-shrink: 0;
	width: 500px;
	height: 500px;
	margin: 10px;
	position: relative;
	transition: all 0.5s ease-in-out;
	z-index: -1;
	@media (max-width: 760px) {
		width: 100%;
		height: 500px;
	}
`;

const Layer = styled.div`
	position: "absolute";
	width: "100%";
	height: "100%";
	object-fit: "cover";
	opacity: ${(props) => (props.$open ? 1 : 0)};
	transition: opacity 0.5s ease;
	z-index: -1;
`;

const Data = styled.div`
	margin: 10px;
	margin-left: 50px;
	display: flex;
	flex-direction: column;
	flex-shrink: 2;
	flex-grow: 2;
	@media (max-width: 1000px) {
		margin-left: 10px;
	}
`;

const Name = styled.h1`
	font-size: 2.5rem;
`;

const Brand = styled.h1`
	font-size: 2rem;
	color: #555;
	margin-bottom: 2rem;
`;

const Attribute = styled.div`
	font-family: "Roboto", sans-serif;
	font-size: 1rem;
`;

const Options = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const Option = styled.div`
	height: 45px;
	cursor: pointer;
	width: 63px;
	border: 2px solid black;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 5px;
	color: ${(props) => (props.$active ? "white" : "black")};
	background-color: ${(props) => {
		return props.color === "white"
			? props.$active
				? "black"
				: "white"
			: props.color;
	}};
	font-size: 1rem;
	opacity: ${(props) => (props.$active ? "1" : "0.5")};
	&:hover {
		opacity: 1;
	}
`;

const Price = styled.div`
	font-family: "Raleway", sans-serif;
	font-size: 1rem;
	margin-top: 2rem;
	margin-bottom: 30px;
`;

const AddButton = styled.button`
	background-color: #5ece7b;
	font-size: 1.1rem;
	font-family: "Raleway", sans-serif;
	color: white;
	border: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
	padding: 16px 32px;
	width: 292px;
	height: 52px;
	&:hover {
		background-color: #5ece5e;
	}
`;

const Description = styled.div`
	font-family: "Roboto", sans-serif;
	font-weight: normal;
	margin-top: 30px;
`;

export default Product;
