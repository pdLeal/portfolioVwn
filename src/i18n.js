import i18next from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from "react-i18next";

i18next.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    resources: {
        en: {
            translation: {
              // HELLO COMP  
                skipBtn: 'Skip',
                helloFromAN0X1A : {
                    line1: ['Oh! Hello! Sorry, didn\'t see you there...', 'I suppose you\'re here to see Pedro\'s portfolio, right?', 'But before, what about a game?', 'All you have to do is click the button =)'],
                    line2: ['It seems you\'re having a hard time clicking the button =S', 'Here, a button that won\'t runaway!']
                },
                clickBtn: 'Click Me',
                weakBtn: 'For the weak!',
              // HEADER
                menuItens: ['home', 'projects', 'about'],
            },
        },
        "pt-BR": {
            translation: {
              // HELLO COMP 
                skipBtn: 'Pular',
                helloFromAN0X1A : {
                    line1: ['Ah! Oi! Desculpe, não tinha te visto aí...', 'Imagino que esteja aqui para ver o portifólio do Pedro, certo?', 'Mas antes, que tal um jogo?', 'Tudo que você precisa fazer é clicar no botão =)'],
                    line2: ['Parece que você está tendo problemas em clicar no botão =S', 'Aqui, um botão que não vai fugir!']
                },
                clickBtn: 'Clique Aqui',
                weakBtn: 'Para os fracos!',
              // HEADER
                menuItens: ["início", "projetos", "sobre"],
            },
        }
    }
});