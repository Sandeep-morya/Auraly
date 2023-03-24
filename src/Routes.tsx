import { Routes, Route } from "react-router-dom";
import {
	Home,
	Error,
	Music,
	Videos,
	SingleVideo,
	Favourites,
	Login,
	SingleAudio,
} from "./Pages";

import React from "react";
// import Privatize from "./Components/Privatize";

const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/music" element={<Music />} />
			<Route path="/videos" element={<Videos />} />
			<Route path="/favourites/:id" element={<Favourites />} />
			<Route path="/single_video/:id" element={<SingleVideo />} />
			<Route path="/single_audio/:id" element={<SingleAudio />} />

			<Route path="*" element={<Error />} />
		</Routes>
	);
};

export default AllRoutes;
