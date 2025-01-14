export default function fisherYatesShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Escolha um índice aleatório entre 0 e i
        const j = Math.floor(Math.random() * (i + 1));
        // Troque os elementos array[i] e array[j]
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}