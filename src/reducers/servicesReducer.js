import {
	GET_SERVICES,
	GET_SERVICE_BY_ID,
	IS_LOADING_SERVICES,
	SERVICES_IS_LOADED
} from "../types/servicesTypes";

const initialState = {
	isLoading: false,
	isLoaded: false,
	services: null,
	singleService: null,
};

export default function servicesReducer(state = initialState, action) {
	switch (action.type) {
		case IS_LOADING_SERVICES:
			return { ...state, isLoading: true, isLoaded: false };
		case SERVICES_IS_LOADED:
			return { ...state, isLoading: false, isLoaded: true };
		case GET_SERVICES:
			return {
				...state,
				isLoading: false,
				isLoaded: true,
				services: action.payload
			};
		case GET_SERVICE_BY_ID:
			return {
				...state,
				isLoading: false,
				isLoaded: true,
				singleService: action.payload
			};
		default:
			return state;
	}
}
