import axios from "axios";
import {
	SEARCH_DATA_LOADING,
	SEARCH_DATA_ERROR,
	SEARCH_DATA_SUCCESSFULL,
} from "./search_data.types";

const api_key = import.meta.env.VITE_API_SEARCH_KEY;
const api_host = import.meta.env.VITE_API_SEARCH_HOST;
const api_url = import.meta.env.VITE_API_SEARCH_URL;

function getSearchResult(dispatch: any, query: string) {
	// // console.log(api_key, api_host, api_url);
	if (query === "") {
		return;
	}
	dispatch({ type: SEARCH_DATA_LOADING });

	const options = {
		method: "GET",
		url: api_url,
		params: { query, safesearch: "false" },
		headers: {
			"X-RapidAPI-Key": api_key,
			"X-RapidAPI-Host": api_host,
		},
	};

	axios
		.request(options)
		.then(function ({ data }) {
			dispatch({ type: SEARCH_DATA_SUCCESSFULL, payload: data.results });
		})
		.catch(function (error) {
			dispatch({ type: SEARCH_DATA_ERROR });
		});
	//
}

export default getSearchResult;
