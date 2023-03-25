import { Box, Stack, useTheme } from "@mui/material";
import React from "react";
import { FaStackOverflow } from "react-icons/fa";
import { useParams } from "react-router-dom";
import AudioPlayer from "../Components/AudioPlayer";
import SearchBox from "../Components/SearchBox";
import { useAppSelector } from "../Hooks/Redux_hooks";
import useDebounce from "../Hooks/useDebounce";
import "../Styles/single_audio.css";

import { result } from "./data";

type Props = {};

const SingleAudio = (props: Props) => {
	const theme = useTheme();
	const { loading, error, data } = useAppSelector((store) => store.single);
	const [text, setText] = React.useState("");
	const query = useDebounce(text);
	const { id } = useParams();

	return (
		<Stack width="100%">
			<SearchBox {...{ text, setText }} />
			<Stack
				width={"100%"}
				maxHeight="max-content"
				direction={{
					xs: "column",
					sm: "column",
					md: "row",
					lg: "row",
					xl: "row",
				}}
				gap="2rem"
				justifyContent={"space-between"}>
				{/* Thumbnail */}
				<Box className="thumbnail_div"></Box>
				{/* Playlist or search result */}
				<Stack className="playlist_div"></Stack>
			</Stack>
		</Stack>
	);
};

export default SingleAudio;
