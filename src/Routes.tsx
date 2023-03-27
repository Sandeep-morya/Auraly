import { Routes, Route } from "react-router-dom";
import { Home, Error, Preview } from "./Pages";

import React from "react";
// import Privatize from "./Components/Privatize";

const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/preview/:id" element={<Preview />} />

			<Route path="*" element={<Error />} />
		</Routes>
	);
};

export default AllRoutes;
