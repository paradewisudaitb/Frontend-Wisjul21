const PuzzleBoard = (props: any) => {

  window.addEventListener('touchmove', e => e.preventDefault());

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
      onDragEnter={e => e.preventDefault()}
    >
      {props.children}
    </div>
  );
};

export default PuzzleBoard;