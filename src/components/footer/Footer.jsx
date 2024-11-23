import React from 'react';
import * as S from './Footer_Style';
import { FaCopyright } from 'react-icons/fa';

function Footer() {
  return (
    <S.Footer>
        <FaCopyright />
        <p>2024 pdLeal. All rights reserved.</p>
    </S.Footer>
  )
}

export default Footer