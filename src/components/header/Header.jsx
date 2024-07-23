import React, { useState } from 'react';
import * as S from './Header_Style';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const currentPage = location.pathname.substring(1);

  const [isSelected, setIsSelected] = useState(currentPage);
  const menuItens = ['home', 'projects', 'about'];

  return (
    <nav>
      <S.Ul>
        {menuItens.map((item) => {
          if (isSelected === item) {
            return (
              <S.Li key={item}>
                <Link className='glitch' to={`/${item}`}>
                  <span aria-hidden='true'>{item}</span>
                  {item}
                  <span aria-hidden='true'>{item}</span>
                </Link>
              </S.Li>
            );

          } else {
            return (
              <S.Li key={item}>
                <Link to={`/${item}`}>{item}</Link>
              </S.Li>
            );

          }
        })}
      </S.Ul>
    </nav>
  )
}

export default Header