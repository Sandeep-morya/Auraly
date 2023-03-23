import { Box, useTheme } from "@mui/material";
import React from "react";
type Props = {
	children: React.ReactNode;
};

const Button = ({ children }: Props) => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				color: theme.palette.text.primary,
				cursor: "pointer",
				"&:hover": { opacity: "0.7" },
			}}>
			{children}
		</Box>
	);
};

export default Button;
