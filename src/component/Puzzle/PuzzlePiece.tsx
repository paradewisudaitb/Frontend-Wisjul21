import React, {useRef} from 'react';

const PuzzlePiece = (props: any) => {

  const dragStart = (e: any) => {
    const target = e.target;

    e.dataTransfer.setData('piece_id', target.id);

    setTimeout(() => {
      target.style.display = 'none';
    }, 0);
  };

  const dragOver = (e: any) => {
    e.stopPropagation();
  };


  return (
    <div
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default PuzzlePiece;