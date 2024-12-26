import { useEffect, useState } from "react";

function useShowBtns(showNext) {
    const [showBtn, setShowBtn] = useState(false);
    const [showWeakBtn, setShowWeakBtn] = useState(false);
    const [canSkip, setCanSkip] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('skippable')) setCanSkip(true);

    }, []);


    const handleTypeDone = () => {
        if (!showNext) {
            setShowBtn(true);

        } else {
            setShowWeakBtn(true);

        }
    }

    return {showBtn, showWeakBtn, canSkip, handleTypeDone}
}

export default useShowBtns