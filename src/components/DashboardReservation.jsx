import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead, MDBCol } from 'mdbreact';
import Spinner from './Spinner';

const DashboardReservation = ({ name, data, history }) => {

  const [historyData, setHistoryData] = useState();

  useEffect(() => {
    setHistoryData(data);
  }, [historyData, data])
  
  return (
    <MDBCol md="6">
        <h5>Last 10 {name} History</h5>
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
                    historyData && !historyData.isLoaded
                    ? (
                      <tr>
                        <td colSpan="5">
                          <Spinner/>
                        </td>
                      </tr>
                    )
                    : historyData && historyData.reservation && historyData.reservation.length > 0
                      ? historyData.reservation.slice(0, 10).map( (reservation, index) => (
                        <tr key={index} onClick={ () => history.push(`/reservation/${reservation.id}`) } style={{ cursor: 'pointer' }}>
                          <td>{index+1}</td>
                          <td>{reservation.room.room_name}</td>
                          <td>{reservation.booked_date}</td>
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

