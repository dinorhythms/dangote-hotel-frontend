import React from "react";
import { Link } from 'react-router-dom';
import {
	MDBCard,
	MDBCardBody,
	MDBTable,
	MDBTableBody,
	MDBTableHead,
	MDBCol
} from "mdbreact";
import Spinner from "./Spinner";

import useGetServices from "../customhooks/useGetServices";

const DashboardServices = ({ history }) => {

	const token = localStorage.getItem("userToken");
	const { services: {isLoading, services} } = useGetServices(token, "/servicereservation/");
	
	const dateToString = (date) => {
    if (date) return new Date(date).toDateString();
    return null;
	}

	return (
		<MDBCol md="6">
			<h5>Last 10 Room Services</h5>
			<MDBCard>
				<MDBCardBody>
					<MDBTable hover>
						<MDBTableHead color="blue-grey lighten-4">
							<tr>
								<th>#</th>
								<th>Type</th>
								<th>Name</th>
								<th>Price</th>
								<th>Paid</th>
							</tr>
						</MDBTableHead>
						<MDBTableBody>
							{ services && isLoading ? (
								<tr>
									<td colSpan="4">
										<Spinner/>
									</td>
								</tr>
							) : services &&
							  	services.length > 0 ? (
									services.slice(0, 10).map((service, index) => (
									<tr key={index} onClick={ () => history.push(`/service/${service.id}`) } style={{ cursor: 'pointer' }}>
										<td>{index + 1}</td>
										<td>{service.service.service_name}</td>
										<td>{dateToString(service.booked_date)}</td>
										<td>{service.price}</td>
										<td>{service.paid === 0 ? "NO" : "YES"}</td>
									</tr>
								))
							) : (
								<tr>
									<td colSpan="4">No Records</td>
								</tr>
							)}
						</MDBTableBody>
					</MDBTable>
					<div className="text-center text-muted"><Link to="/service"><small>View all</small></Link></div>
				</MDBCardBody>
			</MDBCard>
		</MDBCol>
	);
};

export default DashboardServices;
