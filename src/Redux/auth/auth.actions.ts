import axios from "axios";
import { AppDispatch } from "../store";

import {
	LOGIN_LOADING,
	LOGIN_ERROR,
	LOGIN_SUCCESSFULL,
	LOGIN_RESET,
} from "./auth.types";

export const handleLogin = (dispatch: AppDispatch, token: any) => {
	try {
		dispatch({ type: LOGIN_SUCCESSFULL, payload: token });
		localStorage.setItem("token", token);
	} catch (error) {
		dispatch({ type: LOGIN_ERROR });
	}
};

export const handleLoginError = (dispatch: AppDispatch) => {
	dispatch({ type: LOGIN_ERROR });
};

export const handleLogout = (dispatch: AppDispatch) => {
	localStorage.removeItem("token");
	dispatch({ type: LOGIN_RESET });
};
