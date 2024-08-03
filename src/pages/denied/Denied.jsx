import React from 'react';
import * as S from './Denied_Style';
import hackVideo from '../../assets/hackVideo.mp4'


function Denied() {
  return (
    <S.Flex>
      <video controls autoPlay preload='true'>
        <source src={hackVideo} type="video/mp4" />
      </video>
    </S.Flex>
  )
}

export default Denied