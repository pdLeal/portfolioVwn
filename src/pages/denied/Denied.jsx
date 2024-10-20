import React, { useEffect, useState } from 'react';
import * as S from './Denied_Style';
import hackVideo from '../../assets/hackVideo.mp4';
import hackImg1 from '../../assets/hackImg3.png';

function ErrorMsg({
  title = 'error',
  msg = 'access denied',
  color = 'red',
  areaColumn = '1',
  areaRow = '1',
  scale = 0
}) {
  return (
    <S.OuterBox
      $color={color}
      $areaColumn={areaColumn}
      $areaRow={areaRow}
      $scale={scale}
    >
      <p className='error flex'>{title}<span className='flex'>X</span></p>
      <S.InnerBox>
        <div className='flex evly'>
          {/* <S.HackVideo autoPlay preload='true'>
            <source src={hackVideo} type="video/mp4" />
          </S.HackVideo> */}
          <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000" strokeWidth="1.5"><path fillRule="evenodd" clipRule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM9.70164 8.64124C9.40875 8.34835 8.93388 8.34835 8.64098 8.64124C8.34809 8.93414 8.34809 9.40901 8.64098 9.7019L10.9391 12L8.64098 14.2981C8.34809 14.591 8.34809 15.0659 8.64098 15.3588C8.93388 15.6517 9.40875 15.6517 9.70164 15.3588L11.9997 13.0607L14.2978 15.3588C14.5907 15.6517 15.0656 15.6517 15.3585 15.3588C15.6514 15.0659 15.6514 14.591 15.3585 14.2981L13.0604 12L15.3585 9.7019C15.6514 9.40901 15.6514 8.93414 15.3585 8.64124C15.0656 8.34835 14.5907 8.34835 14.2978 8.64124L11.9997 10.9393L9.70164 8.64124Z" fill="#c10b0b"></path></svg>
          {/* <S.HackImg src={hackImg1} alt="" /> */}
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

  const [scale, setScale] = useState(0);

  useEffect(() => { // Responsável pela animação das msg de erro
    const timer = setTimeout(() => {
      setScale(1);
    }, 250);

    return () => clearTimeout(timer);
  }, [])

  const [numOfColumns, setNumOfColumns] = useState(1);
  const [numOfRows, setNumOfRows] = useState(1);

  useEffect(() => { // Determina a grid de acorda com a largura/altura da janela
    setNumOfColumns(Math.floor(window.innerWidth / 150));
    setNumOfRows(Math.floor(window.innerHeight / 150));

  }, [])

  const [testArr, setTestArr] = useState([]);

  useEffect(() => { // Posiciona as msg de erro na grid
    const maxOfErrors = numOfColumns * numOfRows;
    const newErros = []
    // Determinam o local da primeira msg de erro como o centro da janela
    const column = numOfColumns % 2 == 0 ? `${numOfColumns / 2} / span 2` : `${Math.floor(numOfColumns / 2)} / span 3`;
    const row = numOfRows % 2 == 0 ? `${numOfRows / 2} / span 2` : `${Math.floor(numOfRows / 2)} / span 3`;

    newErros.push({
      id: 1,
      title: 'error',
      msg: 'access denied',
      color: 'green',
      areaColumn: column,
      areaRow: row,
    });
    
    for (let i = 1; i <= maxOfErrors; i++) {

        newErros.push({
          id: i + 1,
          title: 'error',
          msg: 'access denied',
          color: 'red',
          areaColumn: i,
          areaRow: i,
        });

      

      setTestArr(newErros);
    }

  }, [numOfColumns]);


  // TESTES

  return (
    <S.Container
      $numOfColumns={numOfColumns}
      $numOfRows={numOfRows}
    >

      {/* TESTES */}

      {testArr.map((error) => {

        return <ErrorMsg
          key={error.id}
          title={error.title}
          msg={error.msg}
          color={error.color}
          areaColumn={error.areaColumn}
          areaRow={error.areaRow}
          scale={scale}
        />
      })}

    </S.Container>
  )
}

export default Denied