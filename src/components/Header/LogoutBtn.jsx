// import React from 'react'
// import {useDispatch} from 'react-redux'
// import authService from '../../appwrite/auth'
// import {logout} from '../../store/authSlice'

// function LogoutBtn() {
//     const dispatch = useDispatch()
//     const logoutHandler = () => {
//         authService.logout().then(() => {
//             dispatch(logout())
//             window.location.reload();
//         })
//     }
//   return (
//     <button
//     className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
//     onClick={logoutHandler}
//     >Logout</button>
//   )
// }

// export default LogoutBtn

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false); // State to manage loading

    const logoutHandler = () => {
        setLoading(true); // Set loading state to true when logout starts

        authService.logout().then(() => {
            dispatch(logout());
            window.location.reload(); // Reload the page after logout
        }).finally(() => {
            setLoading(false); // Set loading state back to false after logout completes
        });
    };

    return (
        <>
            {loading ? (
                <div className="flex items-center justify-center">
                    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-8 w-8"></div>
                </div>
            ) : (
                <button
                    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                    onClick={logoutHandler}
                >
                    Logout
                </button>
            )}
        </>
    );
}

export default LogoutBtn;
