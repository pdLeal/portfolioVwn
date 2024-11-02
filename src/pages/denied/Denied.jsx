import React, { useEffect, useState } from 'react';
import * as S from './Denied_Style';
import TypeEfct from '../../components/TypeEfct';

function Warning() {
  const [color, setColor] = useState('red');
  useEffect(() => {
    const interval = setInterval(() => {
      setColor(prevColor => prevColor === 'red' ? 'blue' : 'red');
    }, 200);
  
    return () => clearInterval(interval);
  }, []);


  return(
    <S.H1 $color={color}>WARNING!</S.H1>
  )
}


function Denied() {

  return (
    <S.Main>
      <Warning />
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