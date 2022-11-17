import React from 'react';
import MemoBlock from './MemoBlock';
import "../Styles/Board.css";


//-----------Engloba todo el tablero--------------------//
/*---Se itera cada uno de los bloques mediante un map del cual consigo un 
identificador unico para cada bloque junto con su informacion----*/

const Board = ({animating, handleMemoClick, memoBlocks}) => {
    return (
        <main className="board">
            {memoBlocks.map( (memoBlock, i) => {
                return <MemoBlock key={`${i}_${memoBlock.emoji}`} animating={animating} handleMemoClick={handleMemoClick} memoBlock={memoBlock} />
            })}
        </main>
    );
}





export default Board;
