import { GET_SERVICE, IS_LOADING_SERVICE } from "../types/servicesTypes";

const initialState = {
	isLoading: false,
	service: null
};

export default function servicesReducer(state = initialState, action) {
	switch (action.type) {
		case IS_LOADING_SERVICE:
			return { ...state, isLoading: true };
		case GET_SERVICE:
			return {
				...state,
				isLoading: false,
				service: action.payload
			};
		default:
			return state;
	}
}
