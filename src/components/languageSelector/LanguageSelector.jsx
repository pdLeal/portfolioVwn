import React from 'react';
import * as S from './LanguageSelector_Style';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
    const { i18n } = useTranslation();
    const languages = ['en', 'pt-BR'];

    return (
        <S.Container>
            {
                languages.map(lang => {
                    return <S.Btn
                        className={lang === i18n.language ? 'selected' : ''}
                        key={lang}
                        onClick={() => {
                            i18n.changeLanguage(lang);
                        }}
                    >{lang === "pt-BR" ? "br" : lang}</S.Btn>
                })
            }
        </S.Container>
    )
}

export default LanguageSelector