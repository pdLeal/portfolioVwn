import React, { useEffect, useState } from 'react';
import * as S from './Hello_Style';
import { useNavigate } from 'react-router-dom';
import TypeEfct from '../TypeEfct.jsx';
import useUpdateBtnPosition from './hooks/useUpdateBtnPosition.jsx';
import useShowBtns from './hooks/useShowBtns.jsx';

function Hello() {
    const { btnPosition, showNext, handleMouseMove } = useUpdateBtnPosition();
    const { showBtn, showWeakBtn, canSkip, handleTypeDone } = useShowBtns(showNext);

    const navigate = useNavigate();

    function handleClick() {
        localStorage.setItem('skippable', true);
        navigate('/home');
    }

    return (
        <S.Container>
            {(canSkip || showWeakBtn) && <S.SkipBtn onClick={handleClick}>Skip {`>>>`}</S.SkipBtn>}

            <S.H3>
                {!showNext && <TypeEfct text={['Oh! Hello! Sorry, didn\'t see you there...', 'I suppose you\'re here to see Pedro\'s portfolio, right?', 'But before, what about a game?', 'All you have to do is click the button =)']} onDone={handleTypeDone} />}
                {/* */}
                {showNext && <TypeEfct text={['It seems you\'re having a hard time clicking the button =S', 'Here, a button that won\'t runaway!']} onDone={handleTypeDone} />
                }
            </S.H3>

            {showBtn &&
                <S.Wrapper
                    $xPosition={btnPosition.x}
                    $yPosition={btnPosition.y}
                    onMouseMove={handleMouseMove}
                    onTouchStart={handleMouseMove}
                >
                    <S.Button onClick={handleClick}>Click Me</S.Button>
                </S.Wrapper>}

            {showWeakBtn &&
                <S.HelpBtn>For the weak!</S.HelpBtn>}

        </S.Container>
    )
}

export default Hello