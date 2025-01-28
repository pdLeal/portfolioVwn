import React from 'react';
import * as S from "./KC_Style";
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../../components/languageSelector/LanguageSelector';

function KC() {
    const { t } = useTranslation();

    return (
        <>
            <LanguageSelector />
            <S.H2>{t("kc")}</S.H2>
            <S.Wrapper>
                <img src="/aloy.png" alt="A really happy black pitbull." />
                <img src="/novata.png" alt="A really happy yellowish mutt." />
            </S.Wrapper>
        </>
    )
}

export default KC