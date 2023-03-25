import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import CurrentMediaProvider from "./Provider/PlayerContextProvider";
import { store } from "./Redux/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<Provider store={store}>
		<CurrentMediaProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</CurrentMediaProvider>
	</Provider>,
);
