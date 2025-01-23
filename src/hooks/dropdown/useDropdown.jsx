import { useEffect, useRef, useState } from "react";

function useDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [titleHeight, setTitleHeight] = useState(0);
    const [hideText, setHideText] = useState(true);

    const titleRef = useRef(null);


    useEffect(() => {
        const observer = new ResizeObserver((entries) => {
            entries.forEach((entry) => {
                setTitleHeight(entry.contentRect.height); // Updates the state with the new height
            })
        });

        if (titleRef.current) {
            observer.observe(titleRef.current); // Determines which element to observe
        }

        return () => {
            if (titleRef.current) {
                observer.unobserve(titleRef.current);
            }

        };

    }, []);

    const handleClick = () => {
        if (isOpen && !hideText) {
            setTimeout(() => {
                setHideText(true);
            }, 1000)
        } else {
            setHideText(false);
        }

        setIsOpen(!isOpen);

    }

    return { isOpen, titleHeight, hideText, titleRef, handleClick }
}

export default useDropdown