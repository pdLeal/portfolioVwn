import React from 'react';
import * as S from './Card_Style';
import { useTranslation } from 'react-i18next';

function Card({
  gitUrl,
  pageUrl,
  img,
  alt,
  text
}) {
  const {t} = useTranslation();

  return (
    <S.Sub_Grid>
        <a href={pageUrl} target='_blank'><img src={img} alt={alt} /></a>
        <p>{text}</p>
        <a href={gitUrl} target='_blank'>{t("seeRepo")}</a>
    </S.Sub_Grid>
  )
}

export default Card