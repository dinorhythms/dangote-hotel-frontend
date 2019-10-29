import { LOADING_GET_ROOMS, GET_ROOMS } from "../types/roomTypes";

const initialState = {
	isLoading: false,
	rooms: null
};

export default function(state = initialState, action) {
	switch (action.type) {
		case LOADING_GET_ROOMS:
			return {
				...state,
				isLoading: true
			};
		case GET_ROOMS:
			return {
				...state,
				isLoading: false,
				rooms: action.payload.data
			};
		default:
			return state;
	}
}
