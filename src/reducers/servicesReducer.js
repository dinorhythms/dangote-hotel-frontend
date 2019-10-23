import {
	GET_SERVICES,
	IS_LOADING,
	IS_LOADED
} from "../types/servicesTypes";

const initialState = {
	isLoading: false,
	isLoaded: false,
	services: null
};

export default function servicesReducer(state = initialState, action) {
	switch (action.type) {
		case IS_LOADING:
			return { ...state, isLoading: true, isLoaded: false };
		case IS_LOADED:
			return { ...state, isLoading: false, isLoaded: true };
		case GET_SERVICES:
			return {
				...state,
				isLoading: false,
				isLoaded: true,
				services: action.payload
			};
		default:
			return state;
	}
}
