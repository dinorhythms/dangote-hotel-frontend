import {
	GET_RESERVATIONS,
	IS_LOADING_RESERVATION,
	RESERVATIONS_IS_LOADED,
  GET_RESERVATION_BY_ID
} from "../types/reservationTypes";

const initialState = {
	isLoading: false,
	isLoaded: false,
  reservation: null,
  singleReservation: null
};

export default function reservationReducer(state = initialState, action) {
	switch (action.type) {
		case IS_LOADING_RESERVATION:
			return { ...state, isLoading: true, isLoaded: false };
		case RESERVATIONS_IS_LOADED:
			return { ...state, isLoading: false, isLoaded: true };
		case GET_RESERVATIONS:
			return {
				...state,
				isLoading: false,
				isLoaded: true,
				reservation: action.payload
			};
		case GET_RESERVATION_BY_ID:
			return {
				...state,
				isLoading: false,
				isLoaded: true,
				singleReservation: action.payload
			};
		default:
			return state;
	}
}
