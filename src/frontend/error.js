import React from 'react';
import { Link } from 'react-router-dom';
import '../newapp/css/error.css';
const Error =()=>{
    let TOKEN5  = localStorage.getItem('token');
    //localStorage.clear();
    console.log(TOKEN5);
    return(
        <>
            <div className="errortext">
                <h1>404 - Page Not Found.</h1>
            </div>
            <div className="errorLink">
                <Link  to="/">Back to Home</Link>
            </div>
        </>
    );
};
export default Error;