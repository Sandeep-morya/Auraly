import { Divider, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import Navbar from "../Components/Navbar";

type Props = {
	code?: number;
	error?: string;
};

const Error = ({ code = 404, error = "Page Not Found" }: Props) => {
	return (
		<>
			<Navbar />
			<Stack
				width="100%"
				height={"90vh"}
				justifyContent="center"
				alignItems="center">
				<Stack direction="row" gap="1rem">
					<Typography variant="h5" color={grey[300]}>
						{code}
					</Typography>
					<Divider orientation="vertical" />
					<Typography variant="h5" color={grey[300]}>
						{error}
					</Typography>
				</Stack>
			</Stack>
		</>
	);
};

export default Error;
