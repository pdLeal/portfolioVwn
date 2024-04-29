import React from 'react';
import * as S from './Card_Style';
import McDesafio from '../../assets/McDesafio.png';

function Card() {
  return (
    <div>
        <img src={McDesafio} alt="" />
        <h3>Card title</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  )
}

export default Card