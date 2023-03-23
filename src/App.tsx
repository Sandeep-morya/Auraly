import "./App.css";
import Boot from "./Components/Boot";
import React, { useState, useEffect } from "react";
import { Stack } from "@mui/system";
import Navbar from "./Components/Navbar";

function App() {
	const [hidden, setHidden] = useState(false);
	useEffect(() => {
		const id = setTimeout(() => {
			setHidden(true);
		}, 1500);

		return () => {
			clearInterval(id);
		};
	}, []);

	return (
		<>
			{!hidden && <Boot />}
			{hidden &&
      (<Stack>
        <Navbar />
      </Stack>)}
		</>
	);
}

export default App;
