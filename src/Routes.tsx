import { Routes, Route } from "react-router-dom";
import { Home, Error, Favourites, Login, Preview } from "./Pages";

import React from "react";
// import Privatize from "./Components/Privatize";

const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/preview/:id" element={<Preview />} />
			<Route path="/favourites/:id" element={<Favourites />} />

			<Route path="*" element={<Error />} />
		</Routes>
	);
};

export default AllRoutes;
