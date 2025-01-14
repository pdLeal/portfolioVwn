import { useState } from "react";
import checkCooldown from "../../utils/checkCooldown";

function random() { // Gives a number between 10 and 80
    return Math.floor(Math.random() * 71) + 10;
};

function useUpdateBtnPosition() {
    const [btnPosition, setBtnPosition] = useState({
        x: 50,
        y: 65
    });
    const [timesMoved, setTimesMoved] = useState(0);
    const [lastMoved, setLastMoved] = useState(0);

    const handleMouseMove = () => {
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

        setTimesMoved(prev => (prev + 1));

    }

    return { btnPosition, timesMoved, handleMouseMove }

}

export default useUpdateBtnPosition