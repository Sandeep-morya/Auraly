import { Box, Stack, Typography } from "@mui/material";
import React from "react";

type Props = {
	title: string;
};

const Heading = ({ title }: Props) => {
	return (
		<Stack maxWidth={"max-content"}>
			<Typography variant="h5" fontWeight={"700"} letterSpacing=".15rem">
				{title}
			</Typography>
			<Box width="50%" height=".2rem" bgcolor={"white"}></Box>
		</Stack>
	);
};

export default Heading;
