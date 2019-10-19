import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBAlert } from 'mdbreact';
import { useDispatch } from 'react-redux';
import { login } from '../../../actions/authActions';
import { LOGIN_SUCCESS } from "../../../types/authTypes";

const FormPage = (props) => {

    //states
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState({ isError: false, message: '' })

    // actions and redux states 
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {

        e.preventDefault();
        setIsLoading(true);

        const credential = { email, password }
        const data = await login(credential);
        if (data.status === 'success') {
            setIsLoading(false);
            dispatch({ type: LOGIN_SUCCESS, payload: data.data });
            props.history.push('/dashboard')
        } else {
            setIsLoading(false);
            setErrorMsg({ isError: true, message: data.error })
        }

    }

    return (
        <MDBContainer className="h-100">
            <MDBRow className="align-items-center h-100">
                <MDBCol md="6 mx-auto">
                    <MDBCard className="p-5">
                        <MDBCardBody>
                            <form onSubmit={handleSubmit}>
                                <p className="h3 text-center mb-4">Sign in</p>
                                <div className="grey-text">
                                    <MDBInput
                                        label="Type your email"
                                        icon="envelope"
                                        group
                                        type="email"
                                        validate
                                        error="wrong"
                                        success="right"
                                        onChange={(e) => { setEmail(e.target.value); setErrorMsg({ isError: false, message: '' }) }}
                                    />
                                    <MDBInput
                                        label="Type your password"
                                        icon="lock"
                                        group
                                        type="password"
                                        validate
                                        onChange={(e) => { setPassword(e.target.value); setErrorMsg({ isError: false, message: '' }) }}
                                    />
                                </div>
                                <div className="text-center">
                                    <MDBBtn type="submit" disabled={isLoading}>{isLoading ? "Loading..." : "Login"}</MDBBtn>
                                </div>
                                {errorMsg && errorMsg.isError?(
                                    <MDBAlert color="danger mt-3 text-center">
                                        {errorMsg.message}
                                    </MDBAlert>
                                ):null}

                            </form>
                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default FormPage;