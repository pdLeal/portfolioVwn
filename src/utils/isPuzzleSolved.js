export default function isPuzzleSolved(savedPiecesPosition, setProjectWinner, ref) {
    // Sorts the array and find the empty space for comparison
    const sortedPositions = savedPiecesPosition.filter(empty => empty != '').sort((a, b) => {
        return a - b;
    });

    let missingNumber;
    for (let i = 0; i < sortedPositions.length; i++) {
        if (sortedPositions[i] !== i + 1) {
            missingNumber = i + 1;

            sortedPositions.splice(i, 0, '');
            break;
        }
    }
    if (!missingNumber) sortedPositions.push(''); // In case the last number is missing

    if (JSON.stringify(savedPiecesPosition) == JSON.stringify(sortedPositions)) {
        setProjectWinner(true);
        localStorage.setItem('isProjectWinner', true);

        setTimeout(() => {
            ref.current.waitStop();
        }, 8000)

    }
}