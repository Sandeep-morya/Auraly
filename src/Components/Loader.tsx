import React from "react";
import "../Styles/loading.css";

type Props = {};

const Loader = (props: Props) => {
	return (
		<section className="loader">
			<div className="lds-roller">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</section>
	);
};

export default Loader;
