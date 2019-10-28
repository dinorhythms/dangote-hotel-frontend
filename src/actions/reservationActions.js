import axios from 'axios';

const apiPath = process.env.REACT_APP_BACKEND;

export const getReservationAction = async (token) => {
  try {
    const url = `${apiPath}/reservation/`;
    const response = await axios({
        method: 'get',
        url: url,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    return response.data;
  } catch (error) {
    if(error.response) return error.response.data.error
		return 'Connection Error!';
  }
}

export const getReservationByIdAction = async (token, id) => {
  try {
    const url = `${apiPath}/reservation/${id}`;
    const response = await axios({
        method: 'get',
        url: url,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    return response.data;
  } catch (error) {
    if(error.response) return error.response.data.error
		return 'Connection Error!';
  }
}

export const getServicesAction = async (token) => {
  try {
    const url = `${apiPath}/servicereservation/`;
    const response = await axios({
        method: 'get',
        url: url,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    return response.data;
  } catch (error) {
    if(error.response) return error.response.data.error
		return 'Connection Error!';
  }
}

export const getServiceByIdAction = async (token, id) => {
  try {
    const url = `${apiPath}/servicereservation/${id}`;
    const response = await axios({
        method: 'get',
        url: url,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    return response.data;
  } catch (error) {
    if(error.response) return error.response.data.error
		return 'Connection Error!';
  }
}