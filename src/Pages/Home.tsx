import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import { MdOutlineQueryStats } from "react-icons/md";
import { useDispatch } from "react-redux";
import Billboard from "../Components/Billboard";
import Boot from "../Components/Boot";
import Card from "../Components/Card";
import Heading from "../Components/Heading";
import Navbar from "../Components/Navbar";
import SearchBox from "../Components/SearchBox";
import VideoGrid from "../Components/VideoGrid";
import { useAppDispatch, useAppSelector } from "../Hooks/Redux_hooks";
import useDebounce from "../Hooks/useDebounce";
import { PlayerDataContext } from "../Provider/PlayerContextProvider";
import getSearchResult from "../Redux/searchData/search_data.actions";

type Props = {};

const Home = (props: Props) => {
	const searchResult = useAppSelector((store) => store.searchData);
	const dispatch = useAppDispatch();
	const { playerData } = useContext(PlayerDataContext);

	return (
		<Stack width="100%" top="0" gap={"2rem"}>
			<Box
				sx={{
					width: "100%",
					height: "75vh",
					position: "relative",
				}}>
				<Navbar />
				<Billboard />
			</Box>

			<Box
				sx={{
					width: "100%",
					padding: "1rem",
				}}>
				{searchResult.list.length > 0 && (
					<VideoGrid title="Recommended" items={searchResult.list} />
				)}
			</Box>
		</Stack>
	);
};

export default Home;
