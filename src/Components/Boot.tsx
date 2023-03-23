import { Stack } from "@mui/material";
import React from "react";
import "../Styles/boot.css";

type Props = {};

const Boot = (props: Props) => {
	return (
		<Stack
			width={"100%"}
			height="100vh"
			alignItems={"center"}
			justifyContent="center"
			bgcolor={"black"}>
			<img className="boot" src="/auraly_logo.png" alt="auraly_logo" />
		</Stack>
	);
};

export default Boot;
