import React from "react";
import "../Styles/MemoBlock.css";


//-----------Representa cada carta o bloque del tablero --------------------//
const MemoBlock = ({animating, handleMemoClick, memoBlock}) => (
    <div className="memo-block" onClick={() => (!memoBlock.flipped && !animating) && handleMemoClick(memoBlock)}>
        <div className={`memo-block-inner ${memoBlock.flipped && 'memo-block-flipped'}`}>
            <div className="memo-block-front">
            </div>
            <div className="memo-block-back">
                {memoBlock.emoji}
            </div>
        </div>
    </div>
)

export default MemoBlock;