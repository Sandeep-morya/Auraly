import { Stack } from "@mui/material";
import React from "react";
import SearchBox from "../Components/SearchBox";
import VideoGrid from "../Components/VideoGrid";
import { useAppDispatch, useAppSelector } from "../Hooks/Redux_hooks";
import useDebounce from "../Hooks/useDebounce";
import getSearchResult from "../Redux/searchData/search_data.actions";
import { getTrendingVideos } from "../Redux/trendingVideos/tv.action";

type Props = {};

const Videos = (props: Props) => {
	const [text, setText] = React.useState("");
	const query = useDebounce(text);
	const searchResult = useAppSelector((store) => store.searchData);
	const trendingVideos = useAppSelector((store) => store.trendingVideos);

	const dispatch = useAppDispatch();

	React.useEffect(() => {
		getSearchResult(dispatch, query);
	}, [query]);

	React.useEffect(() => {
		getTrendingVideos(dispatch, trendingVideos.list);
	}, []);

	return (
		<Stack width="100%" position="relative" top="0" gap={"2rem"}>
			<SearchBox {...{ text, setText }} />
			{searchResult.list.length > 0 && text != "" && (
				<VideoGrid
					audio={false}
					title={text ? "Search Result" : "Recent Search"}
					items={searchResult.list}
				/>
			)}
			<VideoGrid
				audio={false}
				title="Latest Videos"
				items={trendingVideos.list}
			/>
		</Stack>
	);
};

export default Videos;
