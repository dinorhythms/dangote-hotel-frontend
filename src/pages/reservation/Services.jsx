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

import { toCurrency } from "../../services/helpers.js";

import BreadcrumSection from "../../components/BreadcrumSection";
import Spinner from "../../components/Spinner";
import useGetServices from "../../customhooks/useGetServices.js";

const Services = ({ history }) => {
	const token = localStorage.getItem("userToken");
  const { services } = useGetServices(token, "/servicereservation/");

	const dateToString = date => {
		if (date) return new Date(date).toDateString();
		return null;
	};

	return (
		<React.Fragment>
			<BreadcrumSection name="Home" name2="Services" />
			<MDBRow className="mb-4">
				<MDBCol size="12" className="pt-3">
					{services && services.isLoaded ? (
						<MDBCard>
							<MDBCardBody>
								<MDBTable hover>
									<MDBTableHead color="blue-grey lighten-4">
										<tr>
											<th>#</th>
											<th>Service</th>
											<th>Booked Date</th>
											<th>Approved</th>
											<th>Unit Price</th>
											<th>Total Price</th>
											<th>Paid</th>
											<th></th>
										</tr>
									</MDBTableHead>
									<MDBTableBody>
										{services &&
										services.services &&
                    services.services.length > 0 ? (
											services.services.map((service, index) => (
												<tr
													key={index}
													onClick={() =>
														history.push(`/service/${service.id}`)
													}
													style={{ cursor: "pointer" }}>
													<td>{index + 1}</td>
													<td>{service.service.service_name}</td>
													<td>{dateToString(service.booked_date)}</td>
													<td>{service.approved === 0 ? "NO" : "YES"}</td>
													<td>&#8358; {toCurrency(service.price)}</td>
													<td>{service.paid === 0 ? "NO" : "YES"}</td>
													<td>
														{service.checkout_date ? (
															<MDBBadge pill color="default">
																<span className="text-default">.</span>
															</MDBBadge>
														) : (
															<MDBBadge pill color="danger">
																<span className="text-danger">.</span>
															</MDBBadge>
														)}
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

export default Services;
