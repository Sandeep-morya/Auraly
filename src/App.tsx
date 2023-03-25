import "./App.css";
import Boot from "./Components/Boot";
import React, { useState, useEffect, useContext } from "react";
import { Stack } from "@mui/system";
import Navbar from "./Components/Navbar";
import {
	createTheme,
	CssBaseline,
	ThemeProvider,
	useMediaQuery,
} from "@mui/material";
import AllRoutes from "./Routes";
import AudioPlayer from "./Components/AudioPlayer";
import { useLocation } from "react-router-dom";
import { PlayerDataContext } from "./Provider/PlayerContextProvider";

function App() {
	const [hidden, setHidden] = useState(true);
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	const { playerData, setPlayerData } = useContext(PlayerDataContext);

	const { pathname } = useLocation();

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
		const id = setTimeout(() => {
			setHidden(true);
		}, 1500);

		return () => {
			clearInterval(id);
		};
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{!hidden && <Boot />}
			{hidden && (
				<Stack
					width="100%"
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
