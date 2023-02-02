import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";

// export const ProtectedRoute = ( props: any ) => {
//     // console.log(props.isSignedIn)
//     if (props.isSignedIn === undefined) {
//         return <Navigate to="/account" replace />
//     }
//     return props.children
// };



export const ProtectedRoute = ({ isSignedIn, children }: { isSignedIn: any, children: React.ReactElement }) => { 

    if (isSignedIn === undefined) {
        return <div>Loading...</div>
    }

    if (isSignedIn === null) {
         return <Navigate to="/account" replace />
    }
    return children
};

