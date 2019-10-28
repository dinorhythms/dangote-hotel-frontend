import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
	SERVICES_IS_LOADED,
	IS_LOADING_SERVICES,
  GET_SERVICE_BY_ID
} from "../types/servicesTypes";

const useGetServiceByID = (token, path, id) => {
	const apiPath = process.env.REACT_APP_BACKEND;
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getService = async () => {
			dispatch({ type: IS_LOADING_SERVICES });
			setLoading(true);

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
				dispatch({ type: GET_SERVICE_BY_ID, payload: response.data.data });
				dispatch({ type: SERVICES_IS_LOADED });
				setLoading(false);
			} catch (error) {
				dispatch({ type: SERVICES_IS_LOADED });
				setLoading(false);
			}
		};
		getService();
	}, [apiPath, path, token, dispatch, id]);

	const service = useSelector(state => state.services);
	return { loading, service };
};

export default useGetServiceByID;
