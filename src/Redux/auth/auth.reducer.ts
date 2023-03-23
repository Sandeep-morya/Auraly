import {
	LOGIN_LOADING,
	LOGIN_ERROR,
	LOGIN_SUCCESSFULL,
	LOGIN_RESET,
} from "./auth.types";
const initialState = {
	loading: false,
	error: false,
	token: "",
};
interface ActionType {
	type: string;
	payload: string;
}

const redcuer = (
	state = initialState,
	action: ActionType,
): typeof initialState => {
	switch (action.type) {
		case LOGIN_LOADING:
			return {
				...state,
				error: false,
				loading: true,
			};

		case LOGIN_ERROR:
			return {
				...state,
				loading: false,
				error: true,
			};

		case LOGIN_SUCCESSFULL:
			return {
				loading: false,
				error: false,
				token: action.payload,
			};

		case LOGIN_RESET:
			return initialState;

		default:
			return state;
	}
};

export default redcuer;