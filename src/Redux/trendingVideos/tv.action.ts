import axios from "axios";
import { SearchResultType } from "../../types";
import { TV_LOADING, TV_ERROR, TV_SUCCESSFULL } from "./tv.types";

const api_key = import.meta.env.VITE_API_SEARCH_KEY;
const api_host = import.meta.env.VITE_API_SEARCH_HOST;
const api_url = import.meta.env.VITE_API_SEARCH_URL;

export const getTrendingVideos = async (
	dispatch: any,
	list: SearchResultType[],
) => {
	if (list.length > 1) {
		return;
	}
	dispatch({ type: TV_LOADING });
	try {
		const options = {
			params: { query: "trending", safesearch: "false" },
			headers: {
				"X-RapidAPI-Key": api_key,
				"X-RapidAPI-Host": api_host,
			},
		};
		const { data } = await axios.get(api_url, options);
		dispatch({ type: TV_SUCCESSFULL, payload: data.results });
	} catch (error) {
		dispatch({ type: TV_ERROR });
	}
};
