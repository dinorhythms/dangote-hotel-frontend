import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../customhooks/useAuth';

const Auth = (props) => {
  const { auth, loading } = useAuth();
  if(loading) return '...Loading';
  if(auth && auth.isLoaded && !auth.isAuthenticated) return <Redirect to="/" />
  return (
    props.children
  );
}

export default Auth;