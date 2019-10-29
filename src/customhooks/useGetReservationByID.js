import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
	LOADING_RESERVATION,
	GET_RESERVATION
} from "../types/reservationTypes";

import { ERROR } from '../types/errorTypes';

const useGetReservationByID = (token, path, id) => {
	const apiPath = process.env.REACT_APP_BACKEND;
	const dispatch = useDispatch();

	useEffect(() => {
		const getReservation = async () => {
			dispatch({ type: LOADING_RESERVATION });

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
				dispatch({ type: GET_RESERVATION, payload: response.data.data });
			} catch (error) {
				dispatch({ type: ERROR, payload: error.response.data.error });
			}
		};
		getReservation();
	}, [apiPath, path, token, dispatch, id]);

	const reservation = useSelector(state => state.reservation);
	return { reservation };
};

export default useGetReservationByID;
