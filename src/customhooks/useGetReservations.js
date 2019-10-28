import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
	IS_LOADING_RESERVATION,
	GET_RESERVATIONS,
	RESERVATIONS_IS_LOADED
} from "../types/reservationTypes";

const useGetReservations = (token, path) => {
	const apiPath = process.env.REACT_APP_BACKEND;
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getReservation = async () => {
			dispatch({ type: IS_LOADING_RESERVATION });
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
				dispatch({ type: GET_RESERVATIONS, payload: response.data.data });
        dispatch({ type: RESERVATIONS_IS_LOADED });
        setLoading(false)
			} catch (error) {
        dispatch({ type: RESERVATIONS_IS_LOADED });
        setLoading(false)
			}
		};
		getReservation();
	}, [apiPath, path, token, dispatch]);

	const reservations = useSelector(state => state.reservation);
	return { loading, reservations };
};

export default useGetReservations;
