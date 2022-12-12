import React from "react";
import Container from "../components/shared/atoms/Container";
import PageWrapper from "../components/shared/template/PageWrapper";
import FormSignupPlumber from "../features/Auth/components/organisms/FormSignupPlumber";

export default function ArtisianSignup() {
	return (
		<PageWrapper>
			<Container>
				<div className='con_1_1'>
					<FormSignupPlumber />
				</div>
			</Container>
		</PageWrapper>
	);
}
