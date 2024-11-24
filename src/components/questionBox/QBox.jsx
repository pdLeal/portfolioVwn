import React, { useEffect, useRef, useState } from 'react';
import * as S from './QBox_Style';
import { H3 } from '../hello/Hello_Style';
import TypeEfct from '../TypeEfct.jsx';
import redBallons from '../../assets/you_float_too.mp4';
import pennywiseLaught from '../../assets/PennywiseLaugh.mp3';
import useWinnerContext from '../../contexts/WinnerContext.js';

function QBox() {

    const [clicked, setClicked] = useState(false);
    const [animationIsDone, setAnimationIsDone] = useState(false);
    const [typingIsDone, setTypingIsDone] = useState(false);
    const [question, setQuestion] = useState(0); // all .5 are responses to the user
    const [isQuestion, setIsQuestion] = useState(true);
    const [giveHint, setGiveHint] = useState(false);

    const [secondAnswer, setSecondAnswer] = useState(
        <span
            onClick={() => {
                setSecondAnswer(<span onClick={handleSecondAnswer} style={{ color: 'red', display: 'inline-block' }}>
                    <S.Input type="radio" id="yep" name='notIt' />
                    <S.Label htmlFor="yep">42</S.Label>
                </span>);
            }}>
            you
        </span>);

    // referências ligadas às animações
    const ConfirmRef = useRef(null);
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

    useEffect(() => {  // fica de olho na animação das transições e habilita a próxima pergunta
        const node = ConfirmRef.current;
        if (node) {
            function handleAnimationEnd() {
                setTimeout(() => {
                    if (question == 0.5) {
                        setQuestion(1);

                    } else if (question == 1.5) {
                        setQuestion(2);
                    }

                    setIsQuestion(true);

                }, 1000);
            };

            node.addEventListener('animationend', handleAnimationEnd);

            return () => {
                node.removeEventListener('animationend', handleAnimationEnd);
            };
        }
    }, [question]);

    // red para auto-foco do input de text
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [typingIsDone]);

    // context logic
    const { aboutWinner, setAboutWinner } = useWinnerContext();


    // funções
    function handleClick() {
        setClicked(true);
    }

    function handleTyping() {
        setTypingIsDone(true);
    }

    function handleFirstAnswer() {
        setTimeout(() => { // cria um pequeno atraso para melhor experiência do usuário
            setQuestion(0.5);
            setIsQuestion(false);
            setTypingIsDone(false);
        }, 500);
    }

    function handleFakeAnswers() {
        setGiveHint(true);
    }

    function handleSecondAnswer() {
        setTimeout(() => {
            setQuestion(1.5);
            setIsQuestion(false);
            setTypingIsDone(false);
        }, 500);
    }

    function handleInputText(e) {
        const answer = e.target.value.toLowerCase();
        if (answer == 'down here') {
            e.target.classList.add('rightAnswer');
            e.target.setAttribute('disabled', '');

            setTimeout(() => {
                setQuestion(2.5);
                setIsQuestion(false);
                setTypingIsDone(false);
                document.body.style.overflow = 'hidden';
            }, 500);
        }
    }

    function handleVideoEnd() {
        setQuestion(3);
        setIsQuestion(true);
        document.body.style.overflow = 'visible';
    };

    function handleAboutWinner() {
        setAboutWinner(true);
        localStorage.setItem('isAboutWinner', true);
    }

    return (
        <S.Container>
            {!clicked && <S.SeeBtn onClick={handleClick}>See More...</S.SeeBtn>}

            {clicked &&
                <S.Question_Box $display={isQuestion} ref={ConfirmRef}>

                    {/* FIRST QUESTION */}
                    {(animationIsDone && question == 0) &&
                        <>
                            <H3>
                                <TypeEfct text={['', 'So here we are again, uh? If you wanna know more about him, you\'ll have to answer some questions of mine, do you agree?']} onDone={handleTyping} />
                            </H3>

                            {typingIsDone &&
                                <S.Anwsers $options={2}>
                                    <S.Input type="radio" id="yes" name='agreed' />
                                    <S.Label htmlFor="yes">Yes</S.Label>
                                    <S.Input onChange={handleFirstAnswer} type="radio" id="no" name='agreed' />
                                    <S.Label htmlFor="no">No</S.Label>
                                </S.Anwsers>
                            }
                        </>
                    }

                    {/* END OF FIRST QUESTION */}

                    {question == 0.5 &&
                        <S.Confirmation_Statement ref={ConfirmRef}>
                            CHALLENGE ACCEPTED
                        </S.Confirmation_Statement>
                    }

                    {/* SECOND QUESTION */}
                    {question == 1 &&
                        <>
                            <H3>
                                <TypeEfct text={['', 'First Question: What is the answer to The Ultimate Question of Life, The Universe and Everything?']} onDone={handleTyping} />
                            </H3>
                            {giveHint &&
                                <S.Para>Hint: the answer is inside {secondAnswer}</S.Para>}

                            {typingIsDone &&
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
                        <S.Confirmation_Statement ref={ConfirmRef}>
                            YO-HO-HOOOW!
                        </S.Confirmation_Statement>
                    }

                    {/* THIRD QUESTION */}
                    {question == 2 &&
                        <>
                            <H3>
                                <TypeEfct text={['', 'Complete the sentence: We all float...']} onDone={handleTyping} /> 
                            </H3>

                            {typingIsDone &&
                                <S.TextInput onChange={handleInputText} type="text" ref={inputRef} />
                            }


                        </>
                    }
                    {/* END OF THIRD QUESTION */}

                    {question == 2.5 &&
                        <S.Test>
                            <S.Video autoPlay preload='true' onEnded={handleVideoEnd}>
                                <source src={redBallons} type="video/mp4" />
                            </S.Video>
                            <audio autoPlay preload='true'>
                                <source src={pennywiseLaught} type="audio/mp3" />
                            </audio>
                        </S.Test>
                    }

                    {/* LAST QUESTION */}
                    {question == 3 &&
                            <H3>
                                <TypeEfct
                                text={['', 'You shall pass...for now']}
                                onDone={handleAboutWinner} />
                            </H3>
                    }
                </S.Question_Box>
            }
        </S.Container>
    )
}

export default QBox