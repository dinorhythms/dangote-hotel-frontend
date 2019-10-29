import React from "react";
import { MDBRow, MDBCol, MDBCardImage, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn  } from "mdbreact";
import { toCurrency } from '../../services/helpers';

import BreadcrumSection from "../../components/BreadcrumSection";
import useGetRooms from "../../customhooks/useGetRooms";
import Spinner from "../../components/Spinner";

const Rooms = () => {
	const token = localStorage.getItem("userToken");
	const { rooms, isLoading } = useGetRooms(token, "/room");
	return (
		<React.Fragment>
			<BreadcrumSection name="Home" name2="Rooms" />
			<div className="white p-4">
				{rooms && !isLoading ? (
					<MDBRow>
						{rooms.slice(0,10).map((room, index) => (
              <MDBCol size="4" key={index}>
                <MDBCard style={{ marginBottom: "2rem" }}>
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                  <MDBCardBody>
                    <MDBCardTitle>{room.room_name}</MDBCardTitle>
                    <MDBCardText>
                      {room.description}
                    </MDBCardText>
                    <h4>&#8358; {toCurrency(room.roomtype.price)}</h4>
                    <MDBBtn href="#" className="ml-0">More</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))}
					</MDBRow>
				) : (
					<div className="center">
						<Spinner />
					</div>
				)}
			</div>
		</React.Fragment>
	);
};

export default Rooms;
