import { useEffect, useState } from "react";
import data from '../../data/Projetos.json';
import useWinnerContext from "../../contexts/WinnerContext";
import usePuzzleContext from "../../contexts/PuzzleContext";
import fisherYatesShuffle from "../../utils/fisherYatesShuffle";

function useBoardShuffler(gridLayout = 4) {
    const { setProjectUrl } = usePuzzleContext();

    const [shuffledPieces, setShuffledPieces] = useState([]);
    const [pieceImg, setPieceImg] = useState('');
    // Gera a grid e suas células
    const grid = gridLayout * gridLayout;
    const slots = [];
    for (let i = 1; i <= grid; i++) {
        slots.push(i);
    }

    // Embaralha as peças ao renderizar o comp e determina o projeto do puzzle

    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * 4);
        setPieceImg(data[randomNumber].img);

        setProjectUrl(data[randomNumber].pageUrl); // Garante que o btn peek project abra a página correta

        const shuffled = fisherYatesShuffle(slots);
        shuffled.pop();
        shuffled.push('');

        setShuffledPieces(shuffled);

        // Recupera as posições e quais peças podem se mover do local storage

        // const savedPositions = localStorage.getItem('piecesPosition');
        // const savedCanMove = localStorage.getItem('canMove');

        // if (savedPositions) {
        //     setSavedPiecesPosition(JSON.parse(savedPositions));
        //     setShuffledPieces(JSON.parse(savedPositions));

        // }

        // if (savedCanMove) {
        //     setCanMove(JSON.parse(savedCanMove));
        // }
    }, [])

    return { slots, shuffledPieces, pieceImg }
}

export default useBoardShuffler