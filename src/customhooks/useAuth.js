import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export const useAuth = () => {
  const [state, setState] = useState({ loading: true, auth: null });
  const auth = useSelector(state => state.auth);
  useEffect(() => {
    if(auth.isLoaded) setState({ loading: false, auth: auth});
  },[auth])
  return state;
}
