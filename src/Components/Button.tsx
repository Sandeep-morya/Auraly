import { Box } from "@mui/material";
import React from "react";
type Props = {
	children: React.ReactNode;
};

const Button = ({ children }: Props) => {
	return (
		<Box
			sx={{
				cursor: "pointer",
				"&:hover": { opacity: "0.7" },
			}}>
			{children}
		</Box>
	);
};

export default Button;
