import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Container from "../components/shared/atoms/Container";
import Stack from "../components/shared/atoms/Stack";
import PageWrapper from "../components/shared/template/PageWrapper";

export default function SignupPage() {
	return (
		<PageWrapper>
			<section className='mt-5'>
				<EntityPkg className='m-auto'>
					<Stack gap={2} classes='bord '>
						<Link to={"/signup/customer"} className='btn_med btn_bord br col-pri'>
							customer
						</Link>
						<span className='self-center col-gra-l'>or</span>
						<Link to={"/signup/artisian"} className='btn_med btn_bord br col-pri'>
							Artisian
						</Link>
					</Stack>
				</EntityPkg>
			</section>
		</PageWrapper>
	);
}
const EntityPkg = styled.div`
	max-width: 22rem;
`;
