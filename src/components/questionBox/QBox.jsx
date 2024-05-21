import React, { useEffect, useRef, useState } from 'react';
import * as S from './QBox_Style';
import { H3 } from '../hello/Hello_Style';
import { Typewriter } from 'react-simple-typewriter';

function QBox() {

    const [clicked, setClicked] = useState(false);
    const [animationIsDone, setAnimationIsDone] = useState(false);
    const [typingIsDone, setTypingIsDone] = useState(false);
    const [question, setQuestion] = useState(0); // all .5 are responses to the user
    const [isQuestion, setIsQuestion] = useState(true);

    const ConfirmRef = useRef(null);

    useEffect(() => {
        const node = ConfirmRef.current;
        if (node) {
            function handleAnimationEnd() {
                setTimeout(() => {
                    setQuestion(1);
                    setIsQuestion(true);
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

        setTimeout(() => { // think of a better way than setTimeout later
            setAnimationIsDone(true);
        }, 3500);

        setTimeout(() => {
            setTypingIsDone(true);
        }, 15500); // 15500
    }

    function handleFirstAnswer() {
        setTimeout(() => {
            setQuestion(0.5);
            setIsQuestion(false);
        }, 500);
    }


    return (
        <S.Container>
            {!clicked && <S.SeeBtn onClick={handleClick}>See More...</S.SeeBtn>}

            {clicked &&
                <S.Question_Box $display={isQuestion}>

                    {/* FIRST QUESTION */}
                    {(animationIsDone && question == 0) &&
                        <H3>
                            <Typewriter
                                words={['', 'So here we are again, uh? If you wanna know more about him, you\'ll have to answer some questions of mine, do you agree?']}
                                cursor />
                        </H3>
                    }

                    {(typingIsDone && question == 0) &&
                        <S.Anwsers $options={2}>
                            <S.Input onChange={handleFirstAnswer} type="radio" id="yes" name='agreed' />
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
                    {question == 1 &&
                        <H3>
                            <Typewriter
                                words={['', 'First Question: What is the answer to The Ultimate Question of Life, The Universe and Everything?']}
                                cursor />
                        </H3>
                    }

                    {true && 
                        <p>Hint: is inside <span style={{color:'red'}}>you</span></p>}

                    {true &&
                        <S.Anwsers $options={4}>
                            <S.Input type="radio" id="towels" name='notIt' />
                            <S.Label htmlFor="towels">Towels</S.Label>
                            <S.Input type="radio" id="love" name='notIt' />
                            <S.Label htmlFor="love">Love</S.Label>
                            <S.Input type="radio" id="evolution" name='notIt' />
                            <S.Label htmlFor="evolution">Evolution</S.Label>
                            <S.Input type="radio" id="god" name='notIt' />
                            <S.Label htmlFor="god">God</S.Label>
                        </S.Anwsers>}
                </S.Question_Box>
            }
        </S.Container>
    )
}

export default QBox