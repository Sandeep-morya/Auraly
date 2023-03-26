import React from "react";
import { GoogleLogout } from "react-google-login";
type Props = {};

const client_id = import.meta.env.VITE_GOOGLE_ID;

function handleLogout() {
	console.log("logoout");
}

const LogoutButton = (props: Props) => {
	return (
		<div>
			<GoogleLogout
				clientId={client_id}
				buttonText="Logout"
				onLogoutSuccess={handleLogout}
			/>
		</div>
	);
};

export default LogoutButton;
