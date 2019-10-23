import axios from "axios";
import store from "../store";

import { USER_LOADING, USER_LOADED, AUTH_ERROR } from "../types/authTypes";

const apiPath = process.env.REACT_APP_BACKEND;

export const login = async credential => {
	try {
		const url = `${apiPath}/auth/signin/`;

		const response = await axios({
			method: "post",
			url: url,
			data: credential,
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json"
			}
		});

		//set localstorage
		localStorage.setItem("userToken", response.data.data.token);

		return response.data;
	} catch (error) {
		if(error.response) return error.response.data.error
		return 'Connection Error!';
	}
};

export const loadUser = async () => {
	try {
		store.dispatch({ type: USER_LOADING });

		const token = store.getState().auth.token;
		const url = `${apiPath}/auth/user/`;

		const response = await axios({
			method: "get",
			url: url,
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`
			}
		});

		store.dispatch({ type: USER_LOADED, payload: response.data.data });
	} catch (error) {
		store.dispatch({ type: AUTH_ERROR });
	}
};
