import React from 'react';
import * as S from './Denied_Style';

function Denied() {
  return (
    <S.Main> 
      <S.H2 $direction='toRight'>!!!ACCESS DENIED!!!</S.H2>
      <S.H2 $direction='toLeft'>!!!ACCESS DENIED!!!</S.H2>
    </S.Main>
  )
}

export default Denied