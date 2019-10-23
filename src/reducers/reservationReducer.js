import {
  GET_RESERVATIONS,
  IS_LOADING,
  IS_LOADED
} from "../types/reservationTypes";

const initialState = {
  isLoading: false,
  isLoaded: false,
  reservation: null
};

export default function reservationReducer(state = initialState, action) {
	switch (action.type) {
    case IS_LOADING:
      return { ...state, isLoading: true, isLoaded: false };
    case IS_LOADED:
        return { ...state, isLoading: false, isLoaded: true };
		case GET_RESERVATIONS:
			return { ...state, isLoading: false, isLoaded: true, reservation: action.payload };
		default:
			return state;
	}
}
