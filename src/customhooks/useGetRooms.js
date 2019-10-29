import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { LOADING_GET_ROOMS, GET_ROOMS } from "../types/roomTypes";
import { ERROR } from "../types/errorTypes";

const useGetRooms = (token, path) => {
  const dispatch = useDispatch();
	useEffect(() => {
		const getRooms = async () => {
			const apiPath = process.env.REACT_APP_BACKEND;
			const url = `${apiPath}${path}`;
			try {
				dispatch({ type: LOADING_GET_ROOMS });
				const response = await axios({
					type: "get",
					url: url,
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
						Authorization: `Bearer ${token}`
					}
        });
				dispatch({ type: GET_ROOMS, payload: response.data });
			} catch (error) {
				dispatch({ type: ERROR, payload: error.response.data.error });
			}
		};

		getRooms();
	}, [token, path, dispatch]);
	const rooms = useSelector(state => state.rooms);
	return rooms;
};

export default useGetRooms;
