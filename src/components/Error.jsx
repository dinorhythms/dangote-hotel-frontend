import React, { useEffect, useState } from 'react';
import { MDBAlert } from "mdbreact";
import { useSelector, useDispatch } from 'react-redux';
import { CLEAR_ERROR } from '../types/errorTypes';

const Error = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState();
  const msg = useSelector(state => state.error.message);
  useEffect(() => {
    setMessage(msg);
    return () => {
      setTimeout(() => {
        dispatch({ type: CLEAR_ERROR }) 
      }, 3000);
    }
  }, [msg, dispatch])

  return (
    <>
      {message?(
        <MDBAlert color="danger">
          {message}
        </MDBAlert>
      ):null}

    </>
  )
}

export default Error;
