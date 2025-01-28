import React, { useEffect, useState } from 'react';
import * as S from './Denied_Style';
import TypeEfct from '../../components/TypeEfct';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

function Warning() {
  const [color, setColor] = useState('red');
  useEffect(() => {
    const interval = setInterval(() => {
      setColor(prevColor => prevColor === 'red' ? 'blue' : 'red');
    }, 200);

    return () => clearInterval(interval);
  }, []);
  return (
    <S.H1 $color={color}>{t("warning")}!</S.H1>
  )
}


function Denied() {
  const [done, setDone] = useState(false);
  function hadleDone() {
    setDone(true);
  }

  const navigate = useNavigate();
  function handleClick() {
    navigate('/home');
  }

  // I18NEXT
  const { t } = useTranslation();

  return (
    <S.Main>
      <Warning />
      <S.Container>
        <S.H2 $direction='toRight'>{t("denied")}</S.H2>
        <S.H2>{t("denied")}</S.H2>
      </S.Container>
      <S.Tease>
        <TypeEfct text={t("AN0X1Awarning")} onDone={hadleDone} />
      </S.Tease>
      {done && <S.BackHome onClick={handleClick}>{t("backHome")}</S.BackHome>}
    </S.Main>
  )
}

export default Denied