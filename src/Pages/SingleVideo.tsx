import { Box, Button, Stack } from "@mui/material";
import React, { useEffect } from "react";
import SearchBox from "../Components/SearchBox";
import { Format } from "../types";
import { result } from "./data";
import "../Styles/single_video.css";

type Props = {};

const SingleVideo = (props: Props) => {
	const [text, setText] = React.useState("");
	const [data, setData] = React.useState(result);
	const [format, setFormat] = React.useState({} as Format);

	const videoRef = React.useRef<HTMLVideoElement>(null);

	useEffect(() => {
		// videoRef.current?.autoplay = true;
		// videoRef.current.muted = false;
		setTimeout(() => {
			videoRef.current!.play();
		}, 5000);
	}, []);
	return (
		<Stack width="100%" position="relative" top="0" gap={"2rem"}>
			<SearchBox {...{ text, setText }} />
			<Stack
				width={"100%"}
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
							poster={data.thumbnail[data.thumbnail.length - 1].url}
							className="single_video">
							<source src={data.formats[data.formats.length - 1].url} />
						</video>
						<Box className="extra_menus">
							{/* change reselution */}
							<Box className="change_res"></Box>
							{/* Download Links */}
							<Box className="download_links"></Box>
							{/* play as music */}
							<Box className="play_as_music"></Box>
						</Box>
					</Box>
				</Stack>

				{/* RightSide */}
				<Stack
					border="1px solid red"
					width={{
						xs: "100%",
						sm: "100%",
						md: "100%",
						lg: "30%",
						xl: "30%",
					}}></Stack>
			</Stack>
		</Stack>
	);
};

export default SingleVideo;
