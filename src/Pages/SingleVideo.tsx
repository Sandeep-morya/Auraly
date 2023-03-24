import {
	Box,
	Chip,
	FormControl,
	InputLabel,
	Stack,
	useTheme,
} from "@mui/material";
import Button from "../Components/BubbleButton";
import React, { useEffect } from "react";
import SearchBox from "../Components/SearchBox";
import { Format } from "../types";
import { result } from "./data";
import "../Styles/single_video.css";
import SelectBox from "../Components/SelectBox";
import { FaDownload } from "react-icons/fa";
import Description from "../Components/Description";
import VideoGrid from "../Components/VideoGrid";
import useDebounce from "../Hooks/useDebounce";
import getSearchResult from "../Redux/searchData/search_data.actions";
import { useAppDispatch, useAppSelector } from "../Hooks/Redux_hooks";

type Props = {};

const SingleVideo = (props: Props) => {
	const theme = useTheme();

	const [text, setText] = React.useState("");
	const query = useDebounce(text);

	const [data, setData] = React.useState(result);
	const [format, setFormat] = React.useState(
		data.formats[data.formats.length - 1] as Format,
	);

	const videoRef = React.useRef<HTMLVideoElement>(null);
	const searchResult = useAppSelector((store) => store.searchData);
	const dispatch = useAppDispatch();

	useEffect(() => {
		// videoRef.current?.autoplay = true;
		// videoRef.current.muted = false;
		setTimeout(() => {
			videoRef.current!.play();
		}, 5000);
	}, []);

	useEffect(() => {
		getSearchResult(dispatch, query);
	}, [query]);
	return (
		<Stack width="100%" position="relative" top="0" gap={"2rem"}>
			<SearchBox {...{ text, setText }} />
			<Stack
				width={"100%"}
				maxHeight="max-content"
				direction={{
					xs: "column",
					sm: "column",
					md: "column",
					lg: "row",
					xl: "row",
				}}
				gap="2rem"
				justifyContent={"space-between"}>
				{/* Left side */}
				<Stack
					height="100vh"
					sx={{
						overflowY: "scroll",
						overflowX: "hidden",
						"&::-webkit-scrollbar": { display: "none" },
					}}
					width={{
						xs: "100%",
						sm: "100%",
						md: "100%",
						lg: "70%",
						xl: "70%",
					}}>
					<Box className="single_video_div">
						<video
							playsInline
							autoPlay
							controls
							onLoad={(e) => videoRef.current!.play()}
							preload="none"
							// muted
							// muted
							ref={videoRef}
							src={format.url}
							poster={data.thumbnail[data.thumbnail.length - 1].url}
							className="single_video"></video>
					</Box>
					<Stack
						className="options"
						direction={{
							xs: "column",
							sm: "column",
							md: "column",
							lg: "row",
							xl: "row",
						}}
						gap="2rem"
						justifyContent={"space-between"}>
						{/* change reselution */}
						{/*  */}
						<Stack
							width={{
								xs: "100%",
								sm: "100%",
								md: "100%",
								lg: "50%",
								xl: "50%",
							}}>
							<p>{data.title}</p>
							<p>{data.channelTitle}</p>
						</Stack>

						<Stack
							width={{
								xs: "100%",
								sm: "100%",
								md: "100%",
								lg: "50%",
								xl: "50%",
							}}
							gap="2rem"
							direction="row">
							<SelectBox
								format={format}
								setFormat={setFormat}
								label="Formats"
								formats={data.formats}
							/>
							<Button
								leftIcon={<FaDownload />}
								size="lg"
								onClick={() => console.log(format)}
								style={{ width: "40%", color: theme.palette.text.primary }}
								colorScheme={theme.palette.secondary.main}>
								{"Downlaod"}
							</Button>
						</Stack>
					</Stack>
					<Description
						description={data.description}
						keywords={data.keywords}
					/>
				</Stack>

				{/* RightSide */}
				<Stack
					height="100vh"
					sx={{
						overflowY: "scroll",
						overflowX: "hidden",
						"&::-webkit-scrollbar": { display: "none" },
					}}
					padding={"0 1rem"}
					width={{
						xs: "100%",
						sm: "100%",
						md: "100%",
						lg: "30%",
						xl: "30%",
					}}>
					{searchResult.list.length > 0 && (
						<VideoGrid
							fixedColumns="1fr 1fr"
							audio={false}
							title={text ? "Search Result" : "Recent Search"}
							items={searchResult.list}
						/>
					)}
				</Stack>
			</Stack>
		</Stack>
	);
};

export default SingleVideo;
