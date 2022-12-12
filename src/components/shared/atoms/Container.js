import React from "react";

export default function Container({ children, classes = "" }) {
	return <div className={`container ${classes}`}>{children}</div>;
}
