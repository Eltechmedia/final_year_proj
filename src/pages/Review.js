import React from "react";
import styled from "styled-components";
import ReviewItem from "../components/ReviewItem";

export default function Review() {
	return (
		<Wrapper className='div_41'>
			<ReviewItem />
			<ReviewItem />
			<ReviewItem />
			<ReviewItem />
			<ReviewItem />
		</Wrapper>
	);
}
const Wrapper = styled.div``;
