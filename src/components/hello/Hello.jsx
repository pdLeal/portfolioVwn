import React, { useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import * as S from './Hello_Style';

function Hello() {
    const [typeEffect, helper] = useTypewriter({
        words: [''], // , '. . .', '. . .', '. . .', 'Oh! Hello! Sorry, hadn\'t seen you there...', 'I suppose you\'re here to see Pedro\'s portfolio, right?', 'I\'ll stay out of your way then, just click the button =)'
        loop: 1,
        typeSpeed: 100
    });
    const { isDone } = helper;

    const [btnPosition, setBtnPosition] = useState({
        x: 50,
        y: 65
    });

    const random = () => { // Gives a number between 10 and 80
        return Math.floor(Math.random() * 71) + 10;
    };

    return (
        <S.Container>
            <S.H1>
                {typeEffect}
                <Cursor />
            </S.H1>

            {isDone && <S.Wrapper
                $xPosition={btnPosition.x}
                $yPosition={btnPosition.y}
                onMouseMove={() => {
                    setBtnPosition({
                        x: random(),
                        y: random()
                    });
                }
                }>
                <S.Button>Click Me</S.Button>
            </S.Wrapper>}
            
        </S.Container>
    )
}

export default Hello