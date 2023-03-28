import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import CurrentMediaProvider from "./Provider/PlayerContextProvider";
import { store } from "./Redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";

const client_id = import.meta.env.VITE_GOOGLE_ID;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<GoogleOAuthProvider clientId={client_id}>
		<Provider store={store}>
			<CurrentMediaProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</CurrentMediaProvider>
		</Provider>
	</GoogleOAuthProvider>,
);
