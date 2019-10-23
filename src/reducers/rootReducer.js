import { combineReducers } from 'redux';
import authReducer from './authReducer';
import reservationReducer from './reservationReducer';
import servicesReducer from './servicesReducer';

export default combineReducers({
  auth: authReducer,
  reservation: reservationReducer,
  services: servicesReducer
});
