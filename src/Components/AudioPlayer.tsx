import { Box, Stack, useTheme } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../Hooks/Redux_hooks";
// import { result as data } from "../Pages/data";
import { PlayerDataContext } from "../Provider/PlayerContextProvider";
import { SingleItemState } from "../Redux/singleItem/single.reducer";
import { PlayerDataType, SingleItem } from "../types";

const AudioPlayer = () => {
	const { loading, error, data } = useAppSelector((store) => store.single);
	const { playerData, setPlayerData } = React.useContext(PlayerDataContext);
	const audioRef = React.useRef<HTMLAudioElement>(null);
	const { active, muted, paused, current } = playerData;
	const theme = useTheme();
	const navigate = useNavigate();

	const location = useLocation();

	console.log(location, active);

	React.useEffect(() => {
		const track = JSON.parse(
			localStorage.getItem("track") as string,
		) as PlayerDataType;
		setPlayerData(
			location.pathname.includes("preview")
				? {
						...playerData,
						active: false,
						muted: true,
						current: audioRef.current?.currentTime,
				  }
				: {
						...playerData,
						active: location.state ? true : active,
						muted: false,
						current: track?.current || 0,
				  },
		);
	}, [location]);

	console.log("audio Player comrended");

	if (!active) {
		return <></>;
	}

	return (
		<Box
			onClick={() => {
				navigate("/preview/" + data.title, {
					state: "audio",
				});
			}}
			sx={{
				width: {
					xs: "calc(100vw - 0.2rem)",
					sm: "calc(100vw - 1rem)",
					md: "calc(100vw - 2rem)",
					lg: "calc(100vw - 10rem)",
					xl: "calc(100vw - 30rem)",
				},
				position: "fixed",
				bottom: playerData.active ? "2rem" : "-10rem" /*  {
					xs: active ? "7rem" : "-10rem",
					sm: active ? "7rem" : "-10rem",
					md: active ? "2rem" : "-10rem",
				} */,
				boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
			}}>
			<Stack
				sx={{
					width: "100%",
					position: "relative",

					borderRadius: "0.5rem",
					padding: "0.5rem",
					backdropFilter: "blur(5px) brightness(500%)",
					alignItems: "center",
					transition: "all 0.5s",
					overflow: "hidden",
				}}
				gap="1rem"
				direction={{
					xs: "column",
					sm: "column",
					md: "row",
					lg: "row",
					xl: "row",
				}}>
				<img
					style={{
						width: "100%",
						position: "absolute",
						filter: "blur(5px) brightness(50%)",
						objectFit: "cover",
					}}
					src={data.thumbnail[data.thumbnail.length - 1].url}
					alt=""
				/>

				<Stack
					width={{
						xs: "100%",
						sm: "100%",
						md: "45%",
						lg: "45%",
						xl: "45%",
					}}
					direction={"row"}
					alignItems="center"
					gap="1rem">
					<Box
						sx={{
							width: "5rem",
							height: "100%",
							aspectRatio: "1",
							borderRadius: "50%",
							position: "relative",
							overflow: "hidden",

							boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
							animation: !paused
								? "animateRound 5s infinite 0s forwards linear"
								: "none",
						}}>
						<img
							style={{
								height: "6rem",
								width: "5rem",
								position: "absolute",
								top: "50%",
								transform: "translateY(-50%)",
								objectFit: "cover",
							}}
							src={data.thumbnail[data.thumbnail.length - 1].url}
							alt=""
						/>
					</Box>
					<Stack
						sx={{
							zIndex: "2",
							fontWeight: "600",
							color: "white",
						}}>
						<p>{data.title.slice(0, 30) + "..."}</p>
						<p>{data.channelTitle}</p>
					</Stack>
				</Stack>

				<audio
					onPause={() => setPlayerData({ ...playerData, paused: true })}
					onPlay={() =>
						setPlayerData({ ...playerData, muted: false, paused: false })
					}
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
								current: audioRef.current?.currentTime,
							}),
						);
					}}
					ref={audioRef}
					src={`${data.formats[data.formats.length - 1].url}#t=${
						playerData.current
					}`}
					style={{ width: "100%" }}
					controls
					muted={playerData.muted}
					autoPlay>
					{/* {data.adaptiveFormats.map((format) => (
					<source key={format.itag} src={format.url} type="audio/*" />
				))} */}
				</audio>
			</Stack>
		</Box>
	);
};

export default AudioPlayer;
