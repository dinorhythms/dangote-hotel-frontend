import {
	GET_SERVICES,
	IS_LOADING_SERVICES,
} from "../types/servicesTypes";

const initialState = {
	isLoading: false,
	services: null,
};

export default function servicesReducer(state = initialState, action) {
	switch (action.type) {
		case IS_LOADING_SERVICES:
			return { ...state, isLoading: true };
		case GET_SERVICES:
			return {
				...state,
				isLoading: false,
				services: action.payload
			};
		default:
			return state;
	}
}
