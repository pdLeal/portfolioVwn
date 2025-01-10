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
        helloFromAN0X1A: {
          line1: ['Oh! Hello! Sorry, didn\'t see you there...', 'I suppose you\'re here to see Pedro\'s portfolio, right?', 'But before, what about a game?', 'All you have to do is click the button =)'],
          line2: ['It seems you\'re having a hard time clicking the button =S', 'Here, a button that won\'t runaway!']
        },
        clickBtn: 'Click Me',
        weakBtn: 'For the weak!',
        // HEADER
        menuItens: ['home', 'projects', 'about'],
        // HOME
        homeAbout: "Hi there! I'm Pedro, and I've been on an exciting journey over the past couple of years, learning everything I can to become a front-end developer. While I’ll admit that designing isn’t my strongest suit, I’m confident I can bring just about any idea you have to life through code!",
          // Q-BOX
          seeBtn: "See More...",
          AN0X1Aquestions: {
            question1: ['', "So, it's you again, huh? If you're so eager to know more about him, you'll first have to humor me by answering a few of my questions. Deal?"],
            question2: ['', 'First Question: What is the answer to The Ultimate Question of Life, The Universe and Everything?'],
            question3: ['', 'Complete the sentence: We all float...'],
            question4: ['', 'You shall pass...for now.'],
          },
          anwsers: {
            q1_a1: "Yes",
            q1_a2: "No",
            q2_a1: "God",
            q2_a2: "Love",
            q2_a3: "Towels",
            q2_a4: "Evolution",
          },
          hint: "Hint: the answer is inside",
          hintSpan: "you",
          transition: "CHALLENGE ACCEPTED"
      },
    },
    "pt-BR": {
      translation: {
        // HELLO COMP 
        skipBtn: 'Pular',
        helloFromAN0X1A: {
          line1: ['Ah! Oi! Desculpe, não tinha te visto aí...', 'Imagino que esteja aqui para ver o portifólio do Pedro, certo?', 'Mas antes, que tal um jogo?', 'Tudo que você precisa fazer é clicar no botão =)'],
          line2: ['Parece que você está tendo problemas em clicar no botão =S', 'Aqui, um botão que não vai fugir!']
        },
        clickBtn: 'Clique Aqui',
        weakBtn: 'Para os fracos!',
        // HEADER
        menuItens: ["início", "projetos", "sobre"],
        // HOME
        homeAbout: "Olá! Me chamo Pedro e, nos últimos anos, estou em uma jornada incrível de aprendizado para me tornar um desenvolvedor front-end. Preciso admitir que design não é o meu forte, mas tenho confiança de que consigo transformar praticamente qualquer ideia em realidade com código!",
          // Q-BOX
          seeBtn: "Ver mais...",
          AN0X1Aquestions: {
            question1: ['', "Então, é você de novo, hein? Se você está tão ansioso para saber mais sobre ele, primeiro terá que responder algumas das minhas perguntas. Combinado?"],
            question2: ['', 'Primeira Pergunta: Qual a resposta para A Questão Fundamental da Vida, Universo e Tudo Mais?'],
            question3: ['', "Complete a frase: Nós todos flutuamos..."],
            question4: ['', "Você pode passar...por enquanto."],
          },
          anwsers: {
            q1_a1: "Sim",
            q1_a2: "Não",
            q2_a1: "Deus",
            q2_a2: "Amor",
            q2_a3: "Toalhas",
            q2_a4: "Evolução",
          },
          hint: "Dica: a resposta está dentro de",
          hintSpan: "você",
          transition: "DESAFIO ACEITO"
      },
    }
  }
});