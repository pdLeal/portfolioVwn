import { useEffect, useState } from "react";

function useHardMode() {
    const [hardModeIsOn, setHardModeIsOn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('hardModeIsOn')) {
            setHardModeIsOn(true)
        }
    }, [])

    const handleHardMode = (handleRestart) => {
        handleRestart();

        setHardModeIsOn(!hardModeIsOn);

        if (!localStorage.getItem('hardModeIsOn')) {
            localStorage.setItem('hardModeIsOn', true)
        } else {
            localStorage.removeItem('hardModeIsOn')
        }
    }

    return { hardModeIsOn, handleHardMode }
}

export default useHardMode

