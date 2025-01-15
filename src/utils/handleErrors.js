export default function handleErrors(e, error) {
    if (error.message == "Too many clicks!") {
        const errorMsg = document.getElementById('error');
        errorMsg.classList.add("showError");

        setTimeout(() => {
            errorMsg.classList.remove("showError");

        }, 3500);

    } else {
        const clickedElem = e.target;
        clickedElem.classList.add("shakePiece");

        setTimeout(() => {
            clickedElem.classList.remove("shakePiece");

        }, 525);

    }
}