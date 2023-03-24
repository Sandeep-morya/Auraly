import { Stack } from "@mui/material";
import React from "react";
import SearchBox from "../Components/SearchBox";
import VideoGrid from "../Components/VideoGrid";
import { useAppDispatch, useAppSelector } from "../Hooks/Redux_hooks";
import useDebounce from "../Hooks/useDebounce";
import getSearchResult from "../Redux/searchData/search_data.actions";
import { getTrendingMusic } from "../Redux/trendingMusic/tm.action";

type Props = {};

const Music = (props: Props) => {
	const [text, setText] = React.useState("");
	const query = useDebounce(text);

	const searchResult = useAppSelector((store) => store.searchData);
	const trendingMusic = useAppSelector((store) => store.trendingMusic);

	const dispatch = useAppDispatch();

	React.useEffect(() => {
		getSearchResult(dispatch, query);
	}, [query]);

	React.useEffect(() => {
		getTrendingMusic(dispatch, trendingMusic.list);
	}, []);

	return (
		<Stack width="100%" position="relative" top="0" gap={"2rem"}>
			<SearchBox {...{ text, setText }} />
			{searchResult.list.length > 0 && (
				<VideoGrid
					video={false}
					title={text ? "Search Result" : "Recent Search"}
					items={searchResult.list}
				/>
			)}
			<VideoGrid
				video={false}
				title="Latest Music"
				items={trendingMusic.list}
			/>
		</Stack>
	);
};

export default Music;
