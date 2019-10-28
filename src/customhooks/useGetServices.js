import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
	SERVICES_IS_LOADED,
	GET_SERVICES,
	IS_LOADING_SERVICES
} from "../types/servicesTypes";

const useGetServices = (token, path) => {
	const apiPath = process.env.REACT_APP_BACKEND;
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getService = async () => {
			dispatch({ type: IS_LOADING_SERVICES });
			setLoading(true);

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
				dispatch({ type: SERVICES_IS_LOADED });
				setLoading(false);
			} catch (error) {
				dispatch({ type: SERVICES_IS_LOADED });
				setLoading(false);
			}
		};
		getService();
	}, [apiPath, path, token, dispatch]);

	const services = useSelector(state => state.services);
	return { loading, services };
};

export default useGetServices;
