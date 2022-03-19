import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { GET_CATEGORY } from "../queries";
import ProductCard from "./ProductCard";

function Category({ title, currency }) {
	const { loading, error, data } = useQuery(GET_CATEGORY, {
		variables: { title },
	});

	if (loading) return <Container>Loading...</Container>;
	if (error) return <Container>Error Loading Products</Container>;

	console.log(data.category.products);

	return (
		<Container>
			<Title>{title.charAt(0).toUpperCase() + title.slice(1)}</Title>
			<List>
				{data.category.products.map((product) => (
					<ProductCard key={product.id} id={product.id} currency={currency} />
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

const List = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
`;

export default Category;
