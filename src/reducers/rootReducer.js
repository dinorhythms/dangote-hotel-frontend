import { combineReducers } from "redux";
import authReducer from "./authReducer";
import reservationReducer from "./reservationReducer";
import reservationsReducer from "./reservationsReducer";
import serviceReducer from "./serviceReducer";
import servicesReducer from "./servicesReducer";
import roomsReducer from "./roomsReducer";
import roomReducer from "./roomReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
	auth: authReducer,
	reservation: reservationReducer,
	reservations: reservationsReducer,
	service: serviceReducer,
	services: servicesReducer,
	rooms: roomsReducer,
	room: roomReducer,
	error: errorReducer,
});
