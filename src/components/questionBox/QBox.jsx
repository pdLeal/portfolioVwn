import React, { useEffect, useRef, useState } from 'react';
import * as S from './QBox_Style';
import { H3 } from '../hello/Hello_Style';
import TypeEfct from '../TypeEfct.jsx';
import redBallons from '../../assets/you_float_too.mp4';
import pennywiseLaught from '../../assets/PennywiseLaugh.mp3';
import useNextQuestion from '../../hooks/qBox/useNextQuestion.jsx';

function QBox() {
    const [clicked, setClicked] = useState(false);
    const [typingIsDone, setTypingIsDone] = useState(false);
    const [giveHint, setGiveHint] = useState(false);

    const { AnimationRef, question, isQuestion, secondAnswer, handleAnswer, handleFirstClick, handleInputText, handleVideoEnd, handleAboutWinner } = useNextQuestion(clicked, setTypingIsDone)
    
    // Input-text auto-focus
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [typingIsDone]);

    return (
        <S.Container>
            {!clicked && <S.See_Btn onClick={() => setClicked(true)}>See More...</S.See_Btn>}

            {clicked &&
                <S.Question_Box $display={isQuestion} ref={AnimationRef}>

                    {/* FIRST QUESTION */}
                    {(question == 1 && isQuestion) &&
                        <>
                            <H3>
                                <TypeEfct text={['', 'So here we are again, uh? If you wanna know more about him, you\'ll have to answer some questions of mine, do you agree?']} onDone={() => setTypingIsDone(true)} />
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
                        <S.Question_Transition ref={AnimationRef}>
                            CHALLENGE ACCEPTED
                        </S.Question_Transition>
                    }

                    {/* SECOND QUESTION */}
                    {(question == 2 && isQuestion) &&
                        <>
                            <H3>
                                <TypeEfct text={['', 'First Question: What is the answer to The Ultimate Question of Life, The Universe and Everything?']} onDone={() => setTypingIsDone(true)} />
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
                        <S.Question_Transition ref={AnimationRef}>
                            YO-HO-HOOOW!
                        </S.Question_Transition>
                    }

                    {/* THIRD QUESTION */}
                    {(question == 3 && isQuestion) &&
                        <>
                            <H3>
                                <TypeEfct text={['', 'Complete the sentence: We all float...']} onDone={() => setTypingIsDone(true)} />
                            </H3>

                            {typingIsDone &&
                                <S.Text_Input onChange={handleInputText} type="text" ref={inputRef} />
                            }


                        </>
                    }
                    {/* END OF THIRD QUESTION */}

                    {(question == 4 && !isQuestion) &&
                        <S.Video_Wrapper>
                            <S.Video autoPlay preload='true' onEnded={handleVideoEnd}>
                                <source src={redBallons} type="video/mp4" />
                            </S.Video>
                            <audio autoPlay preload='true'>
                                <source src={pennywiseLaught} type="audio/mp3" />
                            </audio>
                        </S.Video_Wrapper>
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