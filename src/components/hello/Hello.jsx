import React, { useState } from 'react';
import * as S from './Hello_Style';
import { useNavigate } from 'react-router-dom';
import TypeEfct from '../TypeEfct.jsx';
import useUpdateBtnPosition from '../../hooks/hello/useUpdateBtnPosition.jsx';
import useShowBtns from '../../hooks/hello/useShowBtns.jsx';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../languageSelector/LanguageSelector.jsx';
import useWeakContext from "../../contexts/WeakContext.js"

function Hello() {
    const { btnPosition, timesMoved, handleMouseMove } = useUpdateBtnPosition();
    const { showNext, showBtn, showWeakBtn, canSkip, handleTypeDone } = useShowBtns(timesMoved);
    const { isWeak, setIsWeak } = useWeakContext();

    const navigate = useNavigate();

    function handleClick() {
        localStorage.setItem('skippable', true);
        localStorage.removeItem('isWeak');
        setIsWeak(false);
        navigate('/home');
    }

    function handleWeakeness() {
        localStorage.setItem('isWeak', true);
        setIsWeak(true);
        navigate('/home');
    }

    // I18NEXT
    const { t } = useTranslation();

    const { line1, line2, weakLine } = t("helloFromAN0X1A");

    const [key, setKey] = useState(true);
    // Force loading of TypeEfct to avoid a bug where changing the language would not change its language

    return (
        <>
            <LanguageSelector test={setKey} />
            <S.Container key={key}>
                {canSkip && <S.SkipBtn onClick={handleClick}>{t('skipBtn')} {`>>>`}</S.SkipBtn>}

                <S.H3>
                    {(!showNext && !isWeak) && <TypeEfct text={line1} onDone={handleTypeDone} />}

                    {(showNext && !isWeak) && <TypeEfct text={line2} onDone={handleTypeDone} />}

                    {(!showNext && isWeak) && <TypeEfct text={weakLine} onDone={handleTypeDone} />}
                </S.H3>

                {showBtn &&
                    <S.Wrapper
                        $xPosition={btnPosition.x}
                        $yPosition={btnPosition.y}
                        onMouseMove={handleMouseMove}
                        onTouchStart={handleMouseMove}
                    >
                        <S.Button onClick={handleClick}>{t('clickBtn')}</S.Button>
                    </S.Wrapper>}

                {showWeakBtn &&
                    <S.WeakBtn onClick={handleWeakeness}>{t('weakBtn')}</S.WeakBtn>}

            </S.Container>
        </>
    )
}

export default Hello