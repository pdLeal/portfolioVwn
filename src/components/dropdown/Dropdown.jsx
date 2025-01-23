import React from 'react';
import * as S from './Dropdown_Style';
import useDropdown from '../../hooks/dropdown/useDropdown';
import { useTranslation } from 'react-i18next';

function Dropdown() {
    const { isOpen, titleHeight, hideText, titleRef, handleClick } = useDropdown();

    // I18NEXT
    const { t } = useTranslation();

    return (
        <S.Container $isOpen={isOpen} $maxHeight={titleHeight} >
            <S.DropdownTitle ref={titleRef} onClick={handleClick} tabIndex="0">
                {/* TODO: tornar dropdown "clicável" quando focado com tab */}
                <p>{t("dropdownTitle")}</p>
                <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M3.68478 18.7826L11.5642 4.77473C11.7554 4.43491 12.2446 4.43491 12.4358 4.77473L20.3152 18.7826C20.5454 19.1918 20.1357 19.6639 19.6982 19.4937L12.1812 16.5705C12.0647 16.5251 11.9353 16.5251 11.8188 16.5705L4.30179 19.4937C3.86426 19.6639 3.45463 19.1918 3.68478 18.7826Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </S.DropdownTitle>

            {(!hideText) && <S.HiddenPara $isOpen={isOpen}>{t("dropdownDescription")}</S.HiddenPara>}
        </S.Container>
    )
}

export default Dropdown