import React, { useEffect, useState } from 'react';
import { MDBCard, MDBCardBody, MDBIcon, MDBRow, MDBCol } from 'mdbreact';

const AdminCardSection1 = ({ revData, servData }) => {

  const [reservation, setReservation] = useState();
  const [service, setService] = useState();
  const [roomBanlance, setRoomBanlance] = useState('0');
  const [serviceBalance, setServiceBalance] = useState('0');
  const [activeReservNo, setActiveReservNo] = useState('0');
  
  useEffect(() => {

    setReservation(revData);
    setService(servData);

    const sumUp = (sumUpElement) => {
      let pendingPay = sumUpElement.filter(el => el.paid !== 1);
      const payPrice = pendingPay.map( el => el.price)
      return payPrice.reduce((total, sum) => +total + +sum);
    }
    
    if(reservation && reservation.length > 0){
      setRoomBanlance(sumUp(reservation));
      const rev = reservation.filter(el => el.checkout_date === null);
      setActiveReservNo(rev.length);
    }

    if(service && service.length > 0){
      setServiceBalance(sumUp(service))
    }

  }, [revData, servData, reservation, service])

  return (
    <MDBRow className="mb-4">
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
              <div className="admin-up">
              <MDBIcon icon="money-bill-alt" className="primary-color"/>
                <div className="data">
                  <p>Active Room Booking</p>
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
                {/* <MDBCardText>Worse than last week (25%)</MDBCardText> */}
              </MDBCardBody>
            </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
              <div className="admin-up">
              <MDBIcon icon="chart-pie" className="light-blue lighten-1"/>
                <div className="data">
                  <p>Active Room Services</p>
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
                {/* <MDBCardText>Worse than last week (75%)</MDBCardText> */}
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

