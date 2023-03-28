import { SearchResultType } from "../../types";
import {
	SEARCH_DATA_LOADING,
	SEARCH_DATA_ERROR,
	SEARCH_DATA_SUCCESSFULL,
} from "./search_data.types";
const initialState = {
	loading: false,
	error: false,
	list: [] as SearchResultType[],
};
interface ActionType {
	type: string;
	payload: SearchResultType[];
}

const redcuer = (
	state = initialState,
	action: ActionType,
): typeof initialState => {
	switch (action.type) {
		case SEARCH_DATA_LOADING:
			return {
				...state,
				error: false,
				loading: true,
			};

		case SEARCH_DATA_ERROR:
			return {
				...state,
				loading: false,
				error: true,
			};

		case SEARCH_DATA_SUCCESSFULL:
			return {
				loading: false,
				error: false,
				list: action.payload,
			};

		default:
			return state;
	}
};

export default redcuer;
