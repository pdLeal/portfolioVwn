import { useState } from "react";
import { checkCooldown } from "../../utils/checkCooldown";

function random() { // Gives a number between 10 and 80
    return Math.floor(Math.random() * 71) + 10;
};

function useUpdateBtnPosition() {
    const [btnPosition, setBtnPosition] = useState({
        x: 50,
        y: 65
    });
    const [count, setCount] = useState(0);
    const [showNext, setshowNext] = useState(false);
    const [lastMoved, setLastMoved] = useState(0);

    const handleMouseMove = (e) => {
        try {
            checkCooldown(lastMoved, setLastMoved, 350);
            // Ensures the button doesn't "run away" too quickly, making it easier for users to click.
        } catch (error) {
            return;
        }

        setBtnPosition({
            x: random(),
            y: random()
        });

        if (count > 10 || (e.touches && count > 3)) {
            setshowNext(true);
            // Ensures the user must interact with the button before triggering the next message.
        } else {
            setCount(prev => (prev + 1));

        }
    }

    return { btnPosition, showNext, handleMouseMove }

}

export default useUpdateBtnPosition