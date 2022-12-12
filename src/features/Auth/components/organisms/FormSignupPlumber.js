import React from "react";
import Select from "../../../../components/shared/molecules/form/Select";
import Card from "../../../../components/shared/atoms/Card";
import Field from "../../../../components/shared/molecules/form/Field";

export default function FormSignupPlumber() {
	return (
		<Card>
			<form action='' className='form_pkg'>
				<div className='form_2'>
					<Field label={"first name"} placeholder={"e.g elon"} />
					<Field label={"last name"} placeholder={"e.g musk"} />
				</div>
				<Field label={"Date of birth"} placeholder={"enter your email"} type='date' />
				<Select
					label='qualification'
					options={[
						{
							label: "BSC",
							value: "bsc",
						},
						{
							label: "OND",
							value: "nd",
						},
					]}
				/>
				<Field label={"email"} placeholder={"enter your email"} type='date' />
				<Field label={"password"} type='password' placeholder={"enter password"} />
				<Field label={"confirm password"} type='password' placeholder={"confirm password"} />
				<button className='btn_large btn '>submit</button>
			</form>
		</Card>
	);
}
