import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Auth = (props) => {
  const auth = useSelector(state => state.auth);
  if(auth.isLoaded && !auth.isAuthenticated) return <Redirect to="/" />
  return (
    props.children
  );
}

export default Auth;