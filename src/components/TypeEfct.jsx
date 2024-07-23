import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';

function TypeEfct({ text, onDone}) {
  const [typeEffect, helper] = useTypewriter({
    words: text,
    loop: 1,
    typeSpeed: 100,
    onLoopDone: () => {
      if (onDone) onDone(helper.isDone);
    }
  });

  return (
    <>
      <span>{typeEffect}</span>
      <Cursor />
    </>
  )
}

export default TypeEfct