import { useEffect, useRef, useState } from "react";
import useWinnerContext from "../../contexts/WinnerContext";

function useNextQuestion(clicked, setTypingIsDone) {
    const [question, setQuestion] = useState(0);
    const [isQuestion, setIsQuestion] = useState(true);
    const [secondAnswer, setSecondAnswer] = useState(false);
    const { setAboutWinner } = useWinnerContext();

    const AnimationRef = useRef(null);
    useEffect(() => {  // Monitor the qBox animations and activate the questions after each transition
        const node = AnimationRef.current;

        if (node) {
            function handleAnimationEnd() {
                setTimeout(() => {
                    setQuestion(prev => prev === 0 ? prev + 1 : prev);
                    setIsQuestion(true);

                }, 1000);

            };

            node.addEventListener('animationend', handleAnimationEnd);

            return () => {
                node.removeEventListener('animationend', handleAnimationEnd);
            };
        }
    }, [clicked]);


    const handleAnswer = () => {
        setTimeout(() => { // Creates a small delay for better user experience
            setQuestion(prev => prev + 1);
            setIsQuestion(false);
            setTypingIsDone(false);
        }, 500);
    }

    const handleFirstClick = () => {
        setSecondAnswer(true);
    }

    const handleInputText = (e) => {
        const answer = e.target.value.toLowerCase();
        if (answer == 'down here') {
            e.target.classList.add('rightAnswer');
            e.target.setAttribute('disabled', '');
            handleAnswer();
        }
    }


    const handleVideoEnd = () => {
        setIsQuestion(true);
    };

    function handleAboutWinner() {
        setAboutWinner(true);
        localStorage.setItem('isAboutWinner', true);
    }

    return { AnimationRef, question, isQuestion, secondAnswer, handleAnswer, handleFirstClick, handleInputText, handleVideoEnd, handleAboutWinner }
}

export default useNextQuestion