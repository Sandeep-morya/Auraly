import { SearchResultType } from "../../types";
import { TM_LOADING, TM_ERROR, TM_SUCCESSFULL } from "./tm.types";
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
		case TM_LOADING:
			return {
				...state,
				error: false,
				loading: true,
			};

		case TM_ERROR:
			return {
				...state,
				loading: false,
				error: true,
			};

		case TM_SUCCESSFULL:
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
