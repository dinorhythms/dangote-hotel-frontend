import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
	IS_LOADING_RESERVATION,
	RESERVATIONS_IS_LOADED,
  GET_RESERVATION_BY_ID
} from "../types/reservationTypes";

const useGetReservationByID = (token, path, id) => {
	const apiPath = process.env.REACT_APP_BACKEND;
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getReservation = async () => {
			dispatch({ type: IS_LOADING_RESERVATION });
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
				dispatch({ type: GET_RESERVATION_BY_ID, payload: response.data.data });
				dispatch({ type: RESERVATIONS_IS_LOADED });
        setLoading(false);
			} catch (error) {
				dispatch({ type: RESERVATIONS_IS_LOADED });
				setLoading(false);
			}
		};
		getReservation();
	}, [apiPath, path, token, dispatch, id]);

	const reservation = useSelector(state => state.reservation);
	return { loading, reservation };
};

export default useGetReservationByID;
