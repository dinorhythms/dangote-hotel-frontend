import React from 'react';
import { Link } from 'react-router-dom';
import { MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead, MDBCol } from 'mdbreact';
import Spinner from './Spinner';

import useGetReservations from "../customhooks/useGetReservations";

const DashboardReservation = ({ history }) => {
  const token = localStorage.getItem("userToken");
  const { reservations: { isLoading, reservations} } = useGetReservations(token, "/reservation/");

  const dateToString = (date) => {
    if (date) return new Date(date).toDateString();
    return null;
	}
 
  return (
    <MDBCol md="6">
        <h5>Last 10 Reservation</h5>
        <MDBCard>
            <MDBCardBody>
              <MDBTable hover>
                <MDBTableHead color="blue-grey lighten-4">
                  <tr>
                    <th>#</th>
                    <th>Room</th>
                    <th>Date</th>
                    <th>Price</th>
                    <th>Paid</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {
                    reservations && isLoading
                    ? (
                      <tr>
                        <td colSpan="5">
                          <Spinner/>
                        </td>
                      </tr>
                    )
                    : reservations  && reservations.length > 0
                      ? reservations.slice(0, 10).map( (reservation, index) => (
                        <tr key={index} onClick={ () => history.push(`/reservation/${reservation.id}`) } style={{ cursor: 'pointer' }}>
                          <td>{index+1}</td>
                          <td>{reservation.room.room_name}</td>
                          <td>{dateToString(reservation.booked_date)}</td>
                          <td>{reservation.price}</td>
                          <td>{reservation.paid === 0?'NO':'YES'}</td>
                        </tr>
                      ))
                      : (
                        <tr>
                          <td colSpan="5">No Records</td>
                        </tr>
                      )
                  }
                </MDBTableBody>
              </MDBTable>
              <div className="text-center text-muted"><Link to="/reservation"><small>View all</small></Link></div>
            </MDBCardBody>
        </MDBCard>
    </MDBCol>
  )
}

export default DashboardReservation;

