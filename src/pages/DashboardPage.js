import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

//components
import { MDBRow } from 'mdbreact';
import AdminCardSection1 from '../components/AdminCardSection1';
import BreadcrumSection from '../components/BreadcrumSection';

// types
import { GET_RESERVATIONS, IS_LOADING, IS_LOADED } from "../types/reservationTypes";

// actions
import { getReservationAction, getServicesAction } from '../actions/reservationActions';
import DashboardReservation from '../components/DashboardReservation';
import { GET_SERVICES } from '../types/servicesTypes';
import DashboardServices from '../components/DashboardServices';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  useEffect( () => {
    const fetchReservation = async () => {
      dispatch({ type: IS_LOADING });
      const data = await getReservationAction(token);
      if (data.status === 'success') {
        dispatch({ type: GET_RESERVATIONS, payload: data.data });
      } else {
        dispatch({ type: IS_LOADED});
      }
    }
    const fetchServices = async () => {
      dispatch({ type: IS_LOADING });
      const data = await getServicesAction(token);
      if (data.status === 'success') {
        dispatch({ type: GET_SERVICES, payload: data.data });
      } else {
        dispatch({ type: IS_LOADED});
      }
    }
    fetchReservation();
    fetchServices();
  },[dispatch, token])

  const reservationHistory = useSelector(state => state.reservation, shallowEqual);
  const servicesHistory = useSelector(state => state.services, shallowEqual);

  return (
    <React.Fragment>
      <BreadcrumSection />
      <AdminCardSection1 revData={ reservationHistory.reservation } servData={ servicesHistory.services } />
      <MDBRow className="mb-4">
        <DashboardReservation name='Reservation' data={reservationHistory} />
        <DashboardServices  name='Room Services' data={servicesHistory} />
      </MDBRow>
    </React.Fragment>
  )
}

export default DashboardPage;