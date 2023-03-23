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
			{hidden && (
				<Stack
					padding={{
						xs: "0 0.1rem",
						sm: "0 0.5rem",
						md: "0 1rem",
						lg: "0 5rem",
						xl: "0 15rem",
					}}>
					<Navbar />
				</Stack>
			)}
		</ThemeProvider>
	);
}

export default App;
