import React from 'react';
import * as S from './LanguageSelector_Style';
import { Button } from "../hello/Hello_Style";
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
    const {i18n} = useTranslation();
    const changeLanguage = (e) => {
        const lng = e.target.dataset.lang;

        i18n.changeLanguage(lng);
    }

    return (
        <S.Container>
            <Button data-lang={'br'} onClick={e => {
                changeLanguage(e);
            }}>Português</Button>
            <Button data-lang={'en'} onClick={e => {
                changeLanguage(e);
            }}>English</Button>
        </S.Container>
    )
}

export default LanguageSelector