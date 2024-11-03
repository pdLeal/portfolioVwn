import React, { useState } from 'react';
import * as S from './Dropdown_Style';

function Dropdown() {
    const [test, setTest] = useState(false);
    const [show, setShow] = useState(false);

    return (
        <S.Container $isOpen={test}>
            <S.DropdownTitle onClick={() => {
                setTest(!test);
                setShow(true);
            }}>
                <p>But what do coding and games have to do with each other?</p>
                <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M3.68478 18.7826L11.5642 4.77473C11.7554 4.43491 12.2446 4.43491 12.4358 4.77473L20.3152 18.7826C20.5454 19.1918 20.1357 19.6639 19.6982 19.4937L12.1812 16.5705C12.0647 16.5251 11.9353 16.5251 11.8188 16.5705L4.30179 19.4937C3.86426 19.6639 3.45463 19.1918 3.68478 18.7826Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </S.DropdownTitle>

            {show && <S.HiddenPara $isOpen={test}>Well, my first contact with code was by chance, without much interest, but I soon realized that I love learning as much as I love playing. Each technology/language is its own genre, with unique characteristics, nuances, and mechanics that must be mastered. Each project is like a game with its own challenges (levels), obstacles to overcome (bosses), and surprises (easter eggs) to discover along the way. For me, coding is about having fun, learning, practicing, growing, evolving—and, finally, the thrill of beating that goddamn Sekiro boss you've been struggling with for the past 6 months.</S.HiddenPara>}
        </S.Container>
    )
}

export default Dropdown