import { SearchResultType } from "../../types";
import { TV_LOADING, TV_ERROR, TV_SUCCESSFULL } from "./tv.types";

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
		case TV_LOADING:
			return {
				...state,
				error: false,
				loading: true,
			};

		case TV_ERROR:
			return {
				...state,
				loading: false,
				error: true,
			};

		case TV_SUCCESSFULL:
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
