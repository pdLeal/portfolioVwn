import { useEffect, useState } from "react";

function useShowBtns(timesMoved) {
    
    const [showNext, setshowNext] = useState(false);
    const [showBtn, setShowBtn] = useState(false);
    const [showWeakBtn, setShowWeakBtn] = useState(false);
    const [canSkip, setCanSkip] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('skippable')) setCanSkip(true);

    }, []);


    const handleTypeDone = (e) => {
        if (timesMoved > 10 || (e.touches && count > 3)) {
            setshowNext(true);
            // Ensures the user must interact with the button before triggering the next message.
        }

        if (!showNext) {
            setShowBtn(true);

        } else {
            setShowWeakBtn(true);

        }
    }

    return {showNext, showBtn, showWeakBtn, canSkip, handleTypeDone}
}

export default useShowBtns