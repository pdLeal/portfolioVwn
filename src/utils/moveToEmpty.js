export default function moveToEmpty(e) {
    const clickedElem = e.target;
    const emptyElem = document.querySelector('[data-empty=true]');

    // Calculate the position of clicked/empty elements and the difference between them
    const clicketRect = clickedElem.getBoundingClientRect();
    const emptyRect = emptyElem.getBoundingClientRect();

    const deltaX = emptyRect.left - clicketRect.left;
    const deltaY = emptyRect.top - clicketRect.top;

    // Apply a temporary transform style to clicked element
    clickedElem.style.transition = "transform 0.5s ease-in-out";
    clickedElem.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

    // Updates the DOM after the transition and removes temporary styles
    setTimeout(() => {
        clickedElem.style.transition = "";
        clickedElem.style.transform = "";

        clickedElem.parentElement.dataset.empty = 'true';
        emptyElem.appendChild(clickedElem); 

        emptyElem.dataset.empty = 'false';
    }, 500); // Must be the same as animation duration

}


