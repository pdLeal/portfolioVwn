import React, { useEffect, useRef, useState } from 'react';
import * as S from './QBox_Style';
import { H3 } from '../hello/Hello_Style';
import TypeEfct from '../TypeEfct.jsx';
import redBallons from '../../assets/you_float_too.mp4';
import redBallonsBr from '../../assets/you_float_too_br.mp4';
import pennywiseLaught from '../../assets/PennywiseLaugh.mp3';
import useNextQuestion from '../../hooks/qBox/useNextQuestion.jsx';
import { useTranslation } from 'react-i18next';

function QBox() {
    const [clicked, setClicked] = useState(false);
    const [typingIsDone, setTypingIsDone] = useState(false);
    const [giveHint, setGiveHint] = useState(false);

    const { AnimationRef, question, isQuestion, secondAnswer, handleAnswer, handleFirstClick, handleInputText, kc, handleVideoEnd, handleAboutWinner } = useNextQuestion(clicked, setTypingIsDone)

    // Input-text auto-focus
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [typingIsDone]);

    // I18NEXT
    const { t, i18n } = useTranslation();
    const { question1, question2, question3, question4 } = t("AN0X1Aquestions");
    const { q1_a1, q1_a2, q2_a1, q2_a2, q2_a3, q2_a4 } = t("anwsers");
    const lang = i18n.language;

    return (
        <S.Container>
            {!clicked && <S.See_Btn onClick={() => setClicked(true)}>{t("seeBtn")}</S.See_Btn>}

            {clicked &&
                <S.Question_Box $display={isQuestion} ref={AnimationRef}>

                    {/* FIRST QUESTION */}
                    {(question == 1 && isQuestion) &&
                        <>
                            <H3>
                                <TypeEfct text={question1} onDone={() => setTypingIsDone(true)} />
                            </H3>

                            {typingIsDone &&
                                <S.Anwsers $options={2}>
                                    <S.Input type="radio" id="yes" name='agreed' />
                                    <S.Label htmlFor="yes">{q1_a1}</S.Label>
                                    <S.Input onChange={handleAnswer} type="radio" id="no" name='agreed' />
                                    <S.Label htmlFor="no">{q1_a2}</S.Label>
                                </S.Anwsers>
                            }
                        </>
                    }

                    {/* END OF FIRST QUESTION */}

                    {(question == 2 && !isQuestion) &&
                        <S.Question_Transition ref={AnimationRef}>{t("transition")}</S.Question_Transition>
                    }

                    {/* SECOND QUESTION */}
                    {(question == 2 && isQuestion) &&
                        <>
                            <H3>
                                <TypeEfct text={question2} onDone={() => setTypingIsDone(true)} />
                            </H3>
                            {giveHint &&
                                <p>{t("hint")} {!secondAnswer
                                    ? <span onClick={handleFirstClick}>{t("hintSpan")}</span>
                                    : <span style={{ color: 'red', display: 'inline-block' }}>
                                        <S.Input onInput={handleAnswer} type="radio" id="yep" name='notIt' />
                                        <S.Label htmlFor="yep">42</S.Label>
                                    </span>}
                                </p>}

                            {typingIsDone &&
                                <S.Anwsers $options={4}>
                                    <S.Input onChange={() => setGiveHint(true)} type="radio" id="god" name='notIt' />
                                    <S.Label htmlFor="god">{q2_a1}</S.Label>
                                    <S.Input onChange={() => setGiveHint(true)} type="radio" id="love" name='notIt' />
                                    <S.Label htmlFor="love">{q2_a2}</S.Label>
                                    <S.Input onChange={() => setGiveHint(true)} type="radio" id="towels" name='notIt' />
                                    <S.Label htmlFor="towels">{q2_a3}</S.Label>
                                    <S.Input onChange={() => setGiveHint(true)} type="radio" id="evolution" name='notIt' />
                                    <S.Label htmlFor="evolution">{q2_a4}</S.Label>
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
                                <TypeEfct text={question3} onDone={() => setTypingIsDone(true)} />
                            </H3>

                            {typingIsDone &&
                                <S.Text_Input
                                    onInput={(e) => {
                                        handleInputText(e, lang)
                                    }}
                                    onKeyDown={kc}
                                    type="text"
                                    ref={inputRef} />
                            }


                        </>
                    }
                    {/* END OF THIRD QUESTION */}

                    {(question == 4 && !isQuestion) &&
                        <S.Video_Wrapper>
                            <S.Video autoPlay preload='true' onEnded={handleVideoEnd}>
                                <source src={lang === "en" ? redBallons : redBallonsBr} type="video/mp4" />
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
                                text={question4}
                                onDone={handleAboutWinner} />
                        </H3>
                    }
                </S.Question_Box>
            }
        </S.Container>
    )
}

export default QBox