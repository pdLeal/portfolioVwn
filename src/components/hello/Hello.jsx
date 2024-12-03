import React, { useEffect, useState } from 'react';
import * as S from './Hello_Style';
import { useNavigate } from 'react-router-dom';
import TypeEfct from '../TypeEfct.jsx';
import useWinnerContext from '../../contexts/WinnerContext.js';

function Hello() {
    const [showNext, setshowNext] = useState(false);

    const [btnPosition, setBtnPosition] = useState({
        x: 50,
        y: 65
    });

    function random() { // Gives a number between 10 and 80
        return Math.floor(Math.random() * 71) + 10;
    };

    const [count, setCount] = useState(0);
    function handleMouseMove(e) {
        setBtnPosition({
            x: random(),
            y: random()
        });

        if (count > 20 || (e.touches && count > 3)) {
            setshowNext(true);

        } else {
            setCount(prev => (prev + 1));

        }
    }

    const [showBtn, setShowBtn] = useState(false);
    const [helpActive, setHelpActive] = useState(false);

    function handleDone(done) {
        if (!showNext) {
            setShowBtn(true);
        } else {
            setHelpActive(done);
        }
    }

    // SKIP BTN
    const [canSkip, setCanSkip] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('skippable')) {
            setCanSkip(true);
        } else {
            localStorage.setItem('skippable', true);
        }
    }, []);

    const navigate = useNavigate();
    function handleClick() {
        navigate('/home');
    }

    return (
        <S.Container>
            {(canSkip || helpActive) && <S.SkipBtn onClick={handleClick}>Skip {`>>>`}</S.SkipBtn>}
            <S.H3>
                {!showNext && <TypeEfct text={['Oh! Hello! Sorry, didn\'t see you there...', 'I suppose you\'re here to see Pedro\'s portfolio, right?', 'But before, what about a game?', 'All you have to do is click the button =)']} onDone={handleDone} />}

                {showNext && <TypeEfct text={['It seems you\'re having a hard time clicking the button =S', 'Here, a button that won\'t runaway!']} onDone={handleDone} />
                }
            </S.H3>

            {showBtn &&
                <S.Wrapper
                    $xPosition={btnPosition.x}
                    $yPosition={btnPosition.y}
                    onMouseMove={handleMouseMove}
                    onTouchStart={handleMouseMove}>
                    <S.Button onClick={handleClick}>Click Me</S.Button>
                </S.Wrapper>}

            {helpActive &&
                <S.HelpBtn>For the weak!</S.HelpBtn>}

        </S.Container>
    )
}

export default Hello