import React from 'react';
import Header from '../../components/header/Header';
import * as S from './Home_Style';
import QBox from '../../components/questionBox/QBox';
import Puzzle from '../../components/puzzle/Puzzle';
import Footer from '../../components/footer/Footer';
import { useTranslation } from 'react-i18next';


function Home() {
  // I18NEXT
  const {t} = useTranslation();

  return (
    <>
      <Header />
      <S.Main>
        <S.About_Section>
          <p>{t("homeAbout")}</p>
          <QBox />
        </S.About_Section>
        <S.Projects>
          <S.H2>{t("puzzleName")}</S.H2>
          <Puzzle />
        </S.Projects>
      </S.Main>
      <Footer />
    </>
  )
}

export default Home