import React from 'react';
import * as S from './Card_Style';
import McDesafio from '../../assets/McDesafio.png';

function Card() {
  return (
    <S.Sub_Grid>
        <img src={McDesafio} alt="" />
        <h3>McDesafio</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </S.Sub_Grid>
  )
}

export default Card