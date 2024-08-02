import { Outlet, Navigate } from "react-router-dom";

import React from 'react'
import useWinnerContext from "../../contexts/WinnerContext";

function AboutProtector() {
    const { aboutWinner } = useWinnerContext();
    return aboutWinner ? (<Outlet />) : (<Navigate replace to='/denied' />)
}

export default AboutProtector