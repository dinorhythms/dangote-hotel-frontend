import React, { useState, useEffect } from "react";
import {
	MDBCard,
	MDBCardBody,
	MDBTable,
	MDBTableBody,
	MDBTableHead,
	MDBCol
} from "mdbreact";

const DashboardServices = ({ name, data }) => {
	const [historyData, setHistoryData] = useState();

	useEffect(() => {
		setHistoryData(data);
	}, [historyData, data]);

	return (
		<MDBCol md="6">
			<h5>{name} History</h5>
			<MDBCard>
				<MDBCardBody>
					<MDBTable hover>
						<MDBTableHead color="blue-grey lighten-4">
							<tr>
								<th>#</th>
								<th>Type</th>
								<th>Name</th>
								<th>Paid</th>
							</tr>
						</MDBTableHead>
						<MDBTableBody>
							{historyData && !historyData.isLoaded ? (
								<tr>
									<td colSpan="4">
										<div className="spinner-border" role="status">
											<span className="sr-only">Loading...</span>
										</div>
									</td>
								</tr>
							) : historyData &&
							  historyData.services &&
							  historyData.services.length > 0 ? (
								historyData.services.map((service, index) => (
									<tr key={index}>
										<td>{index + 1}</td>
										<td>{service.room.room_name}</td>
										<td>{service.booked_date}</td>
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
				</MDBCardBody>
			</MDBCard>
		</MDBCol>
	);
};

export default DashboardServices;
