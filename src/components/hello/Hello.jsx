import React, { useState } from 'react';
import * as S from './Hello_Style';
import { useNavigate } from 'react-router-dom';
import TypeEfct from '../TypeEfct.jsx';
import useUpdateBtnPosition from '../../hooks/hello/useUpdateBtnPosition.jsx';
import useShowBtns from '../../hooks/hello/useShowBtns.jsx';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../languageSelector/LanguageSelector.jsx';

function Hello() {
    const { btnPosition, timesMoved, handleMouseMove } = useUpdateBtnPosition();
    const { showNext, showBtn, showWeakBtn, canSkip, handleTypeDone } = useShowBtns(timesMoved);

    const navigate = useNavigate();

    function handleClick() {
        localStorage.setItem('skippable', true);
        navigate('/home');
    }

    // I18NEXT
    const { t } = useTranslation();

    const { line1, line2 } = t("helloFromAN0X1A");

    const [key, setKey] = useState(true);
    // Force loading of TypeEfct to avoid a bug where changing the language would not change its language

    return (
        <>
            <LanguageSelector test={setKey} />
            <S.Container key={key}>
                {canSkip && <S.SkipBtn onClick={handleClick}>{t('skipBtn')} {`>>>`}</S.SkipBtn>}

                <S.H3>
                    {!showNext && <TypeEfct text={line1} onDone={handleTypeDone} />}

                    {showNext && <TypeEfct text={line2} onDone={handleTypeDone} />
                    }
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
                    <S.WeakBtn>{t('weakBtn')}</S.WeakBtn>}

            </S.Container>
        </>
    )
}

export default Hello