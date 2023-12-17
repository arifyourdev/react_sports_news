import React, { useState, useEffect } from 'react';
import { useNavigate ,useLocation } from 'react-router-dom';
import './cricket.css';

const Spinner = ({path = "n_login"}) => {

    const [count, setCount] = useState(2);
    const navigate = useNavigate();
    const location  = useLocation();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((preValue) => --preValue)
        }, 1000);
        count == 0 && navigate(`/${path}`,{
            state:location.pathname
        })
        return () => clearTimeout(interval)
    }, [count,navigate,location,path])


    return (
        <>
            <div class="d-flex justify-content-center flex-column align-items-center" style={{ height: "80vh" }}>
                <h3 className=''>You are not allowed here Please login first <span className='text-danger'>{count}</span></h3>
                <div class="spinner-border text-danger" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}

export default Spinner