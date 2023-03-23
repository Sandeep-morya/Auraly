import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Billboard from "../Components/Billboard";
import Center from "../Components/Center";
import Navbar from "../Components/Navbar";

type Props = {};

const Home = (props: Props) => {
	return (
		<Stack width="100%" position="relative" top="0" gap={"1rem"}>
			<Navbar />
			<Billboard />
			<Center>
				<Stack>
					<Typography variant="h4">Trending</Typography>
					<Stack direction="row" gap="1rem"></Stack>
				</Stack>
			</Center>
		</Stack>
	);
};

export default Home;
