import { Outlet, Navigate } from "react-router-dom";

import React from 'react'
import useKcContext from "../../contexts/Kc.context";

function KcProtector() {
    const { usedKc } = useKcContext();
    
    return usedKc ? (<Outlet />) : (<Navigate replace to='404' />)
}

export default KcProtector