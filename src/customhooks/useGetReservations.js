import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
	LOADING_RESERVATIONS,
	GET_RESERVATIONS,
} from "../types/reservationTypes";

import { ERROR } from '../types/errorTypes';

const useGetReservations = (token, path) => {
	const apiPath = process.env.REACT_APP_BACKEND;
	const dispatch = useDispatch();

	useEffect(() => {
		const getReservation = async () => {
			dispatch({ type: LOADING_RESERVATIONS });

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
				dispatch({ type: GET_RESERVATIONS, payload: response.data.data });
			} catch (error) {
				dispatch({ type: ERROR, payload: error.response.data.error });
			}
		};
		getReservation();
	}, [apiPath, path, token, dispatch]);

	const reservations = useSelector(state => state.reservations);
	return { reservations };
};

export default useGetReservations;
