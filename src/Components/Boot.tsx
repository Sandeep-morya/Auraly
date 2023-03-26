import { Stack } from "@mui/material";
import React from "react";
import "../Styles/boot.css";
import Billboard from "./Billboard";

const Boot = () => {
	return (
		<Stack
			width={"100%"}
			height="100vh"
			alignItems={"center"}
			position="relative"
			justifyContent="center"
			bgcolor={"#121212"}>
			<img className="boot" src="/auraly_logo.png" alt="auraly_logo" />
			<Billboard />
		</Stack>
	);
};

export default Boot;
