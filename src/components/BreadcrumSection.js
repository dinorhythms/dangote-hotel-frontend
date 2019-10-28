import React from 'react';
import { useSelector } from 'react-redux';
import { MDBCard, MDBCardBody, MDBBreadcrumb, MDBBreadcrumbItem, MDBFormInline } from 'mdbreact';

const BreadcrumSection = (props) => {

  const user = useSelector(state => state.auth.user);
 
  return (
    <MDBCard className="mb-3">
        <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
            <MDBBreadcrumb>
                <MDBBreadcrumbItem>{props.name}</MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>{props.name2}</MDBBreadcrumbItem>
            </MDBBreadcrumb>
            <MDBFormInline className="md-form m-0 text-primary">
              {user?user.first_name+' '+user.last_name:null}
            </MDBFormInline>
        </MDBCardBody>
    </MDBCard>
  )
}

export default BreadcrumSection;

