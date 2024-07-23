import React, { useEffect, useRef, useState } from 'react';
import * as S from './QBox_Style';
import { H3 } from '../hello/Hello_Style';
import { Typewriter } from 'react-simple-typewriter';
import TypeEfct from '../TypeEfct.jsx';

function QBox() {

    const [clicked, setClicked] = useState(false);
    const [animationIsDone, setAnimationIsDone] = useState(false);
    const [typingIsDone, setTypingIsDone] = useState(false);
    const [question, setQuestion] = useState(0); // all .5 are responses to the user
    const [isQuestion, setIsQuestion] = useState(true);
    const [secondTyping, setSecondTyping] = useState(false);
    const [giveHint, setGiveHint] = useState(false);

    const [secondAnswer, setSecondAnswer] = useState(
        <span
            onClick={() => {
                setSecondAnswer(<span onClick={handleSecondAnswer} style={{ color: 'red', display: 'inline-block' }}>
                    <S.Input type="radio" id="yep" name='notIt' /> </span>);
            }}>
            you
        </span>);

    const ConfirmRef = useRef(null);

    useEffect(() => {
        const node = ConfirmRef.current;
        if (node) {
            function handleAnimationEnd() {
                setTimeout(() => {
                    setQuestion(1);
                    setIsQuestion(true);
                }, 1000);

                setTimeout(() => { //gambiarra relacionada ao fim da digitação da segunda pergunta
                    setSecondTyping(true);
                }, 11500);
            };

            node.addEventListener('animationend', handleAnimationEnd);

            return () => {
                node.removeEventListener('animationend', handleAnimationEnd);
            };
        }
    }, [question]);

    function handleClick() {
        setClicked(true);
    }

    function handleFirstAnswer() {
        setTimeout(() => { // cria um pequeno atraso para melhor experiência do usuário
            setQuestion(0.5);
            setIsQuestion(false);
        }, 500);
    }

    function handleFakeAnswers() {
        setGiveHint(true);
    }

    function handleSecondAnswer() {
        setTimeout(() => { 
            setQuestion(1.5);
            setIsQuestion(false);
        }, 500);
    }

    // TESTES 

    useEffect(() => {  // fica de olho na animação da qBox e ao fim habilita a primeira pergunta
        const node = ConfirmRef.current;
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

    function handleTyping() {
        setTypingIsDone(true);
    }

    // TESTES
    return (
        <S.Container>
            {!clicked && <S.SeeBtn onClick={handleClick}>See More...</S.SeeBtn>}

            {clicked &&
                <S.Question_Box $display={isQuestion} ref={ConfirmRef}>

                    {/* FIRST QUESTION */}
                    {(animationIsDone && question == 0) &&
                        <H3>
                            <TypeEfct text={['', 'So here we are again, uh? If you wanna know more about him, you\'ll have to answer some questions of mine, do you agree?']} onDone={handleTyping} />
                        </H3>
                    }

                    {(typingIsDone && question == 0) &&
                        <S.Anwsers $options={2}>
                            <S.Input type="radio" id="yes" name='agreed' />
                            <S.Label htmlFor="yes">Yes</S.Label>
                            <S.Input onChange={handleFirstAnswer} type="radio" id="no" name='agreed' />
                            <S.Label htmlFor="no">No</S.Label>
                        </S.Anwsers>
                    }
                    {/* END OF FIRST QUESTION */}

                    {question == 0.5 &&
                        <S.Confirmation_Statement ref={ConfirmRef}>
                            CHALLENGE ACCEPTED
                        </S.Confirmation_Statement>
                    }

                    {/* SECOND QUESTION */}
                    {question == 1 && <>
                        <H3>
                            <Typewriter
                                words={['', 'First Question: What is the answer to The Ultimate Question of Life, The Universe and Everything?']}
                                cursor />
                        </H3>
                        {giveHint &&
                            <S.Para>Hint: the answer is inside {secondAnswer}</S.Para>}

                        {secondTyping &&
                            <S.Anwsers $options={4}>
                                <S.Input onChange={handleFakeAnswers} type="radio" id="towels" name='notIt' />
                                <S.Label htmlFor="towels">Towels</S.Label>
                                <S.Input onChange={handleFakeAnswers} type="radio" id="love" name='notIt' />
                                <S.Label htmlFor="love">Love</S.Label>
                                <S.Input onChange={handleFakeAnswers} type="radio" id="evolution" name='notIt' />
                                <S.Label htmlFor="evolution">Evolution</S.Label>
                                <S.Input onChange={handleFakeAnswers} type="radio" id="god" name='notIt' />
                                <S.Label htmlFor="god">God</S.Label>
                            </S.Anwsers>
                        }
                    </>
                    }
                    {/* END OF SECOND QUESTION */}

                    {question == 1.5 &&
                        <S.Confirmation_Statement>
                            YO-HO-HOOOW!
                        </S.Confirmation_Statement>
                    }
                </S.Question_Box>
            }
        </S.Container>
    )
}

export default QBox