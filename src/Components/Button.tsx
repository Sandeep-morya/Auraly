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
				cursor: "pointer",
				padding: "0.5rem",
				borderRadius: "1rem",
				"&:hover": {
					opacity: "0.7",
					backgroundColor: theme.palette.primary.contrastText,
				},
			}}>
			{children}
		</Box>
	);
};

export default Button;
