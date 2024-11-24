import React from 'react';
import * as S from './Card_Style';

function Card({
  keyId,
  title,
  gitUrl,
  pageUrl,
  img,
  alt,
  text
}) {
  return (
    <S.Sub_Grid key={keyId}>
        <a href={pageUrl} target='_blank'><img src={img} alt={alt} /></a>
        <h3>{title}</h3>
        <p>{text}</p>
        <a href={gitUrl} target='_blank'>See repository</a>
    </S.Sub_Grid>
  )
}

export default Card