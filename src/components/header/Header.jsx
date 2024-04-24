import React from 'react';
import * as S from './Header_Style';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
        <S.Ul>
            <Link to='/home'>Home</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </S.Ul>
    </nav>
  )
}

export default Header