import React, { useState } from 'react';
import * as S from './QBox_Style';
import { H3 } from '../hello/Hello_Style';
import { Typewriter } from 'react-simple-typewriter';

function QBox() {

    const [clicked, setClicked] = useState(false);
    const [animationIsDone, setAnimationIsDone] = useState(false);
    const [typingIsDone, setTypingIsDone] = useState(false);

    function handleClick() {
        setClicked(true);

        setTimeout(() => {
            setAnimationIsDone(true);
        }, 3500);

        setTimeout(() => {
            setTypingIsDone(true);
        }, 15500);
    }


    return (
        <S.Container>
            {!clicked && <S.SeeBtn onClick={handleClick}>See More...</S.SeeBtn>}

            {clicked &&
                <S.Question_Box>

                    {animationIsDone &&
                        <H3>
                            <Typewriter
                                words={['', 'So here we are again, uh? If you wanna know more about him, you\'ll have to answer some questions of mine, do you agree?']}
                                cursor />
                        </H3>
                    }

                    {typingIsDone && <S.Anwsers>
                        <S.Label htmlFor="yes"><S.Input type="radio" name="agreed" /> Yes</S.Label>
                        <S.Label htmlFor="no"><S.Input type="radio" name="agreed" /> No</S.Label>
                    </S.Anwsers>}
                </S.Question_Box>
            }
        </S.Container>
    )
}

export default QBox