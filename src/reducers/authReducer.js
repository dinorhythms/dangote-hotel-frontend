import {
	USER_LOADING,
	USER_LOADED,
	LOGIN_SUCCESS,
	REGISTER_SUCCESS,
	AUTH_ERROR,
	LOGIN_FAIL,
	LOGOUT_SUCCESS,
	REGISTER_FAIL
} from "../types/authTypes";

const initialState = {
	isAuthenticated: false,
	isLoading: false,
	isLoaded: false,
	user: null
};

export default function authReducer(state = initialState, action) {
	switch (action.type) {
		case USER_LOADING:
			return { ...state, isLoading: true, isLoaded: false };
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				isLoading: false,
				isLoaded: true,
				user: action.payload
			};
		case LOGIN_SUCCESS:
		case REGISTER_SUCCESS:
			return {
				...state,
				isAuthenticated: true,
				isLoading: false,
				isLoaded: true,
				user: action.payload
			};
		case AUTH_ERROR:
		case LOGIN_FAIL:
		case LOGOUT_SUCCESS:
		case REGISTER_FAIL:
			localStorage.removeItem("userToken");
			return {
				...state,
				isAuthenticated: false,
				isLoading: false,
				isLoaded: true,
				user: null
			};
		default:
			return state;
	}
}
