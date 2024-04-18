import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import * as S from './Hello_Style';

function Hello() {
    const [typeEffect] = useTypewriter({
        words: ['Oh! Hello! Sorry, didn\'t see you there...', 'Just a test to se if it works'],
        loop: 1,
        typeSpeed: 100,
        delaySpeed: 2000
    });

    return (
        <S.Container>
            <S.H1>
                {typeEffect}
                <Cursor />
            </S.H1>
            
        </S.Container>
    )
}

export default Hello