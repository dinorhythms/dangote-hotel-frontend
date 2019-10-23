import React, { useState, useEffect } from 'react';
import { MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead, MDBCol } from 'mdbreact';

const DashboardReservation = ({ name, data }) => {

  const [historyData, setHistoryData] = useState();

  useEffect(() => {
    setHistoryData(data);
  }, [historyData, data])

  return (
    <MDBCol md="6">
        <h5>{name} History</h5>
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
                        <td colSpan="4">
                          <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                          </div>
                        </td>
                      </tr>
                    )
                    : historyData && historyData.reservation && historyData.reservation.length > 0
                      ? historyData.reservation.map( (reservation, index) => (
                        <tr key={index}>
                          <td>{index+1}</td>
                          <td>{reservation.room.room_name}</td>
                          <td>{reservation.booked_date}</td>
                          <td>{reservation.price}</td>
                          <td>{reservation.paid === 0?'NO':'YES'}</td>
                        </tr>
                      ))
                      : (
                        <tr>
                          <td colSpan="4">No Records</td>
                        </tr>
                      )
                  }
                </MDBTableBody>
              </MDBTable>
            </MDBCardBody>
        </MDBCard>
    </MDBCol>
  )
}

export default DashboardReservation;

