import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { MdOutlineQueryStats } from "react-icons/md";
import { useDispatch } from "react-redux";
import Billboard from "../Components/Billboard";
import Card from "../Components/Card";
import Center from "../Components/Center";
import Heading from "../Components/Heading";
import Navbar from "../Components/Navbar";
import SearchBox from "../Components/SearchBox";
import VideoGrid from "../Components/VideoGrid";
import { useAppDispatch, useAppSelector } from "../Hooks/Redux_hooks";
import useDebounce from "../Hooks/useDebounce";
import getSearchResult from "../Redux/searchData/search_data.actions";
import { getTrendingVideos } from "../Redux/trendingVideos/tv.action";

type Props = {};

const Home = (props: Props) => {
	const searchResult = useAppSelector((store) => store.searchData);
	const trendingVideos = useAppSelector((store) => store.trendingVideos);
	const dispatch = useAppDispatch();

	// console.log(list);

	React.useEffect(() => {
		getTrendingVideos(dispatch, trendingVideos.list);
	}, []);

	return (
		<Stack width="100%" position="relative" top="0" gap={"2rem"}>
			{searchResult.list.length > 0 && (
				<VideoGrid title="Recent Search" items={searchResult.list} />
			)}
			<VideoGrid
				audio={false}
				title="Trending Videos"
				items={trendingVideos.list}
			/>
		</Stack>
	);
};

export default Home;
