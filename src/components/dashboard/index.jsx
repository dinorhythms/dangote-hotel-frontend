import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function Dashboard(props) {

    const auth = useSelector(state=>state.auth);

    useEffect(() => {
        // if(auth.isLoading)
        // if(!isAuthenticated) props.history.push('/')
    })

    if(auth.isAuthenticated) {
        console.log("logged in")
    } else{
        console.log("NOT logged in")
        // props.history.push('/')
    }

    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}
