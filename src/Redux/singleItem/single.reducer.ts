﻿import { result } from "../../Pages/data";
import { SingleItem } from "../../types";
import {
	SINGLE_LOADING,
	SINGLE_ERROR,
	SINGLE_SUCCESSFULL,
} from "./single.type";

const previousData = JSON.parse(
	localStorage.getItem("trackData") as string,
) as SingleItem;

const initalState = {
	loading: false,
	error: false,
	data: previousData || (result as SingleItem),
};
export type SingleItemState = typeof initalState;

function reducer(
	state = initalState,
	action: { type: string; payload?: SingleItem },
): typeof initalState {
	switch (action.type) {
		case SINGLE_LOADING:
			return {
				...state,
				loading: true,
				error: false,
			};

		case SINGLE_ERROR:
			return {
				...state,
				loading: false,
				error: true,
			};

		case SINGLE_SUCCESSFULL:
			return {
				loading: false,
				error: false,
				data: action.payload!,
			};

		default:
			return state;
	}
}

export default reducer;
