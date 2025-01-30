import { useEffect, useState } from "react";
import data from '../../data/Projetos.json';
import usePuzzleContext from "../../contexts/PuzzleContext";
import fisherYatesShuffle from "../../utils/fisherYatesShuffle";

function useBoardShuffler(gridLayout) {
    const { setSavedPiecesPosition, setProjectUrl } = usePuzzleContext();

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

        // Retrieves the positions from local storage
        const savedPositions = localStorage.getItem('piecesPosition');

        if (savedPositions) {
            setSavedPiecesPosition(JSON.parse(savedPositions));
            setShuffledPieces(JSON.parse(savedPositions));

        } else { // Shuffles the pieces every time the comp renders if the user didn't played yet
            const shuffled = fisherYatesShuffle(slots);
            shuffled.pop();
            shuffled.push('');

            setShuffledPieces(shuffled);

        }

        // Determines the project puzzle
        const randomProject = Math.floor(Math.random() * data.length);

        setPieceImg(data[randomProject].img);
        setProjectUrl(data[randomProject].pageUrl);

    }, [])

    return { slots, shuffledPieces, pieceImg }
}

export default useBoardShuffler