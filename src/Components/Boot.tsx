import { Stack } from "@mui/material";
import React from "react";
import "../Styles/boot.css";

const Boot = () => {
	return (
		<Stack
			width={"100%"}
			height="100vh"
			alignItems={"center"}
			justifyContent="center"
			bgcolor={"#121212"}>
			<img className="boot" src="/auraly_logo.png" alt="auraly_logo" />
		</Stack>
	);
};

export default Boot;
