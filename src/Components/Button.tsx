import { Box, useTheme } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
type Props = {
	children: React.ReactNode;
	url?: string;
};

const Button = ({ children, url }: Props) => {
	const theme = useTheme();
	const navigate = useNavigate();
	const location = useLocation();
	return (
		<Box
			onClick={() => navigate(url ? url : location.pathname)}
			sx={{
				cursor: "pointer",
				padding: "0.3rem 0.8rem",
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
