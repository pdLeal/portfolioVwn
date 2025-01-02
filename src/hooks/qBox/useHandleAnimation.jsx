import { useEffect, useRef, useState } from "react";

function useHandleAnimation(clicked) {
    const [animationIsDone, setAnimationIsDone] = useState(false);
    const AnimationRef = useRef(null);

    useEffect(() => {  // fica de olho na animação da qBox e ao fim habilita a primeira pergunta
        const node = AnimationRef.current;

        if (node) {
            function handleAnimationEnd() {
                setAnimationIsDone(true);
            };

            node.addEventListener('animationend', handleAnimationEnd);

            return () => {
                node.removeEventListener('animationend', handleAnimationEnd);
            };
        }
    }, [clicked]);

    return { animationIsDone, AnimationRef }
}

export default useHandleAnimation