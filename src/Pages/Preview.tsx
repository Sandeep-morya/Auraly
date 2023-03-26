﻿import { Box, Stack, useTheme } from "@mui/material";
import Button from "../Components/BubbleButton";
import React, { useEffect, useContext, useState } from "react";
import { Format, PlayerDataType, SingleItem } from "../types";
import SelectBox from "../Components/SelectBox";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Description from "../Components/Description";
import VideoGrid from "../Components/VideoGrid";
import { useAppDispatch, useAppSelector } from "../Hooks/Redux_hooks";
import { useLocation, useParams } from "react-router-dom";
import { getSingle } from "../Redux/singleItem/single.action";
import { Navigate } from "react-router-dom";
import { PlayerDataContext } from "../Provider/PlayerContextProvider";

type Props = {};

const Preview = (props: Props) => {
	const theme = useTheme();
	const { id } = useParams();
	const { state } = useLocation();
	const videoRef = React.useRef<HTMLVideoElement>(null);
	const [format, setFormat] = React.useState({} as Format);
	const { playerData, setPlayerData } = useContext(PlayerDataContext);

	const dispatch = useAppDispatch();
	const searchResult = useAppSelector((store) => store.searchData);
	const { loading, error, data } = useAppSelector((store) => store.single);
	const [videoData, setVideoData] = useState(data);

	console.log("playerData" + playerData.current);

	useEffect(() => {
		const { current } = JSON.parse(
			localStorage.getItem("track") as string,
		) as PlayerDataType;
		setPlayerData({ ...playerData, active: false, muted: true, current });
	}, []);

	useEffect(() => {
		const previousData = JSON.parse(
			localStorage.getItem("trackData") as string,
		) as SingleItem;
		if (id === undefined) {
			return;
		} else if (previousData?.formats) {
			setVideoData(previousData);
		} else {
			getSingle(dispatch, id);
		}
	}, [id]);

	useEffect(() => {
		if (!loading) {
			setVideoData(data);
		}
	}, [loading]);

	useEffect(() => {
		if (videoData?.formats?.length > 0) {
			setFormat(videoData.formats[videoData.formats.length - 1]);
			localStorage.setItem("trackData", JSON.stringify(videoData));
		}
	}, [videoData]);

	console.log("preview rended");

	if (loading) {
		return <>Loading...</>;
	}

	if (error) {
		return <Navigate to={"/error"} />;
	}

	return (
		<Stack width="100%" position="relative" top="0" gap={"2rem"}>
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
				{/* Left side */}
				<Stack
					width={{
						xs: "100%",
						sm: "100%",
						md: "100%",
						lg: "70%",
						xl: "70%",
					}}>
					<Box>
						<video
							playsInline
							autoPlay
							controls
							onLoad={(e) => videoRef.current!.play()}
							onProgressCapture={(e) => console.log("rederd")}
							onTimeUpdate={(e) => {
								// setPlayerData({
								// 	...playerData,
								// 	current: videoRef.current?.currentTime,
								// });
								localStorage.setItem(
									"track",
									JSON.stringify({
										...playerData,
										active: true,
										current: videoRef.current?.currentTime,
									}),
								);
							}}
							preload="none"
							onPlay={() => console.log(videoRef.current?.currentTime)}
							onPause={() => console.log(videoRef.current?.currentTime)}
							// muted
							// muted
							ref={videoRef}
							src={
								state === "audio"
									? format.url + `#t=${playerData.current}`
									: format.url
							}
							poster={videoData.thumbnail[videoData.thumbnail?.length - 1].url}
							style={{
								width: "100%",
								aspectRatio: "1280/720",
								objectFit: "cover",
							}}></video>
					</Box>
					<Stack
						direction={{
							xs: "column",
							sm: "column",
							md: "row",
							lg: "row",
							xl: "row",
						}}
						gap="2rem"
						padding={"1rem"}
						justifyContent={"space-between"}
						alignItems="center">
						{/* change reselution */}
						{/*  */}
						<Stack
							direction="row"
							justifyContent={"flex-start"}
							alignItems="center"
							gap="2rem"
							width={{
								xs: "100%",
								sm: "100%",
								md: "100%",
								lg: "50%",
								xl: "50%",
							}}>
							<Stack alignSelf={"flex-start"}>
								<p>{videoData.title}</p>
								<p>{videoData.channelTitle}</p>
							</Stack>
							<FaRegHeart size="40" style={{}} />
						</Stack>

						<Stack
							width={{
								xs: "100%",
								sm: "100%",
								md: "100%",
								lg: "50%",
								xl: "50%",
							}}
							className="video_options"
							justifyContent="space-between"
							alignItems="center"
							direction="row">
							<SelectBox
								format={format}
								setFormat={setFormat}
								label="Formats"
								formats={videoData.formats}
							/>

							<Button
								size="lg"
								onClick={() => console.log(format.url)}
								style={{
									width: "40%",
									color: theme.palette.primary.contrastText,
								}}
								colorScheme={theme.palette.text.primary}>
								{"Download"}
							</Button>
						</Stack>
					</Stack>
					<Description
						description={videoData.description}
						keywords={videoData.keywords}
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
							title="Search Result"
							items={searchResult.list}
						/>
					)}
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Preview;
