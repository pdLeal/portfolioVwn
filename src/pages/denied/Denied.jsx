import React from 'react';
import * as S from './Denied_Style';
import hackVideo from '../../assets/hackVideo.mp4';
import hackImg1 from '../../assets/hackImg3.png';

function ErrorMsg({
  title='ERRO',
  msg='ACCESSES DENIED',
  width=200,
  height=200,
  top=1,
  left=1
}) {
  return (
    <S.OuterBox 
      $top={top}
      $left={left}
    >
      <p className='error flex'>{title}<span className='flex'>X</span></p>
      <S.InnerBox
        $width={width} 
        $height={height}
      >
        <div className='flex evly'>
          {/* <S.HackVideo autoPlay preload='true'>
            <source src={hackVideo} type="video/mp4" />
          </S.HackVideo>
          <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000" strokeWidth="1.5"><path fillRule="evenodd" clipRule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM9.70164 8.64124C9.40875 8.34835 8.93388 8.34835 8.64098 8.64124C8.34809 8.93414 8.34809 9.40901 8.64098 9.7019L10.9391 12L8.64098 14.2981C8.34809 14.591 8.34809 15.0659 8.64098 15.3588C8.93388 15.6517 9.40875 15.6517 9.70164 15.3588L11.9997 13.0607L14.2978 15.3588C14.5907 15.6517 15.0656 15.6517 15.3585 15.3588C15.6514 15.0659 15.6514 14.591 15.3585 14.2981L13.0604 12L15.3585 9.7019C15.6514 9.40901 15.6514 8.93414 15.3585 8.64124C15.0656 8.34835 14.5907 8.34835 14.2978 8.64124L11.9997 10.9393L9.70164 8.64124Z" fill="#c10b0b"></path></svg> */}
          <S.HackImg src={hackImg1} alt="" />
          <p>{msg}</p>
        </div>
        <div className='okBg flex'>
          <p className='ok flex'>Ok</p>
        </div>
      </S.InnerBox>
    </S.OuterBox>
  )
}

function Denied() {
  // TESTES
  const testArr = [];
  for (let i = 1; i <= 3; i++) {
    testArr.push(i);
  }
  
  // TESTES

  return (
    <S.Container>

    {/* TESTES */}
        {testArr.map((error) => {
          const windowWidth = window.innerWidth;
          const windowHeight = window.innerHeight; 

          const errorWidth = Math.random() * windowWidth;
          const errorHeight = Math.random() * windowHeight;

          const randomX = Math.floor(Math.random() * (windowWidth - errorWidth));
          const randomY = Math.floor(Math.random() * (windowHeight - errorHeight));
          
          return <ErrorMsg
          key={error}
          top={randomY}
          left={randomX} 
          width={errorWidth}
          height={errorHeight}
          />
        })}
    </S.Container>
  )
}

export default Denied