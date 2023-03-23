import "./App.css";
import Boot from "./Components/Boot";
import React, { useState, useEffect } from "react";
import { Stack } from "@mui/system";
import Navbar from "./Components/Navbar";
import {
	createTheme,
	CssBaseline,
	ThemeProvider,
	useMediaQuery,
} from "@mui/material";
import AllRoutes from "./Routes";

function App() {
	const [hidden, setHidden] = useState(false);
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

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
			{hidden && <AllRoutes />}
		</ThemeProvider>
	);
}

export default App;
