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
const client_id = import.meta.env.VITE_GOOGLE_ID;

function App() {
	const [hidden, setHidden] = useState(false);
	// const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	// const { playerData, setPlayerData } = useContext(PlayerDataContext);

	// const { pathname } = useLocation();

	const { loading } = useAppSelector((store) => store.searchData);

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode: "dark",
				},
			}),
		[],
	);

	useEffect(() => {
		if (!loading) {
			setTimeout(() => {
				setHidden(true);
			}, 1500);
		}
	}, [loading]);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{!hidden && <Boot />}
			{hidden && (
				<Stack width="100%" gap="2rem">
					<AllRoutes />

					<AudioPlayer />
				</Stack>
			)}
		</ThemeProvider>
	);
}

export default App;
