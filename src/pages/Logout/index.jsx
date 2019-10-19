import React from "react";
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { LOGOUT_SUCCESS } from "../../types/authTypes";

const Logout = (props) => {

    const dispatch = useDispatch()
    dispatch({ type: LOGOUT_SUCCESS });

    return (
      <Redirect to="/" />
    );
};

export default Logout;