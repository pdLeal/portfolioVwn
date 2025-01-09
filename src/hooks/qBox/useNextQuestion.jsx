import { useEffect, useRef, useState } from "react";

function useNextQuestion(clicked, setTypingIsDone) {
    const [question, setQuestion] = useState(0);
    const [isQuestion, setIsQuestion] = useState(true);
    const [secondAnswer, setSecondAnswer] = useState(false);

    const AnimationRef = useRef(null);
    useEffect(() => {  // fica de olho na animação da qBox e ao fim habilita a primeira pergunta
        const node = AnimationRef.current;

        if (node) {
            function handleAnimationEnd() {
                setTimeout(() => {
                    setQuestion(prev => prev === 0 ? prev + 1 : prev);
                    setIsQuestion(true); // Importante pra lidar com o fim do confirmation statment

                }, 1000);
                
            };

            node.addEventListener('animationend', handleAnimationEnd);

            return () => {
                node.removeEventListener('animationend', handleAnimationEnd);
            };
        }
    }, [clicked]);


    const handleAnswer = () => {
        setTimeout(() => { // cria um pequeno atraso para melhor experiência do usuário
            setQuestion(prev => prev + 1);

            setIsQuestion(false);
            setTypingIsDone(false);
        }, 500);
    }

    const handleFirstClick = () => {
        setSecondAnswer(true);
    }

    return { question, isQuestion, AnimationRef, handleAnswer, setQuestion, setIsQuestion, secondAnswer, handleFirstClick }
}

export default useNextQuestion