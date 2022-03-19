import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GET_CATEGORY_NAMES } from "../queries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronDown,
	faCartShopping,
	faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import CurrencySwitcher from "./CurrencySwitcher";
import { useState } from "react";

function Header(props) {
	const { loading, error, data } = useQuery(GET_CATEGORY_NAMES);
	const [currencyOpen, setCurrencyOpen] = useState(true);
	const [cartOpen, setCartOpen] = useState(false);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error Loading category names.</div>;

	const handleClick = (event) => {
		if (event.currentTarget.classList.contains("cart")) {
			setCurrencyOpen(false);
			setCartOpen(!cartOpen);
		} else {
			setCurrencyOpen(!currencyOpen);
			setCartOpen(false);
		}
	};

	return (
		<StyledHeader>
			<Categories>
				{data.categories.map((category) => (
					<CategoryBtn
						$active={category.name === props.category.category}
						to="/"
						key={category.name}
						onClick={() => props.category.setCategory(category.name)}
					>
						{category.name.toUpperCase()}
					</CategoryBtn>
				))}
			</Categories>

			<Logo>
				<img src="images/logo.png" style={{ width: "2rem" }} alt="logo" />
			</Logo>

			<div className="options" style={{ float: "right", position: "relative" }}>
				<OptionBtn className="cart" onClick={handleClick}>
					<FontAwesomeIcon icon={faCartShopping} size="lg" />
				</OptionBtn>

				<OptionBtn className="currency" onClick={handleClick}>
					{props.currency.currency + " "}
					{!currencyOpen ? (
						<FontAwesomeIcon icon={faChevronDown} size="xs" />
					) : (
						<FontAwesomeIcon icon={faChevronUp} size="xs" />
					)}
				</OptionBtn>

				{currencyOpen && (
					<CurrencySwitcher
						currency={props.currency}
						onChoose={() => setCurrencyOpen(false)}
					/>
				)}
				{/* {cartOpen && <CurrencySwitcher />} */}
			</div>
		</StyledHeader>
	);
}

const StyledHeader = styled.header`
	display: flex;
	box-sizing: content-box;
	margin-top: 20px;
	justify-content: space-between;
	padding-left: 3vw;
	padding-right: 3vw;
	@media (max-width: 500px) {
		margin-top: 50px;
	}
	@media (max-width: 335px) {
		margin-top: 50px;
		flex-direction: column;
	}
`;

const CategoryBtn = styled(Link)`
	display: inline-block;
	padding: 10px;
	border-bottom: ${(props) => (props.$active ? "2px solid #57e582" : "0")};
	color: ${(props) => (props.$active ? "#57e582" : "#888")};
	text-decoration: none;
	&:hover {
		border-bottom: 2px solid #57e582;
	}
`;

const Categories = styled.div`
	display: inline-block;
`;

const Logo = styled.div`
	display: inline-block;
	margin: 0 auto;
	position: absolute;
	left: 50%;
	@media (max-width: 500px) {
		top: 2%;
	}
`;

const OptionBtn = styled.button`
	padding: 10px;
	border: 0;
	background-color: white;
	text-decoration: none;
	margin-right: 10px;
	font-size: 1rem;
	float: right;
	border-radius: 5px;
	cursor: pointer;
	&:hover {
		background-color: #ededed;
	}
`;

export default Header;
