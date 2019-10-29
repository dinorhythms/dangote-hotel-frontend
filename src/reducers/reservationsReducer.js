import {
	GET_RESERVATIONS,
	LOADING_RESERVATIONS,
} from "../types/reservationTypes";

const initialState = {
	isLoading: false,
  reservations: null,
};

export default function reservationsReducer(state = initialState, action) {
	switch (action.type) {
		case LOADING_RESERVATIONS:
			return { ...state, isLoading: true };
		case GET_RESERVATIONS:
			return {
				...state,
				isLoading: false,
				reservations: action.payload
			};
		default:
			return state;
	}
}
