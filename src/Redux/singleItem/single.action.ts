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
			"X-RapidAPI-Key": "25a08ff1ecmshb0e013342682ff5p1df7bbjsn9bf370586ba4",
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
