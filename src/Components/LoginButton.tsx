import React from "react";
import GoogleLogin from "react-google-login";

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
	return (
		<div id="signInButton">
			<GoogleLogin
				clientId={client_id}
				buttonText="Login"
				onSuccess={handleLogin}
				onFailure={handleFailure}
				cookiePolicy="single_host_origin"
				isSignedIn={true}
			/>
		</div>
	);
};

export default LoginButton;
