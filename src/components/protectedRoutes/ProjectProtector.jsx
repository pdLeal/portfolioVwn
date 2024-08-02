import { Outlet, Navigate } from "react-router-dom";

import React from 'react'
import useWinnerContext from "../../contexts/WinnerContext";

function ProjectProtector() {
    const { projectWinner } = useWinnerContext();
    return projectWinner ? (<Outlet />) : (<Navigate replace to='/denied' />)
}

export default ProjectProtector