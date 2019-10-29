import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
	IS_LOADING_SERVICE,
  GET_SERVICE
} from "../types/servicesTypes";

import { ERROR } from '../types/errorTypes';

const useGetServiceByID = (token, path, id) => {
	const apiPath = process.env.REACT_APP_BACKEND;
	const dispatch = useDispatch();

	useEffect(() => {
		const getService = async () => {
			dispatch({ type: IS_LOADING_SERVICE });

			try {
				const url = `${apiPath}${path}${id}`;
				const response = await axios({
					method: "get",
					url: url,
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
						Authorization: `Bearer ${token}`
					}
				});
				dispatch({ type: GET_SERVICE, payload: response.data.data });
			} catch (error) {
				dispatch({ type: ERROR, payload: error.response.data.error });
			}
		};
		getService();
	}, [apiPath, path, token, dispatch, id]);

	const service = useSelector(state => state.service);
	return { service };
};

export default useGetServiceByID;
