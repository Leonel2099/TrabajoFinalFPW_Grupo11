import { useEffect, useState } from 'react';
import Board from './Board';
const emojiList = [...'👻💩👾👽🤖💀🤡👺'];



//-----------Representa la funcionalidad del Juego--------------------//
const Function = () => {
  const [shuffledMemoBlocks, setShuffledMemoBlocks] = useState([]);
  const [selectedMemoBlock, setselectedMemoBlock] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [count, setCount] = useState(0);
  const [result, setResult] = useState("");
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    const shuffledEmojiList = shuffleArray([...emojiList, ...emojiList]);
    setShuffledMemoBlocks(shuffledEmojiList.map((emoji, i) => ({ index: i, emoji, flipped: false })));
  }, []);

  // Con suffleArray mezcla los bloques en posiciones alentoria.
  const shuffleArray = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const handleMemoClick = memoBlock => {
    const flippedMemoBlock = { ...memoBlock, flipped: true };
    let shuffledMemoBlocksCopy = [...shuffledMemoBlocks];
    shuffledMemoBlocksCopy.splice(memoBlock.index, 1, flippedMemoBlock);
    setShuffledMemoBlocks(shuffledMemoBlocksCopy);
    if (selectedMemoBlock === null) {
      setselectedMemoBlock(memoBlock);
    } else if (selectedMemoBlock.emoji === memoBlock.emoji) {
      setselectedMemoBlock(null);
      setCount(count + 1);
      console.log(count);
      if (count === 7) {
        setResult("GANASTE");
      }
    } else {
      setAnimating(true);
      setTimeout(() => {
        shuffledMemoBlocksCopy.splice(memoBlock.index, 1, memoBlock);
        shuffledMemoBlocksCopy.splice(selectedMemoBlock.index, 1, selectedMemoBlock);
        setShuffledMemoBlocks(shuffledMemoBlocksCopy);
        setselectedMemoBlock(null);
        setAnimating(false);
      }, 1000);
      setCount2(count2 + 1);
      console.log(count2);
      if (count2 === 14) {
        setResult("PERDISTE");
      }
    }
  }

  return (
    <>
      <Board memoBlocks={shuffledMemoBlocks} animating={animating} handleMemoClick={handleMemoClick} />
      <h1 style={{ textAlign: "center", color: "white" }}>{result}</h1>
    </>

  );
}

export default Function;