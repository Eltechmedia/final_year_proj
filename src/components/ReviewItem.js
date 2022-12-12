import React from "react";
import Card from "./shared/atoms/Card";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";
export default function ReviewItem() {
	return (
		<Card classes='p-2 grid_txt_2'>
			<div className='u-center grid_txt_1 js-center'>
				<figure className='small-ci ov-h'>
					<img
						style={{ objectFit: "cover", width: "100%" }}
						className='full'
						src='https://xsgames.co/randomusers/avatar.php?g=male'
						alt=''
					/>
				</figure>
				<h3>Hazee</h3>
				<span>Teacher</span>
			</div>
			<DetailsBox className='con_1_1 gap-25 u-center'>
				<div className=''>
					<h4>25</h4>
					<span className='h_sm col-gra-l cap'>completed jobs</span>
				</div>
				<div className=''>
					<h4 className='flexi gap-15'>
						<span>4.9</span>
						<div className='flexi'>
							<AiFillStar className='nano_svg' fill='gold' />
							<AiFillStar className='nano_svg' fill='gold' />
							<AiFillStar className='nano_svg' fill='gold' />
							<AiFillStar className='nano_svg' fill='gold' />
							<AiOutlineStar fill='grey' />
						</div>
					</h4>
					<span className='h_sm col-gra-l cap'>completed jobs</span>
				</div>
			</DetailsBox>
			<div className='grid_txt_2'>
				<button className='btn_large btn'>Book appointment</button>
				<button className='btn_large btn_bord col-pri '>call</button>
			</div>
		</Card>
	);
}

const DetailsBox = styled.article`
	--gap: 1.2rem;
`;
