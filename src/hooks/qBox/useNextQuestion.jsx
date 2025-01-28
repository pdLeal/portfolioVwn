import { useEffect, useRef, useState } from "react";
import useWinnerContext from "../../contexts/WinnerContext";
import useKcContext from "../../contexts/Kc.context";
import { useNavigate } from "react-router-dom";

function useNextQuestion(clicked, setTypingIsDone) {
    const [question, setQuestion] = useState(0);
    const [isQuestion, setIsQuestion] = useState(true);
    const [secondAnswer, setSecondAnswer] = useState(false);
    const [userKeys, setUserKeys] = useState([]);
    const { setAboutWinner } = useWinnerContext();
    const { setUsedKc } = useKcContext();
    const navigate = useNavigate()

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

        setTimeout(() => {
            if (question === 3) {
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) { // Firefox
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari
                    document.documentElement.webkitRequestFullscreen();
                } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
                    document.documentElement.msRequestFullscreen();
                }
            }
        }, 900) // A different delay so the window gets full screen when the video starts
    }

    const handleFirstClick = () => {
        setSecondAnswer(true);
    }

    const handleInputText = (e, lang) => {
        const userAnswer = e.target.value.toLowerCase();
        const rightAnswer = lang == "en" ? "down here" : "aqui embaixo";
        if (userAnswer == rightAnswer) {
            e.target.classList.add('rightAnswer');
            e.target.setAttribute('disabled', '');
            handleAnswer();
        }
    }

    const kc = e => {
        const kc = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "B", "A"];

        setUserKeys(prev => {
            const keys = [...(prev || []), e.key].slice(-kc.length);

            if (keys.join("").toUpperCase() === kc.join("").toUpperCase()) {
                setUsedKc(true);
                navigate("/kc");
            }
            return keys;
        });
    }


    const handleVideoEnd = () => {
        setIsQuestion(true);
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
    };

    const handleAboutWinner = () => {
        setAboutWinner(true);
        localStorage.setItem('isAboutWinner', true);
    }

    return { AnimationRef, question, isQuestion, secondAnswer, handleAnswer, handleFirstClick, handleInputText, kc, handleVideoEnd, handleAboutWinner }
}

export default useNextQuestion