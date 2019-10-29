import { LOADING_GET_ROOM, GET_ROOM } from "../types/roomTypes";

const initialState = {
	isLoading: false,
	room: null
};

export default function(state = initialState, action) {
	switch (action.type) {
		case LOADING_GET_ROOM:
			return {
				...state,
				isLoading: true
			};
		case GET_ROOM:
			return {
				...state,
				isLoading: false,
				room: action.payload.data
			};
		default:
			return state;
	}
}
