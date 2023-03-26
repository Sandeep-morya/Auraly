import axios from "axios";
import { AppDispatch } from "../store";
import {
	SINGLE_LOADING,
	SINGLE_ERROR,
	SINGLE_SUCCESSFULL,
} from "./single.type";

export async function getSingle(dispatch: AppDispatch, id: string) {
	dispatch({ type: SINGLE_LOADING });

	const options = {
		method: "GET",
		url: "https://ytstream-download-youtube-videos.p.rapidapi.com/dl",
		params: { id },
		headers: {
			"X-RapidAPI-Key": "5bc696b56fmshc2a1eb3a8f8a0cap14e68ajsn584696158ccb",
			"X-RapidAPI-Host": "ytstream-download-youtube-videos.p.rapidapi.com",
		},
	};

	axios
		.request(options)
		.then(function (response) {
			console.log(response.data);
			dispatch({ type: SINGLE_SUCCESSFULL, payload: response.data });
		})
		.catch(function (error) {
			console.error(error);
			dispatch({ type: SINGLE_ERROR });
		});
}
