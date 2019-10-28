import React from "react";
import {
	MDBCard,
	MDBRow,
	MDBCol,
	MDBCardBody,
	MDBTable,
	MDBTableHead,
  MDBTableBody,
  MDBBadge
} from "mdbreact";

import { timeDifference, toCurrency } from '../../services/helpers.js'

import BreadcrumSection from "../../components/BreadcrumSection";
import Spinner from "../../components/Spinner";
import useGetReservations from "../../customhooks/useGetReservations";

const Reservations = ({ history }) => {

	const token = localStorage.getItem("userToken");
  const { reservations } = useGetReservations(token, "/reservation/");
  
  const getDayDiff = (date2, date1) => (timeDifference(date2 || new Date(), date1));
  const getTotalPrice = (price, date2, date1) => (toCurrency(+price*parseInt(getDayDiff(date2, date1))));
  const dateToString = (date) => {
    if (date) return new Date(date).toDateString();
    return null;
  }

	return (
		<React.Fragment>
			<BreadcrumSection name="Home" name2="Reservation" />
			<MDBRow className="mb-4">
				<MDBCol size="12" className="pt-3">
					{reservations && reservations.isLoaded ? (
						<MDBCard>
							<MDBCardBody>
								<MDBTable hover>
									<MDBTableHead color="blue-grey lighten-4">
										<tr>
											<th>#</th>
											<th>Room</th>
											<th>Booked Date</th>
											<th>Checkin Date</th>
											<th>Checkout Date</th>
											<th>Days</th>
											<th>Approved</th>
											<th>Unit Price</th>
											<th>Total Price</th>
											<th>Paid</th>
                      <th></th>
										</tr>
									</MDBTableHead>
									<MDBTableBody>
										{reservations &&
										reservations.reservation &&
										reservations.reservation.length > 0 ? (
											reservations.reservation.map((reservation, index) => (
												<tr
													key={index}
													onClick={() =>
														history.push(`/reservation/${reservation.id}`)
													}
													style={{ cursor: "pointer" }}>
													<td>{index + 1}</td>
													<td>{reservation.room.room_name}</td>
													<td>{dateToString(reservation.booked_date)}</td>
													<td>{dateToString(reservation.checkedin_date)}</td>
													<td>{dateToString(reservation.checkout_date) || "Still Lodging"}</td>
													<td>{ getDayDiff(reservation.checkout_date, reservation.checkedin_date)}</td>
													<td>{reservation.approved === 0 ? "NO" : "YES"}</td>
													<td>&#8358; {toCurrency(reservation.price)}</td>
													<td>&#8358; {getTotalPrice(reservation.price, reservation.checkout_date, reservation.checkedin_date)}</td>
													<td>{reservation.paid === 0 ? "NO" : "YES"}</td>
                          <td>
                            { 
                              reservation.checkout_date
                              ? <MDBBadge pill color="default"><span className="text-default">.</span></MDBBadge>
                              : <MDBBadge pill color="danger"><span className="text-danger">.</span></MDBBadge>
                            }
                          </td>
												</tr>
                        
											))
										) : (
											<tr>
												<td colSpan="5">No Records</td>
											</tr>
										)}
									</MDBTableBody>
								</MDBTable>
							</MDBCardBody>
						</MDBCard>
					) : (
						<div className="center">
							<Spinner />
						</div>
					)}
				</MDBCol>
			</MDBRow>
		</React.Fragment>
	);
};

export default Reservations;
