import { useState } from "react";

function random() { // Gives a number between 10 and 80
    return Math.floor(Math.random() * 71) + 10;
};

function checkMoveCooldown(lastMoved, setLastMoved) {
    const moveDelay = 400;
    const now = Date.now();
    if (now - lastMoved < moveDelay) {
        throw new Error("Can't move yet");

    }
    setLastMoved(now);
}

function useUpdateBtnPosition() {
    const [btnPosition, setBtnPosition] = useState({
        x: 50,
        y: 65
    });
    const [count, setCount] = useState(0);
    const [showNext, setshowNext] = useState(false);
    const [lastMoved, setLastMoved] = useState(0);

    const handleMouseMove = (e) => {
        checkMoveCooldown(lastMoved, setLastMoved);

        setBtnPosition({
            x: random(),
            y: random()
        });

        if (count > 20 || (e.touches && count > 3)) {
            setshowNext(true);

        } else {
            setCount(prev => (prev + 1));

        }
    }

    return { btnPosition, showNext, handleMouseMove }

}

export default useUpdateBtnPosition