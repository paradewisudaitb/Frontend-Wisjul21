import React from 'react';

const PuzzleBoard = (props: any) => {

  const drop = (e: any) => {
    e.preventDefault();
    const piece_id = e.dataTransfer.getData('piece_id');

    const piece: any = document.getElementById(piece_id);
    piece.style.display = 'block';

    e.target.appendChild(piece);
  };

  const dragOver = (e: any) => {
    e.preventDefault();
  };


  return (
    <div
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
};

export default PuzzleBoard;