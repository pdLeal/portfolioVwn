import React from 'react';
import * as S from './Denied_Style';
import TypeEfct from '../../components/TypeEfct';


function Denied() {
  return (
    <S.Main>
      <S.H1>WARNING</S.H1>
      <S.Container>
        <S.H2 $direction='toRight'>!!!ACCESS DENIED!!!</S.H2>
        <S.H2>!!!ACCESS DENIED!!!</S.H2>
      </S.Container>
      <S.Tease>
        <TypeEfct text={['', 'Oh, c\'mon! You know you HAVE to complete the challenge to see what you want --"']} />
      </S.Tease>
    </S.Main>
  )
}

export default Denied