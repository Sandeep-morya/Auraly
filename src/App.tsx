import Boot from "./Components/Boot";
import React, { useState, useEffect, useContext } from "react";
import { Stack } from "@mui/system";
import Navbar from "./Components/Navbar";
import {
	Box,
	createTheme,
	CssBaseline,
	ThemeProvider,
	useMediaQuery,
} from "@mui/material";
import AllRoutes from "./Routes";
import AudioPlayer from "./Components/AudioPlayer";
import { useLocation } from "react-router-dom";
import { PlayerDataContext } from "./Provider/PlayerContextProvider";
import Billboard from "./Components/Billboard";
import { useAppSelector } from "./Hooks/Redux_hooks";

function App() {
	const [hidden, setHidden] = useState(false);
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	// const { playerData, setPlayerData } = useContext(PlayerDataContext);

	// const { pathname } = useLocation();
	const { loading: loading_1 } = useAppSelector(
		(store) => store.trendingVideos,
	);
	const { loading: loading_2 } = useAppSelector((store) => store.searchData);

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode: prefersDarkMode ? "dark" : "light",
				},
			}),
		[prefersDarkMode],
	);

	useEffect(() => {
		if (!loading_1 && !loading_2) {
			setHidden(true);
		}
	}, [loading_1, loading_2]);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{!hidden && <Boot />}
			{hidden && (
				<Stack
					width="100%"
					gap="2rem"
					padding={{
						xs: "0 0.1rem",
						sm: "0 0.5rem",
						md: "0 1rem",
						lg: "0 5rem",
						xl: "0 15rem",
					}}>
					<Navbar />

					<AllRoutes />

					<AudioPlayer />
				</Stack>
			)}
		</ThemeProvider>
	);
}

export default App;
