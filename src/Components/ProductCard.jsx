import { useQuery } from "@apollo/client";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { GET_PRODUCT_CARD } from "../queries";

function ProductCard({ id, currency }) {
	const { loading, error, data } = useQuery(GET_PRODUCT_CARD, {
		variables: { id },
	});

	if (loading) return <Container>Loading...</Container>;
	if (error) return <Container>Error Loading Product.</Container>;

	const handleOpenProduct = () => {
		// TODO
	};

	return (
		<Container onClick={handleOpenProduct} $inStock={data.product.inStock}>
			<img
				src={data.product.gallery[0]}
				style={{ width: "300px", height: "300px", objectFit: "cover" }}
				alt={data.product.name}
			/>
			<div className="details">
				<Name>{data.product.name}</Name>
				<Price>
					{`${currency} ${
						data.product.prices.find(
							(price) => price.currency.symbol === currency
						).amount
					}`}
				</Price>
			</div>
			<AddButton>
				<FontAwesomeIcon icon={faCartPlus} size="2x" color="white" />
			</AddButton>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-start;
	padding: 16px;
	margin: 8px;
	cursor: pointer;
	&:hover {
		box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
	}
	&:hover button {
		visibility: visible;
	}
	&::before {
		content: "OUT OF STOCK";
		visibility: ${(props) => (props.$inStock ? "hidden" : "visible")};
		width: 300px;
		height: 300px;
		background-color: #f2f2f2;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		opacity: 0.7;
		top: 16px;
		left: 16px;
	}
`;

const Name = styled.h4`
	padding: 20px 0 5px 0;
	font-weight: lighter;
`;

const Price = styled.h4``;

const AddButton = styled.button`
	background-color: #57e582;
	position: absolute;
	visibility: hidden;
	width: 50px;
	height: 50px;
	border: 0;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 73%;
	left: 75%;
	cursor: pointer;
	box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
	&:hover {
		box-shadow: 0 0;
	}
`;

export default ProductCard;
