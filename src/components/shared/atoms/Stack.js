import React from "react";

export default function Stack({ gap = 1, classes = "", children }) {
	return (
		<div
			style={{
				display: "grid",
				gap: `${gap * 0.625}rem`,
			}}
			className={classes}
		>
			{children}
		</div>
	);
}
