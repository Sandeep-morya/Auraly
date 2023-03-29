import { Box, Stack, useTheme } from "@mui/material";
import React, { useContext } from "react";
import Billboard from "../Components/Billboard";
import Loader from "../Components/Loader";
import Navbar from "../Components/Navbar";
import VideoGrid from "../Components/VideoGrid";
import { useAppSelector } from "../Hooks/Redux_hooks";

type Props = {};

const Home = (props: Props) => {
	const searchResult = useAppSelector((store) => store.searchData);

	return (
		<Stack width="100%" top="0">
			<Box
				sx={{
					width: "100%",
					height: "75vh",
					position: "sticky",
					top: "0",
				}}>
				<Navbar />
				<Billboard />

				{searchResult.loading && <Loader />}
			</Box>

			<Box
				sx={{
					width: "100%",
					padding: "1rem",
					position: "sticky",
					top: "0",
					backdropFilter: "blur(40px) brightness(90%)",
				}}>
				{searchResult.list.length > 0 && (
					<VideoGrid title="Recommended" items={searchResult.list} />
				)}
			</Box>
		</Stack>
	);
};

export default Home;
