import { Box, Stack, useTheme } from "@mui/material";
import React from "react";
import { useAppSelector } from "../Hooks/Redux_hooks";
// import { result as data } from "../Pages/data";
import { PlayerDataContext } from "../Provider/PlayerContextProvider";
import { SingleItemState } from "../Redux/singleItem/single.reducer";
import { SingleItem } from "../types";

const AudioPlayer = () => {
	const { loading, error, data } = useAppSelector((store) => store.single);
	const { playerData, setPlayerData } = React.useContext(PlayerDataContext);
	const { active, muted, paused } = playerData;
	const theme = useTheme();

	return (
		<Box
			sx={{
				width: {
					xs: "calc(100vw - 0.2rem)",
					sm: "calc(100vw - 1rem)",
					md: "calc(100vw - 2rem)",
					lg: "calc(100vw - 10rem)",
					xl: "calc(100vw - 30rem)",
				},
				position: "fixed",
				bottom: active ? "2rem" : "-10rem",
			}}>
			<Stack
				sx={{
					width: "100%",
					backgroundColor:
						theme.palette.text.primary === "#fff" ? "#f1f3f4" : "#2d2e34",
					borderRadius: {
						sx: "0.3rem",
						sm: "0.5rem",
						md: "0.5rem",
						lg: "10rem",
						xl: "10rem",
					},
					padding: "0.25rem 1rem",
					backdropFilter: "blur(5px) brightness(500%)",
					alignItems: "center",
					transition: "all 0.5s",
				}}
				gap="1rem"
				direction={{
					xs: "column",
					sm: "column",
					md: "row",
					lg: "row",
					xl: "row",
				}}>
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
					<Stack>
						<p
							style={{
								color: theme.palette.text.primary === "#fff" ? "#000" : "#fff",
							}}>
							{data.title}
						</p>
						<p
							style={{
								color: theme.palette.text.primary === "#fff" ? "#000" : "#fff",
							}}>
							{data.channelTitle}
						</p>
					</Stack>
				</Stack>

				<audio
					onPause={() => setPlayerData({ ...playerData, paused: true })}
					onPlay={() => setPlayerData({ ...playerData, paused: false })}
					src={data.formats[0].url}
					style={{ width: "100%" }}
					controls
					muted={muted}
					autoPlay={!paused}>
					{/* {data.adaptiveFormats.map((format) => (
					<source key={format.itag} src={format.url} type="audio/*" />
				))} */}
				</audio>
			</Stack>
		</Box>
	);
};

export default AudioPlayer;
