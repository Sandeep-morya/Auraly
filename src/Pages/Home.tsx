import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Billboard from "../Components/Billboard";
import Card from "../Components/Card";
import Center from "../Components/Center";
import Navbar from "../Components/Navbar";
import { result } from "./data";

type Props = {};

const Home = (props: Props) => {
	return (
		<Stack width="100%" position="relative" top="0" gap={"1rem"}>
			<Navbar />
			<Billboard />
			<Center>
				<Stack gap={"1rem"}>
					<Typography variant="h4">Trending</Typography>
					<Stack flexWrap="wrap" direction="row" gap="1rem">
						{result.map((data) => (
							<Card
								key={data.id}
								data={data}

							/>
						))}
					</Stack>
				</Stack>
			</Center>
		</Stack>
	);
};

export default Home;
