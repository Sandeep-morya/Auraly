import axios from "axios";
import { SearchResultType } from "../../types";
import { TM_LOADING, TM_ERROR, TM_SUCCESSFULL } from "./tm.types";

const api_key = import.meta.env.VITE_API_SEARCH_KEY;
const api_host = import.meta.env.VITE_API_SEARCH_HOST;
const api_url = import.meta.env.VITE_API_SEARCH_URL;

export const getTrendingMusic = async (
	dispatch: any,
	list: SearchResultType[],
) => {
	if (list.length > 1) {
		return;
	}
	dispatch({ type: TM_LOADING });
	try {
		const options = {
			params: { query: "trending_music", safesearch: "false" },
			headers: {
				"X-RapidAPI-Key": api_key,
				"X-RapidAPI-Host": api_host,
			},
		};
		const { data } = await axios.get(api_url, options);
		dispatch({ type: TM_SUCCESSFULL, payload: data.results });
	} catch (error) {
		dispatch({ type: TM_ERROR });
	}
};
