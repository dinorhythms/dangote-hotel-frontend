import React, { useEffect, useState } from 'react';
import { MDBCard, MDBCardBody, MDBIcon, MDBRow, MDBCol } from 'mdbreact';

import useGetReservations from "../customhooks/useGetReservations";
import useGetServices from "../customhooks/useGetServices.js";

const AdminCardSection1 = () => {

  const token = localStorage.getItem("userToken");
  const { reservations } = useGetReservations(token, "/reservation/");
  const { services } = useGetServices(token, "/servicereservation/");
  const reservation = reservations.reservations;
  const [roomBanlance, setRoomBanlance] = useState('0');
  const [serviceBalance, setServiceBalance] = useState('0');
  const [activeReservNo, setActiveReservNo] = useState('0');
  
  useEffect(() => {

    const sumUp = (sumUpElement) => {

      let pendingPay = sumUpElement.filter(el => el.paid !== 1);
      if(pendingPay.length > 0 ){
        const payPrice = pendingPay.map( el => el.price)
        return payPrice.reduce((total, sum) => +total + +sum);
      }
      return 0;
      
    }
    
    if(reservation && reservation.length > 0){
      setRoomBanlance(sumUp(reservation));
      const rev = reservation.filter(el => el.checkout_date === null);
      setActiveReservNo(rev.length);
    }

    if(services && services.services && services.services.length > 0){
      setServiceBalance(sumUp(services.services))
    }

  }, [reservation, services])

  return (
    <MDBRow className="mb-4 mt-5">
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
              <div className="admin-up">
              <MDBIcon icon="money-bill-alt" className="primary-color"/>
                <div className="data">
                  <p>Pending Room Payment</p>
                  <h4>
                    <strong> &#8358; { roomBanlance }</strong>
                  </h4>
                </div>
              </div>
              <MDBCardBody>
                <div className="progress">
                  <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg-primary" role="progressbar"
                    style={{width: '100%'}}></div>
                </div>
              </MDBCardBody>
            </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
              <div className="admin-up">
              <MDBIcon icon="chart-line" className="warning-color"/>
                <div className="data">
                  <p>Active Reservations</p>
                  <h4>
                    <strong>{ activeReservNo }</strong>
                  </h4>
                </div>
              </div>
              <MDBCardBody>
                <div className="progress">
                  <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg grey" role="progressbar"
                    style={{width: '100%'}}></div>
                </div>
              </MDBCardBody>
            </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
              <div className="admin-up">
              <MDBIcon icon="chart-pie" className="light-blue lighten-1"/>
                <div className="data">
                  <p>Pending Services Payment</p>
                  <h4>
                    <strong> &#8358; {serviceBalance}</strong>
                  </h4>
                </div>
              </div>
              <MDBCardBody>
                <div className="progress">
                  <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar grey darken-2" role="progressbar"
                    style={{width: '100%'}}></div>
                </div>
              </MDBCardBody>
            </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
              <div className="admin-up">
              <MDBIcon icon="chart-bar" className="red accent-2"/>
                <div className="data">
                  <p>Complaints</p>
                  <h4>
                    <strong>0</strong>
                  </h4>
                </div>
              </div>
              <MDBCardBody>
                <div className="progress">
                  <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg-primary" role="progressbar"
                    style={{width: '100%'}}></div>
                </div>
              </MDBCardBody>
            </MDBCard>
        </MDBCol>
      </MDBRow>
  )
}

export default AdminCardSection1;

