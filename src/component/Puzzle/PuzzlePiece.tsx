import React, {useState, useRef} from 'react';


const PuzzlePiece = (props: any) => {

  const listRef = useRef<HTMLInputElement>(null);

  const scrollUp = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: -150,
        behavior: 'smooth',
      });
    }
  };

  const scrollDown = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 150,
        behavior: 'smooth',
      });
    }
  };

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
    >
      {props.children}
    </div>
  );
};

export default PuzzlePiece;