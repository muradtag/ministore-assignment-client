import { gql } from "@apollo/client";

export const GET_CATEGORY_NAMES = gql`
	query GetCategories {
		categories {
			name
		}
	}
`;

export const GET_CURRENCIES = gql`
	query GetCurrencies {
		currencies {
			label
			symbol
		}
	}
`;

export const GET_CATEGORY = gql`
	query GetCategory($title: String!) {
		category(input: { title: $title }) {
			products {
				id
			}
		}
	}
`;

export const GET_PRODUCT_CARD = gql`
	query GetProduct($id: String!) {
		product(id: $id) {
			name
			id
			inStock
			gallery
			prices {
				amount
				currency {
					label
					symbol
				}
			}
		}
	}
`;
