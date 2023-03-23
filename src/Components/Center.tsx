import { Stack } from "@mui/material";
import React from "react";
interface Props {
	children: React.ReactNode;
}

const Center = ({ children }: Props) => {
	return (
		<Stack
			position={"relative"}
			width="100%"
			padding={{
				xs: "0 0.1rem",
				sm: "0 0.5rem",
				md: "0 1rem",
				lg: "0 5rem",
				xl: "0 15rem",
			}}>
			{children}
		</Stack>
	);
};

export default Center;
