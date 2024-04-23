import React, { useState } from 'react';
import { useTypewriter, Cursor, Typewriter } from 'react-simple-typewriter';
import * as S from './Hello_Style';

function Hello() {
    const [typeEffect, helper] = useTypewriter({
        words: ['', '. . .', '. . .', 'Oh! Hello! Sorry, didn\'t see you there...', 'I suppose you\'re here to see Pedro\'s portfolio, right?', 'I\'ll stay out of your way then, just click the button =)'],
        loop: 1,
        typeSpeed: 100
    });
    const { isDone } = helper;

    const [showNext, setshowNext] = useState(false);

    const [btnPosition, setBtnPosition] = useState({
        x: 50,
        y: 65
    });

    function random() { // Gives a number between 10 and 80
        return Math.floor(Math.random() * 71) + 10;
    };

    const [count, setCount] = useState(0)
    function handleMouseMove(e) {
        setBtnPosition({
            x: random(),
            y: random()
        });
        console.log()

        if(count > 20 || (e.touches && count > 3)) {
            setshowNext(true);
            
        } else {
            setCount(prev => (prev + 1));

        }
    }

    const [helpActive, setHelpActive] = useState(false);
    function handleDone() {
        setHelpActive(true);
        return;
    }

    return (
        <S.Container>
            <S.H1>
                {!showNext &&
                    (<>
                        <span>{typeEffect}</span>
                        <Cursor />
                    </>)}

                {showNext &&
                    <span>
                        <Typewriter
                            words={['It seems you\'re having a hard time clicking the button =S', 'Here, let me help you!']}
                            loop={1}
                            cursor
                            typeSpeed={100}
                            delaySpeed={1000}
                            onLoopDone={handleDone}
                        />
                    </span>}
            </S.H1>

            {isDone &&
                <S.Wrapper
                    $xPosition={btnPosition.x}
                    $yPosition={btnPosition.y}
                    onMouseMove={handleMouseMove}
                    onTouchStart={handleMouseMove}>
                    <S.Button>Click Me</S.Button>
                </S.Wrapper>}

            {helpActive &&
                <S.HelpBtn>Click Me</S.HelpBtn>}

        </S.Container>
    )
}

export default Hello