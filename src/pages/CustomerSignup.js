import React from "react";
import Container from "../components/shared/atoms/Container";
import PageWrapper from "../components/shared/template/PageWrapper";
import FormSignupCustomer from "../features/Auth/components/organisms/FormSignupCustomer";

export default function CustomerSignup() {
	return (
		<PageWrapper>
			<Container classes='con_1_1'>
				<FormSignupCustomer />
				<div className=''></div>
			</Container>
		</PageWrapper>
	);
}
