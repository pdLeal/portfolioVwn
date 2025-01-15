import { useEffect, useState } from "react";
import data from '../../data/Projetos.json';
import usePuzzleContext from "../../contexts/PuzzleContext";
import fisherYatesShuffle from "../../utils/fisherYatesShuffle";

function useBoardShuffler(gridLayout = 4) {
    const { setSavedPiecesPosition, setProjectUrl, setCanMove, } = usePuzzleContext();

    const [shuffledPieces, setShuffledPieces] = useState([]);
    const [pieceImg, setPieceImg] = useState('');

    // Initializes the grid and its slots
    const grid = gridLayout * gridLayout;
    const slots = [];
    for (let i = 1; i <= grid; i++) {
        slots.push(i);
    }


    useEffect(() => {
        if (slots.includes("")) return; // Prevents a bug that creates 2 empty slots

        // Shuffles the pieces every time the comp renders
        const shuffled = fisherYatesShuffle(slots);
        shuffled.pop();
        shuffled.push('');

        setShuffledPieces(shuffled);

        // Determines the project puzzle
        const randomProject = Math.floor(Math.random() * data.length);

        setPieceImg(data[randomProject].img);
        setProjectUrl(data[randomProject].pageUrl);


        // Retrieves the positions and which pieces can move from local storage
        const savedPositions = localStorage.getItem('piecesPosition');
        const savedCanMove = localStorage.getItem('canMove');

        if (savedPositions) {
            setSavedPiecesPosition(JSON.parse(savedPositions));
            setShuffledPieces(JSON.parse(savedPositions));

        }

        if (savedCanMove) {
            setCanMove(JSON.parse(savedCanMove));
        }
    }, [])

    return { slots, shuffledPieces, pieceImg }
}

export default useBoardShuffler