import React from "react";
import {
	MDBBtn,
	MDBIcon,
	MDBRow,
  MDBCol,
  MDBBadge
} from "mdbreact";

import BreadcrumSection from "../../components/BreadcrumSection";
import Spinner from "../../components/Spinner";
import useGetReservationByID from "../../customhooks/useGetReservationByID";

const ReservationDetails = ({ history, match }) => {
	const { id } = match.params;
  const token = localStorage.getItem("userToken");

  const { reservation: { isLoading, reservation } } = useGetReservationByID(token, '/reservation/', id)

	return (
		<React.Fragment>
			<BreadcrumSection name="Home" name2="Reservation" />
			<MDBBtn color="primary" className="ml-0 mb-4" onClick={history.goBack}>
				<MDBIcon icon="angle-left" className="mr-1" /> Back
			</MDBBtn>
			<div className="white">
        {reservation && !isLoading?(
          <MDBRow>
          <MDBCol size="6" className="pl-5 pt-3">
            <div>
              <MDBIcon icon="asterisk" className="amber-text pr-1" />
              <MDBIcon icon="asterisk" className="amber-text pr-1" />
              <MDBIcon icon="asterisk" className="amber-text pr-1" />
              <MDBIcon icon="asterisk" className="amber-text pr-1" />
              <MDBIcon icon="asterisk" className="amber-text pr-1" />
            </div>
            <h2 className="h2-responsive mt-3 mb-3">{reservation.room.room_name}</h2>
            <p><small>Booked Date: {reservation.booked_date}</small></p>
            <p>{ reservation.room.description }</p>
            <h3 className="h3-responsive text-primary mb-3">&#8358; { (+reservation.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }</h3>
            Payment: {reservation.paid === 1?(
              <MDBBadge pill color="success">Paid</MDBBadge>
            ):(
              <MDBBadge pill color="danger">Pending Payment</MDBBadge>
            )} 
            
          </MDBCol>
          <MDBCol size="6">
            <img src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" className="img-fluid" alt="" />
          </MDBCol>
        </MDBRow>
          
        ):(
          <div className="center"><Spinner/></div>
        )}
        
      </div>
		</React.Fragment>
	);
};

export default ReservationDetails;
