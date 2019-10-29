import React from "react";

// Components
import { MDBRow } from "mdbreact";
import AdminCardSection1 from "../components/AdminCardSection1";
import BreadcrumSection from "../components/BreadcrumSection";
import DashboardReservation from "../components/DashboardReservation";
import DashboardServices from "../components/DashboardServices";

const DashboardPage = props => {
	return (
		<React.Fragment>
			<BreadcrumSection name="Home" name2="Dashboard" />
			<AdminCardSection1 />
			<MDBRow className="mb-4">
				<DashboardReservation {...props} />
				<DashboardServices {...props} />
			</MDBRow>
		</React.Fragment>
	);
};

export default DashboardPage;
