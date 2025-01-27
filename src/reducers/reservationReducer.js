import {
	GET_RESERVATION,
	LOADING_RESERVATION,
} from "../types/reservationTypes";

const initialState = {
	isLoading: false,
	reservation: null,
};

export default function reservationReducer(state = initialState, action) {
	switch (action.type) {
		case LOADING_RESERVATION:
			return { ...state, isLoading: true };
		case GET_RESERVATION:
			return {
				...state,
				isLoading: false,
				reservation: action.payload
			};
		default:
			return state;
	}
}
