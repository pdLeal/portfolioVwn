import React, { useEffect, useRef, useState } from 'react';
import * as S from './QBox_Style';
import { H3 } from '../hello/Hello_Style';
import TypeEfct from '../TypeEfct.jsx';
import redBallons from '../../assets/you_float_too.mp4';
import pennywiseLaught from '../../assets/PennywiseLaugh.mp3';
import useWinnerContext from '../../contexts/WinnerContext.js';
import useNextQuestion from '../../hooks/qBox/useNextQuestion.jsx';

function QBox() {
    const [clicked, setClicked] = useState(false);
    const [typingIsDone, setTypingIsDone] = useState(false);
    const [giveHint, setGiveHint] = useState(false);

    const { question, isQuestion, AnimationRef, handleAnswer, setQuestion, setIsQuestion, secondAnswer, handleFirstClick } = useNextQuestion(clicked, setTypingIsDone)


    // ref para auto-foco do input de text
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [typingIsDone]);

    // context logic
    const { setAboutWinner } = useWinnerContext();


    // funções
    function handleInputText(e) {
        const answer = e.target.value.toLowerCase();
        if (answer == 'down here') {
            e.target.classList.add('rightAnswer');
            e.target.setAttribute('disabled', '');

            setTimeout(() => {
                setQuestion(4);
                setIsQuestion(false);
                setTypingIsDone(false);
                // document.body.style.overflow = 'hidden';
            }, 500);
        }
    }

    function handleVideoEnd() {
        setIsQuestion(true);
        // document.body.style.overflow = 'visible';
    };

    function handleAboutWinner() {
        setAboutWinner(true);
        localStorage.setItem('isAboutWinner', true);
    }

    return (
        <S.Container>
            {!clicked && <S.SeeBtn onClick={() => setClicked(true)}>See More...</S.SeeBtn>}

            {clicked &&
                <S.Question_Box $display={isQuestion} ref={AnimationRef}>

                    {/* FIRST QUESTION */}
                    {(question == 1 && isQuestion) &&
                        <>
                            <H3>
                                <TypeEfct text={['', 'So here we are?']} onDone={() => setTypingIsDone(true)} />
                                {/*  again, uh? If you wanna know more about him, you\'ll have to answer some questions of mine, do you agree */}
                            </H3>

                            {typingIsDone &&
                                <S.Anwsers $options={2}>
                                    <S.Input type="radio" id="yes" name='agreed' />
                                    <S.Label htmlFor="yes">Yes</S.Label>
                                    <S.Input onChange={handleAnswer} type="radio" id="no" name='agreed' />
                                    <S.Label htmlFor="no">No</S.Label>
                                </S.Anwsers>
                            }
                        </>
                    }

                    {/* END OF FIRST QUESTION */}

                    {(question == 2 && !isQuestion) &&
                        <S.Confirmation_Statement ref={AnimationRef}>
                            CHALLENGE ACCEPTED
                        </S.Confirmation_Statement>
                    }

                    {/* SECOND QUESTION */}
                    {(question == 2 && isQuestion) &&
                        <>
                            <H3>
                                <TypeEfct text={['', 'First Question:']} onDone={() => setTypingIsDone(true)} />
                                {/*  What is the answer to The Ultimate Question of Life, The Universe and Everything? */}
                            </H3>
                            {giveHint &&
                                <S.Para>Hint: the answer is inside {!secondAnswer
                                    ? <span onClick={handleFirstClick}>you</span>
                                    : <span style={{ color: 'red', display: 'inline-block' }}>
                                        <S.Input onInput={handleAnswer} type="radio" id="yep" name='notIt' />
                                        <S.Label htmlFor="yep">42</S.Label>
                                    </span>}
                                </S.Para>}

                            {typingIsDone &&
                                <S.Anwsers $options={4}>
                                    <S.Input onChange={() => setGiveHint(true)} type="radio" id="towels" name='notIt' />
                                    <S.Label htmlFor="towels">Towels</S.Label>
                                    <S.Input onChange={() => setGiveHint(true)} type="radio" id="love" name='notIt' />
                                    <S.Label htmlFor="love">Love</S.Label>
                                    <S.Input onChange={() => setGiveHint(true)} type="radio" id="evolution" name='notIt' />
                                    <S.Label htmlFor="evolution">Evolution</S.Label>
                                    <S.Input onChange={() => setGiveHint(true)} type="radio" id="god" name='notIt' />
                                    <S.Label htmlFor="god">God</S.Label>
                                </S.Anwsers>
                            }
                        </>
                    }
                    {/* END OF SECOND QUESTION */}

                    {(question == 3 && !isQuestion) &&
                        <S.Confirmation_Statement ref={AnimationRef}>
                            YO-HO-HOOOW!
                        </S.Confirmation_Statement>
                    }

                    {/* THIRD QUESTION */}
                    {(question == 3 && isQuestion) &&
                        <>
                            <H3>
                                <TypeEfct text={['', 'Complete the sentence: We all float...']} onDone={() => setTypingIsDone(true)} />
                            </H3>

                            {typingIsDone &&
                                <S.TextInput onChange={handleInputText} type="text" ref={inputRef} />
                            }


                        </>
                    }
                    {/* END OF THIRD QUESTION */}

                    {(question == 4 && !isQuestion) &&
                        <S.VideoWrapper>
                            <S.Video autoPlay preload='true' onEnded={handleVideoEnd}>
                                <source src={redBallons} type="video/mp4" />
                            </S.Video>
                            <audio autoPlay preload='true'>
                                <source src={pennywiseLaught} type="audio/mp3" />
                            </audio>
                        </S.VideoWrapper>
                    }

                    {/* LAST QUESTION */}
                    {(question == 4 && isQuestion) &&
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