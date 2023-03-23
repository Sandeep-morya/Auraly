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

type Props = {};

const Home = (props: Props) => {
	const [text, setText] = React.useState("trending");
	const query = useDebounce(text);
	const { loading, error, list } = useAppSelector((store) => store.searchData);
	const dispatch = useDispatch();

	console.log(list);

	React.useEffect(() => {
		getSearchResult(dispatch, query);
	}, [query]);

	return (
		<Stack width="100%" position="relative" top="0" gap={"1rem"}>
			<SearchBox {...{ text, setText }} />
			<VideoGrid title="Trending" items={list} />
		</Stack>
	);
};

export default Home;
