import axios from "axios";
import {
	SINGLE_LOADING,
	SINGLE_ERROR,
	SINGLE_SUCCESSFULL,
} from "./single.type";

export async function getSingle(dispatch: any, id: string) {
	dispatch({ type: SINGLE_LOADING });

	const options = {
		method: "GET",
		url: "https://ytstream-download-youtube-videos.p.rapidapi.com/dl",
		params: { id },
		headers: {
			"X-RapidAPI-Key": "999fb0dc6fmsh365f52816a32b88p12f229jsn4325929376fb",
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
