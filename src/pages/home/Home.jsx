import React, { useState } from 'react';
import Header from '../../components/header/Header';
import * as S from './Home_Style';
import { Typewriter } from 'react-simple-typewriter';

function Home() {
  const [clicked, setClicked] = useState(false);
  function handleClick() {
    setClicked(true);
  }

  return (
    <>
      <Header />
      <S.Main>
        <p>Hello, again! I'm Pedro and for the last year I've been studying so I can become a front-end developer. I have to admit that my own designs leave a LOT to disere, but I'm certain I can code <S.Span>almost</S.Span> anything you can came up with!</p>
        {!clicked && <S.SeeBtn onClick={handleClick}>See More...</S.SeeBtn>}

        {clicked &&
          <S.Question_Box>
            <S.Bot_Talk>
              <Typewriter
                words={['So here we are again, uh? If you wanna know more about him, you have to answer some questions of mine, do you agree?']}
                cursor />
            </S.Bot_Talk>
          </S.Question_Box>
        }
      </S.Main>
    </>
  )
}

export default Home