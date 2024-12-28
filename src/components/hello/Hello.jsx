import React from 'react';
import * as S from './Hello_Style';
import { useNavigate } from 'react-router-dom';
import TypeEfct from '../TypeEfct.jsx';
import useUpdateBtnPosition from '../../hooks/hello/useUpdateBtnPosition.jsx';
import useShowBtns from '../../hooks/hello/useShowBtns.jsx';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../languageSelector/LanguageSelector.jsx';

function Hello() {
    const { btnPosition, showNext, handleMouseMove } = useUpdateBtnPosition();
    const { showBtn, showWeakBtn, canSkip, handleTypeDone } = useShowBtns(showNext);

    const navigate = useNavigate();

    function handleClick() {
        localStorage.setItem('skippable', true);
        navigate('/home');
    }

    // I18NEXT
    const { t } = useTranslation();

    const { line1, line2 } = t("helloFromKVN");


    return (
        <>
            <LanguageSelector/>
            <S.Container>
                {(canSkip || showWeakBtn) && <S.SkipBtn onClick={handleClick}>{t('skipBtn')} {`>>>`}</S.SkipBtn>}

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