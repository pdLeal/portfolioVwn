import React from 'react';
import * as S from './Header_Style';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Header() {
  const location = useLocation();
  const currentPage = location.pathname.substring(1);

  // I18NEXT
  const { t, i18n } = useTranslation();

  let menuItens = ['home', 'projects', 'about'];


  return (
    <nav>
      <S.Ul>
        {menuItens.map((item, i) => {
          if (currentPage === item) {
            return (
              <S.Li key={item}>
                <Link className='glitch' to={`/${item}`}>
                  <span aria-hidden='true'>{i18n.language === "en" ? item : t("menuItens")[i]}</span>
                  {i18n.language === "en" ? item : t("menuItens")[i]}
                  <span aria-hidden='true'>{i18n.language === "en" ? item : t("menuItens")[i]}</span>
                </Link>
              </S.Li>
            );

          } else {
            return (
              <S.Li key={item}>
                <Link to={`/${item}`}>{i18n.language === "en" ? item : t("menuItens")[i]}</Link>
              </S.Li>
            );
          }
        })}
      </S.Ul>
    </nav>
  )
}

export default Header