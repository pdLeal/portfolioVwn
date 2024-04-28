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
              <S.Li onClick={() => setIsSelected(item)}>
                <Link to={`/${item}`}>{item}</Link>
              </S.Li>
            );

          }
        })}

        {/* <S.Li><Link className='glitch' to='/home'>Home</Link></S.Li>
        <S.Li><Link to='/projects'>Projects</Link></S.Li>
        <S.Li><Link to='/about'>About</Link></S.Li>
        <S.Li><Link to='/contact'>Contact</Link></S.Li> */}
      </S.Ul>
    </nav>
  )
}

export default Header