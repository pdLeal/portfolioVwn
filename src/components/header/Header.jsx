import React, { useState } from 'react';
import * as S from './Header_Style';
import { Link } from 'react-router-dom';

function Header() {
  const [isSelected, setIsSelected] = useState('home');
  const menuItens = ['home', 'projects', 'about', 'contact'];

  return (
    <nav>
      <S.Ul>
        {menuItens.map((item) => {
          if (isSelected === item) {
            return (
              <S.Li>
                <Link className='glitch' to={`/${item}`}>
                  <span aria-hidden='true'>{item}</span>
                  {item}
                  <span aria-hidden='true'>{item}</span>
                </Link>
              </S.Li>
            );

          } else {
            return (
              <S.Li>
                <Link onClick={() => setIsSelected(item)} to={`/${item}`}>{item}</Link>
              </S.Li>
            );

          }
        })}
      </S.Ul>
    </nav>
  )
}

export default Header