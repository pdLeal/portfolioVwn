import { useState } from "react";

function useHandleAnswers(setTypingIsDone) {
    const [question, setQuestion] = useState(0); // all .5 are responses to the user
    const [isQuestion, setIsQuestion] = useState(true);

    const firstAnswer = () => {
        setTimeout(() => { // cria um pequeno atraso para melhor experiência do usuário
            setQuestion(0.5);
            setIsQuestion(false);
            setTypingIsDone(false);
        }, 500);
    }

    return { question, isQuestion, setQuestion, setIsQuestion, firstAnswer }
}

export default useHandleAnswers