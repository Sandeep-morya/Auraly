import React from "react";

type Props = {};
const client_id = import.meta.env.VITE_GOOGLE_ID;

const LoginButton = (props: Props) => {
	console.log(client_id);

	function handleLogin(e: any) {
		console.log("login", e);
	}

	function handleFailure(e: any) {
		console.log("failure", e);
	}
	return <div id="signInButton">logiin</div>;
};

export default LoginButton;
