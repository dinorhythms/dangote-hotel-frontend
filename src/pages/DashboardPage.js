import React from 'react';

//Components
import { MDBRow } from 'mdbreact';
import AdminCardSection1 from '../components/AdminCardSection1';
import BreadcrumSection from '../components/BreadcrumSection';
import DashboardReservation from '../components/DashboardReservation';
import DashboardServices from '../components/DashboardServices';

// Actions
import useGetReservations from '../customhooks/useGetReservations';
import useGetServices from '../customhooks/useGetServices';

const DashboardPage = (props) => {
  const token = localStorage.getItem("userToken");
  
  const { reservations } = useGetReservations(token, '/reservation/');
  const { services } = useGetServices(token, '/servicereservation/');
  
  return (
    <React.Fragment>
      <BreadcrumSection name="Home" name2="Dashboard" />
      <AdminCardSection1 revData={ reservations.reservation } servData={ services.services } />
      <MDBRow className="mb-4">
        <DashboardReservation name='Reservation' data={reservations} {...props} />
        <DashboardServices  name='Room Services' data={services} {...props} />
      </MDBRow>
    </React.Fragment>
  )
}

export default DashboardPage;