import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
	GET_SERVICES,
	IS_LOADING_SERVICES
} from "../types/servicesTypes";

import { ERROR } from '../types/errorTypes';

const useGetServices = (token, path) => {
	const apiPath = process.env.REACT_APP_BACKEND;
	const dispatch = useDispatch();

	useEffect(() => {
		const getService = async () => {
			dispatch({ type: IS_LOADING_SERVICES });

			try {
				const url = `${apiPath}${path}`;
				const response = await axios({
					method: "get",
					url: url,
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
						Authorization: `Bearer ${token}`
					}
        });
				dispatch({ type: GET_SERVICES, payload: response.data.data });
			} catch (error) {
				dispatch({ type: ERROR, payload: error.response.data.error });
			}
		};
		getService();
	}, [apiPath, path, token, dispatch]);

	const services = useSelector(state => state.services);
	return { services };
};

export default useGetServices;
