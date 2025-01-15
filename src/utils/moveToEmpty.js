export default function moveToEmpty(e) {
    const clickedElem = e.target;
    const emptyElem = document.querySelector('[data-empty=true]');

    // Calcula a posição do empty e do clicked
    const clicketRect = clickedElem.getBoundingClientRect();
    const emptyRect = emptyElem.getBoundingClientRect();

    // Calcula a diferença
    const deltaX = emptyRect.left - clicketRect.left;
    const deltaY = emptyRect.top - clicketRect.top;

    // Aplica um estilo de transformação temporária para a posição
    clickedElem.style.transition = "transform 0.5s ease-in-out";
    clickedElem.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

    // Aguarda a transição terminar antes de mover no DOM
    setTimeout(() => {
        // Remove o transform
        clickedElem.style.transition = "";
        clickedElem.style.transform = "";


        // Atualiza o DOM
        clickedElem.parentElement.dataset.empty = 'true';

        emptyElem.appendChild(clickedElem); // add a peça ao espaço vazio


        emptyElem.dataset.empty = 'false';
    }, 500); // Duração da animação

}


