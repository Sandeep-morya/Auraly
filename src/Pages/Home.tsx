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
import { getTrendingMusic } from "../Redux/trendingMusic/tm.action";
import { getTrendingVideos } from "../Redux/trendingVideos/tv.action";

type Props = {};

const Home = (props: Props) => {
	const [text, setText] = React.useState("");
	const query = useDebounce(text);
	const searchResult = useAppSelector((store) => store.searchData);
	const trendingVideos = useAppSelector((store) => store.trendingVideos);
	const trendingMusic = useAppSelector((store) => store.trendingMusic);
	const dispatch = useAppDispatch();

	// console.log(list);

	React.useEffect(() => {
		getSearchResult(dispatch, query);
	}, [query]);

	React.useEffect(() => {
		getTrendingVideos(dispatch, trendingVideos.list);
	}, []);

	React.useEffect(() => {
		getTrendingMusic(dispatch, trendingMusic.list);
	}, []);

	return (
		<Stack width="100%" position="relative" top="0" gap={"2rem"}>
			<SearchBox {...{ text, setText }} />
			{searchResult.list.length > 0 && (
				<VideoGrid
					title={text ? "Search Result" : "Recent Search"}
					items={searchResult.list}
				/>
			)}
			<VideoGrid
				audio={false}
				title="Trending Videos"
				items={trendingVideos.list}
			/>
			<VideoGrid
				video={false}
				title="Latest Music"
				items={trendingMusic.list}
			/>
		</Stack>
	);
};

export default Home;
