import React, { useEffect, useRef, useState } from 'react';
import * as S from './QBox_Style';
import { H3 } from '../hello/Hello_Style';
import { Typewriter } from 'react-simple-typewriter';

function QBox() {

    const [clicked, setClicked] = useState(false);
    const [animationIsDone, setAnimationIsDone] = useState(false);
    const [typingIsDone, setTypingIsDone] = useState(false);
    const [question, setQuestion] = useState(0);

    const ConfirmRef = useRef(null);

    useEffect(() => {
        const node = ConfirmRef.current;
        if (node) {
            function handleAnimationEnd() {
                setTimeout(() => {
                    setQuestion(2);
                }, 1000);
            };

            node.addEventListener('animationend', handleAnimationEnd);

            return () => {
                node.removeEventListener('animationend', handleAnimationEnd);
            };
        }
    }, [question]);

    function handleClick() {
        setClicked(true);

        setTimeout(() => {
            setAnimationIsDone(true);
        }, 3500);

        setTimeout(() => {
            setTypingIsDone(true);
        }, 3500); // 15500
    }

    function handleFirstAnswer() {
        setTimeout(() => {
            setQuestion(1);
        }, 500);
    }


    return (
        <S.Container>
            {!clicked && <S.SeeBtn onClick={handleClick}>See More...</S.SeeBtn>}

            {clicked &&
                <S.Question_Box $display={question}>

                    {/* FIRST QUESTION */}
                    {(animationIsDone && question == 0) &&
                        <H3>
                            <Typewriter
                                words={['', 'So here we are again, uh? If you wanna know more about him, you\'ll have to answer some questions of mine, do you agree?']}
                                cursor />
                        </H3>
                    }

                    {(typingIsDone && question == 0) &&
                        <S.Anwsers>
                            <S.Input onChange={handleFirstAnswer} type="radio" name="agreed" id="yes" />
                            <S.Label htmlFor="yes">Yes</S.Label>
                            <S.Input onChange={handleFirstAnswer} type="radio" name="agreed" id="no" />
                            <S.Label htmlFor="no">No</S.Label>
                        </S.Anwsers>
                    }
                    {/* END OF FIRST QUESTION */}

                    {question == 1 &&
                        <S.Confirmation_Statement ref={ConfirmRef}>
                            CHALLENGE ACCEPTED
                        </S.Confirmation_Statement>
                    }

                    {question == 2 &&
                        <H3>
                            <Typewriter
                                words={['', 'First Question: What is the answer to The Ultimate Question of Life, The Universe and Everything?']}
                                cursor />
                        </H3>
                    }
                </S.Question_Box>
            }
        </S.Container>
    )
}

export default QBox