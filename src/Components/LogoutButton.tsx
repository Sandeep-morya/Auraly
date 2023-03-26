import React from "react";
type Props = {};

const client_id = import.meta.env.VITE_GOOGLE_ID;

function handleLogout() {
	console.log("logoout");
}

const LogoutButton = (props: Props) => {
	return <div>logout</div>;
};

export default LogoutButton;
