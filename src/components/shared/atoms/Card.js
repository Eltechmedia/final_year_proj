import React from "react";

function Card({ children, classes = "" }) {
	return <div className={`bg-w br ${classes}`}>{children}</div>;
}

export default Card;
