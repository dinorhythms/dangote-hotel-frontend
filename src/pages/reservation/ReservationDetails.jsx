import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	MDBBtn,
	MDBIcon,
	MDBRow,
  MDBCol,
  MDBBadge
} from "mdbreact";

import BreadcrumSection from "../../components/BreadcrumSection";
import { getReservationByIdAction } from "../../actions/reservationActions";
import {
  IS_LOADING,
	IS_LOADED,
	GET_RESERVATION_BY_ID
} from "../../types/reservationTypes";
import Spinner from "../../components/Spinner";

const ReservationDetails = ({ history, match }) => {
	const { id } = match.params;
	const dispatch = useDispatch();
	useEffect(() => {
		const getData = async () => {
			dispatch({ type: IS_LOADING });
			const data = await getReservationByIdAction(id);
			if (data.status === "success") {
				dispatch({ type: GET_RESERVATION_BY_ID, payload: data.data });
			} else {
				dispatch({ type: IS_LOADED });
			}
		};
		getData();
	}, [id, dispatch]);

  const reservation = useSelector(state => state.reservation);
  const { singleReservation } = reservation;

	return (
		<React.Fragment>
			<BreadcrumSection name="Home" name2="Reservation" />
			<MDBBtn color="primary" className="ml-0 mb-4" onClick={history.goBack}>
				<MDBIcon icon="angle-left" className="mr-1" /> Back
			</MDBBtn>
			<div className="white">
        {reservation && singleReservation && reservation.isLoaded?(
          <MDBRow>
          <MDBCol size="6" className="pl-5 pt-3">
            <div>
              <MDBIcon icon="asterisk" className="amber-text pr-1" />
              <MDBIcon icon="asterisk" className="amber-text pr-1" />
              <MDBIcon icon="asterisk" className="amber-text pr-1" />
              <MDBIcon icon="asterisk" className="amber-text pr-1" />
              <MDBIcon icon="asterisk" className="amber-text pr-1" />
            </div>
            <h2 className="h2-responsive mt-3 mb-3">{singleReservation.room.room_name}</h2>
            <p><small>Booked Date: {singleReservation.booked_date}</small></p>
            <p>{ singleReservation.room.description }</p>
            <h3 className="h3-responsive text-primary mb-3">&#8358; { (+singleReservation.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }</h3>
            Payment: {singleReservation.paid === 1?(
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
